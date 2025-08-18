const { chromium } = require('playwright');

async function checkTextSizes() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('=== 文字大小和间距检查 ===\n');
  
  // Wait for server to be ready
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  await page.goto('http://localhost:3000/en');
  await page.waitForTimeout(2000);
  
  // Check computed styles of various elements
  const styles = await page.evaluate(() => {
    const results = [];
    
    // Check HTML base font size
    const htmlStyle = window.getComputedStyle(document.documentElement);
    results.push({
      element: 'HTML Base',
      fontSize: htmlStyle.fontSize,
      lineHeight: htmlStyle.lineHeight
    });
    
    // Check body font size
    const bodyStyle = window.getComputedStyle(document.body);
    results.push({
      element: 'Body',
      fontSize: bodyStyle.fontSize,
      lineHeight: bodyStyle.lineHeight
    });
    
    // Check a heading
    const heading = document.querySelector('h2');
    if (heading) {
      const headingStyle = window.getComputedStyle(heading);
      results.push({
        element: 'First H2',
        fontSize: headingStyle.fontSize,
        lineHeight: headingStyle.lineHeight,
        text: heading.textContent?.substring(0, 30)
      });
    }
    
    // Check paragraph text
    const paragraph = document.querySelector('p');
    if (paragraph) {
      const pStyle = window.getComputedStyle(paragraph);
      results.push({
        element: 'First Paragraph',
        fontSize: pStyle.fontSize,
        lineHeight: pStyle.lineHeight,
        text: paragraph.textContent?.substring(0, 30)
      });
    }
    
    // Check Pricing section
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      const priceElement = pricingSection.querySelector('.text-5xl');
      if (priceElement) {
        const priceStyle = window.getComputedStyle(priceElement);
        results.push({
          element: 'Pricing Amount',
          fontSize: priceStyle.fontSize,
          lineHeight: priceStyle.lineHeight,
          text: priceElement.textContent
        });
      }
    }
    
    // Check FAQ section
    const faqSection = document.querySelector('#faq');
    if (faqSection) {
      const faqTitle = faqSection.querySelector('h2');
      if (faqTitle) {
        const faqStyle = window.getComputedStyle(faqTitle);
        results.push({
          element: 'FAQ Title',
          fontSize: faqStyle.fontSize,
          lineHeight: faqStyle.lineHeight,
          text: faqTitle.textContent
        });
      }
      
      const faqQuestion = faqSection.querySelector('h3');
      if (faqQuestion) {
        const qStyle = window.getComputedStyle(faqQuestion);
        results.push({
          element: 'FAQ Question',
          fontSize: qStyle.fontSize,
          lineHeight: qStyle.lineHeight
        });
      }
    }
    
    // Check Footer
    const footer = document.querySelector('footer');
    if (footer) {
      const footerLink = footer.querySelector('a');
      if (footerLink) {
        const linkStyle = window.getComputedStyle(footerLink);
        results.push({
          element: 'Footer Link',
          fontSize: linkStyle.fontSize,
          lineHeight: linkStyle.lineHeight
        });
      }
    }
    
    return results;
  });
  
  console.log('计算后的样式:\n');
  styles.forEach(style => {
    console.log(`${style.element}:`);
    console.log(`  字体大小: ${style.fontSize}`);
    console.log(`  行高: ${style.lineHeight}`);
    if (style.text) {
      console.log(`  文本: ${style.text}...`);
    }
    console.log('');
  });
  
  // Scroll to pricing section and take screenshot
  await page.evaluate(() => {
    document.querySelector('#pricing')?.scrollIntoView({ behavior: 'smooth' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/pricing-text-size.png', fullPage: false });
  
  // Scroll to FAQ section and take screenshot
  await page.evaluate(() => {
    document.querySelector('#faq')?.scrollIntoView({ behavior: 'smooth' });
  });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'screenshots/faq-text-size.png', fullPage: false });
  
  console.log('\n截图已保存到 screenshots/ 文件夹');
  console.log('请检查文字大小是否合适');
  
  await browser.close();
}

checkTextSizes().catch(console.error);