const { chromium } = require('playwright');

async function screenshotBabyAI() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  
  const page = await context.newPage();
  
  console.log('正在截图 Baby AI Video Generator 页面...');
  
  try {
    // 访问英文版
    await page.goto('http://localhost:3000/en', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    await page.waitForTimeout(2000);
    
    // 截图首页
    await page.screenshot({ 
      path: 'baby-ai-homepage-en.png', 
      fullPage: true 
    });
    console.log('✅ 英文版首页截图已保存为 baby-ai-homepage-en.png');
    
    // 访问中文版
    await page.goto('http://localhost:3000/zh', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    await page.waitForTimeout(2000);
    
    // 截图中文首页
    await page.screenshot({ 
      path: 'baby-ai-homepage-zh.png', 
      fullPage: true 
    });
    console.log('✅ 中文版首页截图已保存为 baby-ai-homepage-zh.png');
    
    // 只截取Hero区域
    await page.goto('http://localhost:3000/en', { 
      waitUntil: 'networkidle'
    });
    await page.waitForTimeout(1000);
    
    const heroSection = await page.$('section');
    if (heroSection) {
      await heroSection.screenshot({ 
        path: 'baby-ai-hero.png'
      });
      console.log('✅ Hero区域截图已保存为 baby-ai-hero.png');
    }
    
    console.log('\n🎉 所有截图完成！');
    
  } catch (error) {
    console.error('❌ 截图出错:', error.message);
  } finally {
    await browser.close();
  }
}

screenshotBabyAI().catch(console.error);