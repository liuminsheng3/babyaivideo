const { chromium } = require('playwright');

async function checkUI() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('Checking English homepage...');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshots/en-homepage.png', fullPage: true });
  
  console.log('Checking Chinese homepage...');
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshots/zh-homepage.png', fullPage: true });
  
  // Check specific elements
  console.log('\nChecking navbar spacing...');
  const navbar = await page.locator('nav').first();
  const navbarBox = await navbar.boundingBox();
  console.log('Navbar dimensions:', navbarBox);
  
  // Check language switcher and TRY NOW button
  const langButton = await page.locator('a:has-text("English")').first();
  const tryButton = await page.locator('a:has-text("TRY NOW")').first();
  
  const langBox = await langButton.boundingBox();
  const tryBox = await tryButton.boundingBox();
  
  console.log('Language button:', langBox);
  console.log('TRY NOW button:', tryBox);
  
  if (langBox && tryBox) {
    const gap = tryBox.x - (langBox.x + langBox.width);
    console.log(`Gap between buttons: ${gap}px`);
    if (gap < 10) {
      console.log('WARNING: Buttons might be overlapping!');
    } else {
      console.log('Buttons spacing looks good.');
    }
  }
  
  // Check text alignment in sections
  console.log('\nChecking text alignment...');
  const sections = await page.locator('section').all();
  for (let i = 0; i < Math.min(sections.length, 5); i++) {
    const section = sections[i];
    const headings = await section.locator('h2, h3').all();
    for (const heading of headings) {
      const styles = await heading.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          textAlign: computed.textAlign,
          marginLeft: computed.marginLeft,
          marginRight: computed.marginRight,
          display: computed.display,
          justifyContent: computed.justifyContent
        };
      });
      const text = await heading.textContent();
      if (styles.textAlign !== 'center' && !text.includes('Advanced AI') && !text.includes('The AI Process')) {
        console.log(`Section ${i} heading "${text.substring(0, 30)}..." - text-align: ${styles.textAlign}`);
      }
    }
  }
  
  await browser.close();
  console.log('\nScreenshots saved to screenshots/ folder');
}

checkUI().catch(console.error);