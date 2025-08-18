const { chromium } = require('playwright');

async function checkAlignment() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('Navigating to homepage...');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(3000);
  
  // Get all text elements and check their alignment
  const issues = await page.evaluate(() => {
    const problems = [];
    
    // Check all h1, h2, h3, p elements
    const elements = document.querySelectorAll('h1, h2, h3, p, button');
    
    elements.forEach(el => {
      const styles = window.getComputedStyle(el);
      const rect = el.getBoundingClientRect();
      const text = el.textContent?.substring(0, 50);
      const parent = el.parentElement;
      const parentStyles = parent ? window.getComputedStyle(parent) : null;
      
      // Skip hidden elements
      if (rect.width === 0 || rect.height === 0) return;
      
      // Check if element should be centered but isn't
      const hasTextCenter = el.className.includes('text-center') || 
                           (parent && parent.className.includes('text-center'));
      const hasMxAuto = el.className.includes('mx-auto') || 
                        (parent && parent.className.includes('mx-auto'));
      const actualTextAlign = styles.textAlign;
      
      // Check for visual centering issues
      const containerWidth = parent ? parent.getBoundingClientRect().width : window.innerWidth;
      const leftSpace = rect.left - (parent ? parent.getBoundingClientRect().left : 0);
      const rightSpace = containerWidth - (rect.left + rect.width) + (parent ? parent.getBoundingClientRect().left : 0);
      const isCenteredVisually = Math.abs(leftSpace - rightSpace) < 50; // 50px tolerance
      
      // Report issues
      if (hasTextCenter && actualTextAlign !== 'center') {
        problems.push({
          type: 'text-align',
          element: el.tagName,
          text: text,
          expected: 'center',
          actual: actualTextAlign,
          className: el.className
        });
      }
      
      if (el.tagName === 'BUTTON' && !isCenteredVisually && hasMxAuto) {
        problems.push({
          type: 'button-centering',
          element: el.tagName,
          text: text,
          leftSpace: Math.round(leftSpace),
          rightSpace: Math.round(rightSpace),
          className: el.className
        });
      }
      
      // Check for overlapping elements
      const allElements = document.elementsFromPoint(rect.left + rect.width/2, rect.top + rect.height/2);
      if (allElements.length > 3 && el.tagName === 'BUTTON') { // More than expected layers
        const overlapping = allElements.filter(e => 
          e !== el && 
          e.tagName === 'BUTTON' || 
          e.tagName === 'A'
        );
        if (overlapping.length > 0) {
          problems.push({
            type: 'overlap',
            element: el.tagName,
            text: text,
            overlappingWith: overlapping[0].textContent?.substring(0, 30)
          });
        }
      }
    });
    
    return problems;
  });
  
  console.log('\n=== Alignment Issues Found ===\n');
  
  if (issues.length === 0) {
    console.log('No alignment issues detected!');
  } else {
    issues.forEach((issue, i) => {
      console.log(`Issue ${i + 1}:`);
      console.log(`  Type: ${issue.type}`);
      console.log(`  Element: ${issue.element}`);
      console.log(`  Text: "${issue.text}"`);
      if (issue.type === 'text-align') {
        console.log(`  Expected: ${issue.expected}, Actual: ${issue.actual}`);
      } else if (issue.type === 'button-centering') {
        console.log(`  Left space: ${issue.leftSpace}px, Right space: ${issue.rightSpace}px`);
      } else if (issue.type === 'overlap') {
        console.log(`  Overlapping with: "${issue.overlappingWith}"`);
      }
      console.log(`  Classes: ${issue.className}`);
      console.log('');
    });
  }
  
  // Take a full page screenshot for visual inspection
  await page.screenshot({ path: 'screenshots/full-page-check.png', fullPage: true });
  
  await browser.close();
  console.log('Full page screenshot saved to screenshots/full-page-check.png');
}

checkAlignment().catch(console.error);