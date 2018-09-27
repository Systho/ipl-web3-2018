const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '../..');
const manifestPath = path.join(projectRoot, 'dist/manifest.json');

function assetPath(assetName) {
  const manifestContent = fs.readFileSync(manifestPath, 'utf8');
  const manifest = JSON.parse(manifestContent);

  return manifest[assetName];
}

module.exports = assetPath;
