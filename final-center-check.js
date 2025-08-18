const { chromium } = require('playwright');

async function finalCenterCheck() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('=== 最终居中验证 ===\n');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(2000);
  
  // Check a few key sections
  const sections = await page.evaluate(() => {
    const results = [];
    
    // Check first few sections
    const containers = document.querySelectorAll('.container');
    const sampleContainers = Array.from(containers).slice(0, 5);
    
    sampleContainers.forEach((container, i) => {
      const rect = container.getBoundingClientRect();
      const leftMargin = rect.left;
      const rightMargin = window.innerWidth - rect.right;
      const diff = Math.abs(leftMargin - rightMargin);
      
      results.push({
        section: container.querySelector('h2')?.textContent?.substring(0, 30) || `Section ${i}`,
        leftMargin: Math.round(leftMargin),
        rightMargin: Math.round(rightMargin),
        difference: Math.round(diff),
        isCentered: diff < 10
      });
    });
    
    return results;
  });
  
  console.log('容器居中检查结果:\n');
  sections.forEach(section => {
    console.log(`${section.section}`);
    console.log(`  左边距: ${section.leftMargin}px, 右边距: ${section.rightMargin}px`);
    console.log(`  差异: ${section.difference}px`);
    console.log(`  ${section.isCentered ? '✅ 已居中' : '❌ 未居中'}\n`);
  });
  
  // Take screenshots
  await page.screenshot({ path: 'screenshots/final-centered.png', fullPage: false });
  
  // Scroll down and take another screenshot
  await page.evaluate(() => window.scrollTo(0, 1000));
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/final-centered-scroll.png', fullPage: false });
  
  const allCentered = sections.every(s => s.isCentered);
  
  if (allCentered) {
    console.log('=== ✅ 所有容器已正确居中 ===');
  } else {
    console.log('=== ❌ 仍有容器未居中 ===');
  }
  
  await browser.close();
  
  console.log('\n截图已保存到 screenshots/ 文件夹');
}

finalCenterCheck().catch(console.error);