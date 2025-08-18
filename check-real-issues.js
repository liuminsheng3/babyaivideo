const { chromium } = require('playwright');

async function checkRealIssues() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('Checking for real alignment issues...\n');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(3000);
  
  // Check sections that should be centered
  const issues = await page.evaluate(() => {
    const problems = [];
    
    // Check main section titles (h2 tags that are direct children of sections)
    const sectionTitles = document.querySelectorAll('section > div > h2, section > div > div > h2');
    sectionTitles.forEach(h2 => {
      const styles = window.getComputedStyle(h2);
      const parent = h2.parentElement;
      const isInGrid = parent?.className.includes('grid') || parent?.parentElement?.className.includes('grid');
      
      // Skip if it's part of a grid layout (likely intentional)
      if (!isInGrid && styles.textAlign !== 'center') {
        problems.push({
          type: 'Section Title',
          text: h2.textContent?.substring(0, 40),
          textAlign: styles.textAlign,
          className: h2.className
        });
      }
    });
    
    // Check standalone paragraphs that should be centered
    const standaloneParagraphs = document.querySelectorAll('section > div > p, section > div > div > p');
    standaloneParagraphs.forEach(p => {
      const styles = window.getComputedStyle(p);
      const parent = p.parentElement;
      const isInGrid = parent?.className.includes('grid') || parent?.parentElement?.className.includes('grid');
      const isDescription = p.className.includes('text-lg') || p.className.includes('text-xl');
      
      // Only check description paragraphs that aren't in grids
      if (isDescription && !isInGrid && styles.textAlign !== 'center') {
        problems.push({
          type: 'Description',
          text: p.textContent?.substring(0, 40),
          textAlign: styles.textAlign,
          className: p.className
        });
      }
    });
    
    // Check CTA sections
    const ctaSections = document.querySelectorAll('.bg-primary\\/5, .bg-black.rounded-2xl');
    ctaSections.forEach(section => {
      const heading = section.querySelector('h3');
      const paragraph = section.querySelector('p');
      
      if (heading) {
        const styles = window.getComputedStyle(heading);
        if (styles.textAlign !== 'center') {
          problems.push({
            type: 'CTA Heading',
            text: heading.textContent?.substring(0, 40),
            textAlign: styles.textAlign,
            element: 'h3'
          });
        }
      }
      
      if (paragraph) {
        const styles = window.getComputedStyle(paragraph);
        if (styles.textAlign !== 'center') {
          problems.push({
            type: 'CTA Paragraph',
            text: paragraph.textContent?.substring(0, 40),
            textAlign: styles.textAlign,
            element: 'p'
          });
        }
      }
    });
    
    return problems;
  });
  
  if (issues.length === 0) {
    console.log('✅ No real alignment issues found!');
    console.log('\nNote: Two-column layouts, FAQ items, and feature cards are intentionally left-aligned.');
  } else {
    console.log('=== Real Alignment Issues ===\n');
    issues.forEach(issue => {
      console.log(`❌ ${issue.type}: "${issue.text}..."`);
      console.log(`   text-align: ${issue.textAlign}`);
      console.log('');
    });
  }
  
  await browser.close();
}

checkRealIssues().catch(console.error);