const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');

console.log('[1/3] Memulai bundling JavaScript...');
const jsResult = esbuild.buildSync({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'iife',
  minify: true,
  loader: {
    '.css': 'empty',
    '.webp': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.svg': 'dataurl'
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  write: false,
});

const bundledJs = jsResult.outputFiles[0].text;
console.log('✓ Bundled JS size:', (bundledJs.length / 1024).toFixed(1), 'KB');

console.log('[2/3] Membaca stylesheet CSS dari dist/assets/...');
const distAssets = fs.readdirSync('dist/assets');
const cssFile = distAssets.find(f => f.endsWith('.css'));
if (!cssFile) {
  console.error('File CSS tidak ditemukan di dist/assets!');
  process.exit(1);
}
const cssContent = fs.readFileSync(path.join('dist/assets', cssFile), 'utf8');
console.log('✓ CSS size:', (cssContent.length / 1024).toFixed(1), 'KB');

console.log('[3/3] Menyusun file standalone.html...');
const singleHtml = `<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="theme-color" content="#072844" />

    <title>PadelSphere - Arena Padel Premium Standar WPT</title>

    <!-- Primary Meta Tags -->
    <meta name="title" content="PadelSphere - Arena Padel Premium Standar WPT" />
    <meta name="description" content="Tingkatkan level permainanmu di PadelSphere. Fasilitas lapangan indoor & outdoor berstandar internasional, penyewaan raket premium, dan komunitas yang aktif." />
    <meta name="keywords" content="Padel Banjarmasin, Lapangan Padel, PadelSphere, Sewa Lapangan Padel, Padel Kalimantan Selatan" />
    <meta name="author" content="PadelSphere" />
    <meta name="robots" content="index, follow" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://solusilokal.github.io/PadelSphere/" />
    <meta property="og:site_name" content="PadelSphere" />
    <meta property="og:title" content="PadelSphere - Arena Padel Premium Standar WPT" />
    <meta property="og:description" content="Tingkatkan level permainanmu di PadelSphere. Fasilitas lapangan indoor & outdoor berstandar internasional, penyewaan raket premium, dan komunitas yang aktif." />
    <meta property="og:image" content="https://solusilokal.github.io/PadelSphere/gambarSEO.jpg" />
    <meta property="og:image:secure_url" content="https://solusilokal.github.io/PadelSphere/gambarSEO.jpg" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:width" content="706" />
    <meta property="og:image:height" content="921" />
    <meta property="og:image:alt" content="PadelSphere - Arena Padel Premium Standar WPT" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="https://solusilokal.github.io/PadelSphere/" />
    <meta name="twitter:title" content="PadelSphere - Arena Padel Premium Standar WPT" />
    <meta name="twitter:description" content="Tingkatkan level permainanmu di PadelSphere. Fasilitas lapangan indoor & outdoor berstandar internasional, penyewaan raket premium, dan komunitas yang aktif." />
    <meta name="twitter:image" content="https://solusilokal.github.io/PadelSphere/gambarSEO.jpg" />
    <meta name="twitter:image:alt" content="PadelSphere - Arena Padel Premium Standar WPT" />

    <!-- Favicon -->
    <link rel="icon" type="image/webp" href="./padelsphere-logo.webp" />

    <!-- Google Fonts: Space Grotesk -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <style>
${cssContent}
    </style>
  </head>
  <body class="bg-[#072844] min-h-screen text-slate-100">
    <div id="root"></div>
    <script>
${bundledJs}
    </script>
  </body>
</html>`;

fs.writeFileSync('standalone.html', singleHtml, 'utf8');
console.log('✓ standalone.html berhasil dibuat! Total size:', (singleHtml.length / 1024).toFixed(1), 'KB');
