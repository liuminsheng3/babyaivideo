const { chromium } = require('playwright');

async function checkCentering() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('Checking container centering...\n');
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(3000);
  
  // Check container elements
  const containers = await page.evaluate(() => {
    const results = [];
    const containers = document.querySelectorAll('.container');
    
    containers.forEach((container, index) => {
      const rect = container.getBoundingClientRect();
      const styles = window.getComputedStyle(container);
      const parent = container.parentElement;
      const parentRect = parent?.getBoundingClientRect();
      
      // Calculate centering
      const leftMargin = rect.left;
      const rightMargin = window.innerWidth - rect.right;
      const isCentered = Math.abs(leftMargin - rightMargin) < 10;
      
      results.push({
        index: index,
        width: rect.width,
        left: rect.left,
        right: rect.right,
        leftMargin: leftMargin,
        rightMargin: rightMargin,
        isCentered: isCentered,
        marginLeft: styles.marginLeft,
        marginRight: styles.marginRight,
        className: container.className,
        sectionText: container.querySelector('h2')?.textContent?.substring(0, 30)
      });
    });
    
    return results;
  });
  
  console.log('=== Container Analysis ===\n');
  containers.forEach(cont => {
    console.log(`Container ${cont.index}: ${cont.sectionText || 'No title'}`);
    console.log(`  Width: ${cont.width}px`);
    console.log(`  Left margin: ${cont.leftMargin}px`);
    console.log(`  Right margin: ${cont.rightMargin}px`);
    console.log(`  Centered: ${cont.isCentered ? '✅ Yes' : '❌ No'}`);
    console.log(`  CSS margins: ${cont.marginLeft} / ${cont.marginRight}`);
    console.log('');
  });
  
  // Take screenshot
  await page.screenshot({ path: 'screenshots/centered-check.png', fullPage: false });
  
  // Check if any container is not centered
  const notCentered = containers.filter(c => !c.isCentered);
  if (notCentered.length > 0) {
    console.log(`❌ ${notCentered.length} containers are not centered!`);
  } else {
    console.log('✅ All containers are properly centered!');
  }
  
  await browser.close();
}

checkCentering().catch(console.error);