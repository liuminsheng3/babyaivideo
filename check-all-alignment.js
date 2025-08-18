const { chromium } = require('playwright');

async function checkAllAlignment() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('Checking alignment for all sections...\n');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(3000);
  
  // Scroll through the page and check each section
  const sections = await page.evaluate(() => {
    const results = [];
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const headings = section.querySelectorAll('h1, h2, h3');
      const paragraphs = section.querySelectorAll('p');
      
      const sectionInfo = {
        index: index,
        className: section.className,
        headings: [],
        paragraphs: []
      };
      
      headings.forEach(h => {
        const styles = window.getComputedStyle(h);
        const text = h.textContent?.substring(0, 30);
        sectionInfo.headings.push({
          tag: h.tagName,
          text: text,
          textAlign: styles.textAlign,
          marginLeft: styles.marginLeft,
          marginRight: styles.marginRight,
          className: h.className
        });
      });
      
      paragraphs.forEach(p => {
        const styles = window.getComputedStyle(p);
        const text = p.textContent?.substring(0, 30);
        const isLeftAligned = styles.textAlign === 'left' || styles.textAlign === 'start';
        const parent = p.parentElement;
        const parentCentered = parent?.className.includes('text-center');
        
        if (isLeftAligned && !parentCentered && !p.className.includes('text-sm')) {
          sectionInfo.paragraphs.push({
            text: text,
            textAlign: styles.textAlign,
            className: p.className,
            parentClassName: parent?.className
          });
        }
      });
      
      if (sectionInfo.headings.length > 0 || sectionInfo.paragraphs.length > 0) {
        results.push(sectionInfo);
      }
    });
    
    return results;
  });
  
  console.log('=== Alignment Issues by Section ===\n');
  
  sections.forEach((section, i) => {
    let hasIssues = false;
    
    // Check headings
    section.headings.forEach(h => {
      if (h.textAlign !== 'center' && !h.text?.includes('Simple Upload') && !h.text?.includes('Advanced AI') && !h.text?.includes('Professional')) {
        if (!hasIssues) {
          console.log(`Section ${section.index}:`);
          hasIssues = true;
        }
        console.log(`  ❌ ${h.tag}: "${h.text}..." - text-align: ${h.textAlign}`);
      }
    });
    
    // Check paragraphs
    section.paragraphs.forEach(p => {
      if (p.textAlign !== 'center') {
        if (!hasIssues) {
          console.log(`Section ${section.index}:`);
          hasIssues = true;
        }
        console.log(`  ❌ P: "${p.text}..." - text-align: ${p.textAlign}`);
      }
    });
    
    if (hasIssues) {
      console.log('');
    }
  });
  
  // Take screenshots of problematic areas
  await page.screenshot({ path: 'screenshots/alignment-check.png', fullPage: true });
  
  await browser.close();
  console.log('Screenshot saved to screenshots/alignment-check.png');
}

checkAllAlignment().catch(console.error);