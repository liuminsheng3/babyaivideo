#!/usr/bin/env node

// Script to check sitemap accessibility
const https = require('https');

const urls = [
  'https://www.babyaivideo.com/sitemap.xml',
  'https://babyaivideo.com/sitemap.xml',
  'https://www.babyaivideo.com/en',
  'https://www.babyaivideo.com/zh'
];

console.log('🔍 Checking sitemap and page accessibility...\n');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const status = res.statusCode;
      let result = `${url}\n   Status: ${status}`;
      
      if (status === 200) {
        result += ' ✅';
      } else if (status >= 300 && status < 400) {
        result += ` ⚠️ (Redirect to: ${res.headers.location})`;
      } else {
        result += ' ❌';
      }
      
      console.log(result);
      resolve();
    }).on('error', (err) => {
      console.log(`${url}\n   Status: Error ❌ (${err.message})`);
      resolve();
    });
  });
}

async function checkAll() {
  for (const url of urls) {
    await checkUrl(url);
    console.log('');
  }
  
  console.log('\n📝 Instructions for Google Search Console:');
  console.log('1. Use the FULL URL when submitting sitemap');
  console.log('2. Example: https://www.babyaivideo.com/sitemap.xml');
  console.log('3. NOT just: sitemap.xml');
}

checkAll();