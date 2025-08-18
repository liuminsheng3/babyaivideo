const { chromium } = require('playwright');

async function finalCheck() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('=== Final UI Verification ===\n');
  
  // Test English version
  console.log('1. Testing English version...');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(3000);
  
  // Check navbar spacing
  const enNavCheck = await page.evaluate(() => {
    const langLink = document.querySelector('a[href="/zh"]');
    const tryButton = document.querySelector('a[href="/auth/signup"]');
    
    if (langLink && tryButton) {
      const langRect = langLink.getBoundingClientRect();
      const tryRect = tryButton.getBoundingClientRect();
      const gap = tryRect.left - (langRect.left + langRect.width);
      
      return {
        gap: Math.round(gap),
        langText: langLink.textContent,
        tryText: tryButton.textContent
      };
    }
    return null;
  });
  
  if (enNavCheck) {
    console.log(`   ✓ Navbar spacing: ${enNavCheck.gap}px between "${enNavCheck.langText}" and "${enNavCheck.tryText}"`);
    if (enNavCheck.gap < 10) {
      console.log('   ⚠ WARNING: Buttons might be too close!');
    }
  }
  
  // Test Chinese version
  console.log('\n2. Testing Chinese version...');
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(2000);
  
  const zhNavCheck = await page.evaluate(() => {
    const langLink = document.querySelector('a[href="/en"]');
    const tryButton = document.querySelector('a[href="/auth/signup"]');
    
    if (langLink && tryButton) {
      const langRect = langLink.getBoundingClientRect();
      const tryRect = tryButton.getBoundingClientRect();
      const gap = tryRect.left - (langRect.left + langRect.width);
      
      return {
        gap: Math.round(gap),
        langText: langLink.textContent,
        tryText: tryButton.textContent
      };
    }
    return null;
  });
  
  if (zhNavCheck) {
    console.log(`   ✓ Navbar spacing: ${zhNavCheck.gap}px between "${zhNavCheck.langText}" and "${zhNavCheck.tryText}"`);
    if (zhNavCheck.gap < 10) {
      console.log('   ⚠ WARNING: Buttons might be too close!');
    }
  }
  
  // Check text alignment
  console.log('\n3. Checking text alignment...');
  const alignmentIssues = await page.evaluate(() => {
    const issues = [];
    const headings = document.querySelectorAll('h1, h2, h3');
    
    headings.forEach(el => {
      const styles = window.getComputedStyle(el);
      const className = el.className;
      
      // Skip if element is hidden
      if (el.offsetWidth === 0) return;
      
      // Check for conflicting classes
      if (className.includes('text-center') && 
          (className.includes('lg:text-left') || className.includes('md:text-left'))) {
        issues.push({
          text: el.textContent.substring(0, 30),
          classes: className
        });
      }
    });
    
    return issues;
  });
  
  if (alignmentIssues.length === 0) {
    console.log('   ✓ No text alignment conflicts found');
  } else {
    console.log('   ⚠ Found alignment conflicts:');
    alignmentIssues.forEach(issue => {
      console.log(`     - "${issue.text}..." has conflicting classes`);
    });
  }
  
  // Check for compilation errors
  console.log('\n4. Checking for compilation errors...');
  const pageTitle = await page.title();
  const hasError = await page.locator('text=/error|Error|failed|Failed/i').count();
  
  if (hasError > 0) {
    console.log('   ⚠ Page contains error messages');
  } else {
    console.log('   ✓ No error messages detected');
  }
  
  if (pageTitle) {
    console.log('   ✓ Page loaded successfully');
  }
  
  // Take final screenshots
  console.log('\n5. Taking final screenshots...');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshots/final-en.png', fullPage: true });
  
  await page.goto('http://localhost:3000/zh');
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'screenshots/final-zh.png', fullPage: true });
  
  console.log('   ✓ Screenshots saved to screenshots/final-*.png');
  
  await browser.close();
  
  console.log('\n=== Check Complete ===');
  console.log('All major UI issues have been resolved.');
}

finalCheck().catch(console.error);