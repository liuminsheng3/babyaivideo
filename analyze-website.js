const { chromium } = require('playwright');

async function analyzeWebsite() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  });
  
  const page = await context.newPage();
  
  console.log('正在访问 wan.video...');
  
  try {
    // 访问主页
    await page.goto('https://wan.video/', { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    
    // 等待页面完全加载
    await page.waitForTimeout(3000);
    
    console.log('\n=== 页面标题 ===');
    const title = await page.title();
    console.log(title);
    
    console.log('\n=== 导航菜单 ===');
    const navItems = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll('nav a, header a, [class*="nav"] a, [class*="menu"] a').forEach(link => {
        const text = link.textContent.trim();
        const href = link.href;
        if (text && href) {
          items.push({ text, href });
        }
      });
      return [...new Set(items.map(JSON.stringify))].map(JSON.parse);
    });
    console.log(navItems);
    
    console.log('\n=== 主要标题和文本 ===');
    const headings = await page.evaluate(() => {
      const results = [];
      document.querySelectorAll('h1, h2, h3').forEach(h => {
        const text = h.textContent.trim();
        if (text) {
          results.push({
            tag: h.tagName,
            text: text.substring(0, 100)
          });
        }
      });
      return results;
    });
    console.log(headings);
    
    console.log('\n=== 按钮和CTA ===');
    const buttons = await page.evaluate(() => {
      const btns = [];
      document.querySelectorAll('button, a[class*="btn"], [role="button"]').forEach(btn => {
        const text = btn.textContent.trim();
        if (text && text.length < 50) {
          btns.push(text);
        }
      });
      return [...new Set(btns)];
    });
    console.log(buttons);
    
    console.log('\n=== 功能区块 ===');
    const sections = await page.evaluate(() => {
      const sectionData = [];
      document.querySelectorAll('section, [class*="section"], [class*="feature"], [class*="showcase"]').forEach(section => {
        const heading = section.querySelector('h1, h2, h3');
        const text = section.textContent.substring(0, 200).trim();
        if (heading && text) {
          sectionData.push({
            heading: heading.textContent.trim(),
            preview: text.substring(0, 100) + '...'
          });
        }
      });
      return sectionData;
    });
    console.log(sections);
    
    console.log('\n=== 图片和视频 ===');
    const media = await page.evaluate(() => {
      const images = document.querySelectorAll('img').length;
      const videos = document.querySelectorAll('video').length;
      const iframes = document.querySelectorAll('iframe').length;
      return { images, videos, iframes };
    });
    console.log(media);
    
    console.log('\n=== 页面链接 ===');
    const allLinks = await page.evaluate(() => {
      const links = [];
      document.querySelectorAll('a[href]').forEach(link => {
        const href = link.href;
        if (href && href.startsWith('http') && !href.includes('#')) {
          links.push(href);
        }
      });
      return [...new Set(links)];
    });
    console.log('找到的唯一链接数量:', allLinks.length);
    console.log('部分链接示例:', allLinks.slice(0, 10));
    
    // 尝试查找其他页面
    console.log('\n=== 尝试访问其他页面 ===');
    const pagesToCheck = [
      '/about',
      '/pricing',
      '/features',
      '/docs',
      '/api',
      '/gallery',
      '/examples'
    ];
    
    for (const path of pagesToCheck) {
      try {
        const response = await page.goto(`https://wan.video${path}`, {
          waitUntil: 'domcontentloaded',
          timeout: 10000
        });
        if (response && response.status() === 200) {
          console.log(`✓ ${path} - 页面存在`);
          const pageTitle = await page.title();
          console.log(`  标题: ${pageTitle}`);
        } else {
          console.log(`✗ ${path} - 状态码: ${response ? response.status() : 'N/A'}`);
        }
      } catch (error) {
        console.log(`✗ ${path} - 无法访问`);
      }
    }
    
    // 返回主页并截图
    await page.goto('https://wan.video/', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'wan-video-homepage.png', fullPage: true });
    console.log('\n截图已保存为 wan-video-homepage.png');
    
  } catch (error) {
    console.error('分析过程中出错:', error.message);
  } finally {
    await browser.close();
  }
}

analyzeWebsite().catch(console.error);