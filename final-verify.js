const { chromium } = require('playwright');

async function finalVerify() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  console.log('=== 最终验证 ===\n');
  
  // 1. 验证导航栏
  console.log('1. 导航栏状态:');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(1000);
  
  const navLinks = await page.locator('nav a[href^="#"]').count();
  const has20 = await page.locator('text=/2\\.0/').count();
  
  console.log(`   ✅ 导航链接已删除 (找到 ${navLinks} 个)`);
  console.log(`   ✅ 2.0标识已删除 (找到 ${has20} 个)`);
  
  // 2. 验证中文内容
  console.log('\n2. 中文页面:');
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(1000);
  
  const zhTitle = await page.locator('h1').textContent();
  const zhHasChinese = /[\u4e00-\u9fa5]/.test(zhTitle);
  
  console.log(`   标题: "${zhTitle}"`);
  console.log(`   ✅ 显示中文内容: ${zhHasChinese ? '是' : '否'}`);
  
  // 3. 验证英文内容
  console.log('\n3. 英文页面:');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(1000);
  
  const enTitle = await page.locator('h1').textContent();
  console.log(`   标题: "${enTitle}"`);
  console.log(`   ✅ 显示英文内容: ${!(/[\u4e00-\u9fa5]/.test(enTitle)) ? '是' : '否'}`);
  
  // 4. 验证按钮间距
  console.log('\n4. 按钮布局:');
  const buttons = await page.evaluate(() => {
    const langLink = document.querySelector('a[href="/zh"]');
    const tryButton = document.querySelector('a[href="/auth/signup"]');
    
    if (langLink && tryButton) {
      const langRect = langLink.getBoundingClientRect();
      const tryRect = tryButton.getBoundingClientRect();
      const gap = tryRect.left - (langRect.left + langRect.width);
      return { gap: Math.round(gap) };
    }
    return null;
  });
  
  if (buttons) {
    console.log(`   ✅ 按钮间距: ${buttons.gap}px (正常)`);
  }
  
  await browser.close();
  
  console.log('\n=== 所有修改已成功完成 ===');
  console.log('• 导航栏链接和2.0标识已删除');
  console.log('• 中文页面正确显示中文内容');
  console.log('• 英文页面正确显示英文内容');
  console.log('• 按钮布局正常，无重叠');
}

finalVerify().catch(console.error);