const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // 检查中文页面
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(1000);
  
  const title = await page.locator('h1').first().textContent();
  const hasChineseTitle = /[\u4e00-\u9fa5]/.test(title);
  
  console.log('中文页面标题:', title);
  console.log('是否包含中文:', hasChineseTitle);
  
  // 检查英文页面
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(1000);
  
  const enTitle = await page.locator('h1').first().textContent();
  console.log('英文页面标题:', enTitle);
  
  await browser.close();
})();
