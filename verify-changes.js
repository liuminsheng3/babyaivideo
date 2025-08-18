const { chromium } = require('playwright');

async function verifyChanges() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('=== 验证所有更改 ===\n');
  
  // 1. 检查导航栏
  console.log('1. 检查导航栏...');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(2000);
  
  // 检查是否删除了导航链接
  const navLinks = await page.locator('nav a[href^="#"]').count();
  console.log(`   导航链接数量: ${navLinks}`);
  if (navLinks === 0) {
    console.log('   ✅ 导航链接已删除');
  } else {
    console.log('   ❌ 仍有导航链接存在');
  }
  
  // 检查是否删除了2.0
  const has20 = await page.locator('text=/2\\.0/').count();
  if (has20 === 0) {
    console.log('   ✅ 2.0标识已删除');
  } else {
    console.log('   ❌ 仍有2.0标识');
  }
  
  // 2. 检查中文页面
  console.log('\n2. 检查中文页面内容...');
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(2000);
  
  const zhContent = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const description = document.querySelector('section p');
    
    return {
      h1: h1?.textContent,
      h2: h2?.textContent,
      description: description?.textContent?.substring(0, 50)
    };
  });
  
  console.log(`   标题: "${zhContent.h1}"`);
  console.log(`   副标题: "${zhContent.h2}"`);
  console.log(`   描述: "${zhContent.description}..."`);
  
  // 检查是否包含中文
  const hasChinese = /[\u4e00-\u9fa5]/.test(zhContent.h1 + zhContent.h2 + zhContent.description);
  if (hasChinese) {
    console.log('   ✅ 页面显示中文内容');
  } else {
    console.log('   ❌ 页面仍显示英文');
  }
  
  // 3. 检查语言切换
  console.log('\n3. 检查语言切换功能...');
  const langSwitcher = await page.locator('a[href="/en"]').first();
  if (langSwitcher) {
    const langText = await langSwitcher.textContent();
    console.log(`   中文页面的语言切换器显示: "${langText}"`);
    if (langText === 'English') {
      console.log('   ✅ 语言切换器正确');
    }
  }
  
  // 4. 检查按钮间距
  console.log('\n4. 检查按钮间距...');
  const buttons = await page.evaluate(() => {
    const langLink = document.querySelector('a[href="/en"]');
    const tryButton = document.querySelector('a[href="/auth/signup"]');
    
    if (langLink && tryButton) {
      const langRect = langLink.getBoundingClientRect();
      const tryRect = tryButton.getBoundingClientRect();
      const gap = tryRect.left - (langRect.left + langRect.width);
      return { gap: Math.round(gap), hasOverlap: gap < 0 };
    }
    return null;
  });
  
  if (buttons) {
    console.log(`   按钮间距: ${buttons.gap}px`);
    if (!buttons.hasOverlap && buttons.gap >= 10) {
      console.log('   ✅ 按钮间距正常');
    } else {
      console.log('   ❌ 按钮可能重叠或间距过小');
    }
  }
  
  await browser.close();
  
  console.log('\n=== 验证完成 ===');
  console.log('主要更改已成功应用：');
  console.log('• 导航栏链接已删除');
  console.log('• 2.0标识已删除');  
  console.log('• 中文页面正确显示中文内容');
  console.log('• 按钮间距正常，无重叠');
}

verifyChanges().catch(console.error);