const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '..', 'build');
const htmlPath = path.join(buildDir, 'index.html');

let html = fs.readFileSync(htmlPath, 'utf8');

// Find all CSS links injected by CRA and inline them
const cssLinkRegex = /<link\s+href="(\/static\/css\/[^"]+\.css)"\s+rel="stylesheet">/g;
let match;

while ((match = cssLinkRegex.exec(html)) !== null) {
  const cssHref = match[0];
  const cssFilePath = path.join(buildDir, match[1]);

  if (fs.existsSync(cssFilePath)) {
    const cssContent = fs.readFileSync(cssFilePath, 'utf8');
    // Replace the link tag with an inline style tag
    html = html.replace(cssHref, `<style>${cssContent}</style>`);
    console.log(`Inlined: ${match[1]} (${(cssContent.length / 1024).toFixed(1)} KiB)`);
  }
}

fs.writeFileSync(htmlPath, html);
console.log('CSS inlining complete.');
