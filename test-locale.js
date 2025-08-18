const { chromium } = require('playwright');

async function testLocale() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  console.log('Testing locale system...\n');
  
  // Test Chinese page
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(2000);
  
  // Get all text content
  const pageContent = await page.evaluate(() => {
    const texts = {};
    // Get h1
    const h1 = document.querySelector('h1');
    texts.h1 = h1?.textContent;
    
    // Get h2
    const h2 = document.querySelector('h2');
    texts.h2 = h2?.textContent;
    
    // Get first paragraph
    const p = document.querySelector('section p');
    texts.p = p?.textContent;
    
    // Get stats
    const stats = document.querySelectorAll('.text-zinc-500');
    texts.stats = Array.from(stats).map(s => s.textContent);
    
    // Get buttons
    const buttons = document.querySelectorAll('button, a');
    texts.buttons = Array.from(buttons).slice(0, 5).map(b => b.textContent?.trim());
    
    return texts;
  });
  
  console.log('Chinese Page Content:');
  console.log('H1:', pageContent.h1);
  console.log('H2:', pageContent.h2);
  console.log('P:', pageContent.p?.substring(0, 50) + '...');
  console.log('Stats:', pageContent.stats);
  console.log('Buttons:', pageContent.buttons);
  
  // Check if using Chinese
  const hasChinese = /[\u4e00-\u9fa5]/.test(JSON.stringify(pageContent));
  console.log('\nContains Chinese characters:', hasChinese);
  
  // Test English page
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(2000);
  
  const enContent = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    return h1?.textContent;
  });
  
  console.log('\nEnglish Page H1:', enContent);
  
  await browser.close();
  
  console.log('\n=== Diagnosis ===');
  if (!hasChinese) {
    console.log('❌ Chinese page is not showing Chinese content');
    console.log('Possible issues:');
    console.log('1. Translations not being loaded properly');
    console.log('2. Components not using useTranslations hook');
    console.log('3. Hardcoded English text in components');
  } else {
    console.log('✅ Localization is working');
  }
}

testLocale().catch(console.error);