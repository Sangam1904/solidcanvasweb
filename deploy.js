#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 SolidCanvas Website Deployment Script');
console.log('=====================================\n');

// Check if build exists
const buildPath = path.join(__dirname, '.next');
if (!fs.existsSync(buildPath)) {
  console.log('❌ Build not found. Building the website...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed successfully!\n');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Build found!\n');
}

console.log('📋 Deployment Options:');
console.log('1. Vercel (Recommended)');
console.log('2. Netlify');
console.log('3. Static Export');
console.log('4. Show deployment guide\n');

console.log('🌐 Your website is ready for deployment!');
console.log('📁 Build location: .next/');
console.log('📄 See DEPLOYMENT_GUIDE.md for detailed instructions\n');

console.log('🔗 Quick Deploy Commands:');
console.log('• Vercel: npx vercel --prod');
console.log('• Netlify: npx netlify deploy --prod --dir=.next');
console.log('• Static: npm run export (then upload "out" folder)\n');

console.log('✅ SolidCanvas website is ready to go live!');
