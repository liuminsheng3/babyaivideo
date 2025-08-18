const { chromium } = require('playwright');

async function analyzeWanVideo() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
  });
  
  const page = await context.newPage();
  
  console.log('=== WAN.VIDEO 网站完整分析 ===\n');
  
  try {
    await page.goto('https://wan.video/', { 
      waitUntil: 'domcontentloaded',
      timeout: 60000 
    });
    
    await page.waitForTimeout(5000);
    
    // 获取页面完整内容
    const pageAnalysis = await page.evaluate(() => {
      const analysis = {
        header: {},
        hero: {},
        features: [],
        videos: [],
        sections: [],
        footer: {}
      };
      
      // 1. 头部导航
      const nav = document.querySelector('nav, header');
      if (nav) {
        const navLinks = [];
        nav.querySelectorAll('a').forEach(link => {
          navLinks.push({
            text: link.textContent.trim(),
            href: link.href
          });
        });
        analysis.header = {
          logo: document.querySelector('[class*="logo"]')?.textContent || 'Wan',
          navigation: navLinks,
          cta: document.querySelector('[class*="try"], button')?.textContent
        };
      }
      
      // 2. Hero区域
      const heroSection = document.querySelector('main > div:first-child, [class*="hero"], section:first-child');
      if (heroSection) {
        analysis.hero = {
          title: heroSection.querySelector('h1')?.textContent || 
                 document.querySelector('h1')?.textContent || 'Wan 2.2',
          subtitle: heroSection.querySelector('p')?.textContent || 
                   document.querySelector('main p')?.textContent,
          buttons: Array.from(heroSection.querySelectorAll('button, a[href*="github"], a[href*="hugging"]')).map(btn => ({
            text: btn.textContent.trim(),
            href: btn.href || null
          }))
        };
      }
      
      // 3. 视频展示区
      const videos = document.querySelectorAll('video');
      videos.forEach((video, index) => {
        const container = video.closest('div');
        analysis.videos.push({
          index: index + 1,
          src: video.src,
          poster: video.poster,
          title: container?.querySelector('h2, h3, p')?.textContent || `Video ${index + 1}`,
          autoplay: video.autoplay,
          muted: video.muted
        });
      });
      
      // 4. 功能区块
      document.querySelectorAll('section, [class*="section"], main > div').forEach((section, index) => {
        const heading = section.querySelector('h1, h2, h3');
        const description = section.querySelector('p');
        const images = section.querySelectorAll('img').length;
        const videos = section.querySelectorAll('video').length;
        
        if (heading || description || images > 0 || videos > 0) {
          analysis.sections.push({
            order: index + 1,
            title: heading?.textContent?.trim(),
            description: description?.textContent?.trim()?.substring(0, 200),
            hasImages: images > 0,
            hasVideos: videos > 0,
            imageCount: images,
            videoCount: videos
          });
        }
      });
      
      // 5. 获取所有文本内容
      const allText = [];
      document.querySelectorAll('h1, h2, h3, h4, p').forEach(elem => {
        const text = elem.textContent.trim();
        if (text && text.length > 10) {
          allText.push({
            tag: elem.tagName,
            text: text.substring(0, 150)
          });
        }
      });
      analysis.textContent = allText;
      
      // 6. 社交链接
      const socialLinks = [];
      document.querySelectorAll('a[href*="github"], a[href*="hugging"], a[href*="discord"], a[href*="twitter"], a[href*="x.com"], a[href*="youtube"], a[href*="telegram"]').forEach(link => {
        socialLinks.push({
          platform: link.href.includes('github') ? 'GitHub' :
                   link.href.includes('hugging') ? 'HuggingFace' :
                   link.href.includes('discord') ? 'Discord' :
                   link.href.includes('twitter') || link.href.includes('x.com') ? 'Twitter/X' :
                   link.href.includes('youtube') ? 'YouTube' :
                   link.href.includes('telegram') ? 'Telegram' : 'Other',
          url: link.href,
          text: link.textContent.trim() || link.querySelector('img')?.alt || 'Link'
        });
      });
      analysis.socialLinks = socialLinks;
      
      return analysis;
    });
    
    // 打印分析结果
    console.log('📱 导航栏结构:');
    console.log('Logo:', pageAnalysis.header.logo);
    console.log('导航链接:', pageAnalysis.header.navigation);
    console.log('CTA按钮:', pageAnalysis.header.cta);
    
    console.log('\n🎯 Hero区域:');
    console.log('标题:', pageAnalysis.hero.title);
    console.log('副标题:', pageAnalysis.hero.subtitle?.substring(0, 200));
    console.log('按钮:', pageAnalysis.hero.buttons);
    
    console.log('\n🎬 视频内容:');
    console.log(`找到 ${pageAnalysis.videos.length} 个视频`);
    pageAnalysis.videos.slice(0, 5).forEach(video => {
      console.log(`  - ${video.title}`);
    });
    
    console.log('\n📑 页面区块:');
    pageAnalysis.sections.forEach(section => {
      if (section.title) {
        console.log(`${section.order}. ${section.title}`);
        if (section.description) {
          console.log(`   ${section.description.substring(0, 100)}...`);
        }
        if (section.hasVideos) {
          console.log(`   包含 ${section.videoCount} 个视频`);
        }
      }
    });
    
    console.log('\n📝 主要文本内容:');
    const uniqueTexts = [...new Set(pageAnalysis.textContent.map(t => t.text))];
    uniqueTexts.slice(0, 10).forEach(text => {
      console.log(`  - ${text.substring(0, 100)}...`);
    });
    
    console.log('\n🔗 社交媒体链接:');
    pageAnalysis.socialLinks.forEach(link => {
      console.log(`  ${link.platform}: ${link.url}`);
    });
    
    // 滚动页面获取更多内容
    console.log('\n📜 滚动页面以加载更多内容...');
    await page.evaluate(() => {
      return new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          
          if(totalHeight >= scrollHeight){
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });
    
    await page.waitForTimeout(2000);
    
    // 获取页面尺寸和统计
    const pageStats = await page.evaluate(() => {
      return {
        height: document.body.scrollHeight,
        width: document.body.scrollWidth,
        totalImages: document.querySelectorAll('img').length,
        totalVideos: document.querySelectorAll('video').length,
        totalLinks: document.querySelectorAll('a').length,
        totalButtons: document.querySelectorAll('button').length,
        totalSections: document.querySelectorAll('section, [class*="section"]').length
      };
    });
    
    console.log('\n📊 页面统计:');
    console.log(`页面高度: ${pageStats.height}px`);
    console.log(`图片总数: ${pageStats.totalImages}`);
    console.log(`视频总数: ${pageStats.totalVideos}`);
    console.log(`链接总数: ${pageStats.totalLinks}`);
    console.log(`按钮总数: ${pageStats.totalButtons}`);
    console.log(`区块总数: ${pageStats.totalSections}`);
    
    // 截取完整页面截图
    await page.screenshot({ 
      path: 'wan-video-full-page.png', 
      fullPage: true 
    });
    console.log('\n✅ 完整页面截图已保存为 wan-video-full-page.png');
    
  } catch (error) {
    console.error('❌ 分析出错:', error.message);
  } finally {
    await browser.close();
  }
}

analyzeWanVideo().catch(console.error);