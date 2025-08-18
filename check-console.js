const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Listen for console messages
  page.on('console', msg => {
    if (msg.text().includes('Hero translations')) {
      console.log('Console:', msg.text());
    }
  });
  
  console.log('Loading Chinese page...');
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(3000);
  
  // Also check the actual DOM content
  const title = await page.locator('h1').textContent();
  console.log('Actual H1 content:', title);
  
  // Check locale from page context
  const locale = await page.evaluate(() => {
    // Try to get locale from various sources
    return {
      htmlLang: document.documentElement.lang,
      pathname: window.location.pathname
    };
  });
  console.log('Page locale info:', locale);
  
  await page.waitForTimeout(2000);
  await browser.close();
})();
