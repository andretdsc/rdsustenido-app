import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const URL = 'https://rdsustenido.com.br/';
const ASSETS_DIR = path.join(process.cwd(), 'src', 'assets', 'original');

if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function scrape() {
  console.log('Fetching HTML...');
  const html = await new Promise((resolve, reject) => {
    https.get(URL, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });

  // Extract simple src="" links for images and mp3s
  const regex = /src=["'](https:\/\/rdsustenido\.com\.br\/[^"']+\.(png|jpg|jpeg|svg|webp|mp3|wav))["']/gi;
  const matches = [...html.matchAll(regex)];
  const urls = [...new Set(matches.map(m => m[1]))];

  console.log(`Found ${urls.length} assets.`);

  for (const url of urls) {
    const filename = path.basename(url);
    const dest = path.join(ASSETS_DIR, filename);
    console.log(`Downloading ${filename}...`);
    try {
      await download(url, dest);
    } catch (e) {
      console.error(`Failed to download ${url}`);
    }
  }
  console.log('Done downloading assets!');
}

scrape();
