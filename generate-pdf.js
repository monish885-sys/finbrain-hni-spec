const fs = require('fs');
const path = require('path');
const { marked } = require('marked');

async function main() {
  const puppeteer = require('puppeteer');
  const mdPath = path.join(__dirname, 'CAPSTONE-Project-Bible.md');
  const htmlPath = path.join(__dirname, 'CAPSTONE-Project-Bible.html');
  const pdfPath = path.join(__dirname, 'CAPSTONE-Project-Bible.pdf');

  const md = fs.readFileSync(mdPath, 'utf8');

  marked.setOptions({ gfm: true, breaks: false });
  const bodyHtml = marked.parse(md);

  const fullHtml = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CAPSTONE Project Bible v1.0</title>
<style>
  @page { size: A4; margin: 16mm 14mm; }
  * { box-sizing: border-box; }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.5;
    color: #1a1a1a;
    margin: 0;
    padding: 0;
  }
  h1 {
    font-size: 20pt;
    color: #0f172a;
    border-bottom: 3px solid #2563eb;
    padding-bottom: 8px;
    margin: 32px 0 16px 0;
    page-break-before: always;
  }
  body > h1:first-child,
  h1:first-of-type { page-break-before: avoid; margin-top: 0; }
  h2 {
    font-size: 14pt;
    color: #1e40af;
    margin: 26px 0 10px 0;
    border-bottom: 1px solid #e2e8f0;
    padding-bottom: 4px;
    page-break-after: avoid;
  }
  h3 {
    font-size: 11.5pt;
    color: #334155;
    margin: 18px 0 8px 0;
    page-break-after: avoid;
  }
  h4 {
    font-size: 10.5pt;
    color: #475569;
    margin: 14px 0 6px 0;
    page-break-after: avoid;
  }
  p { margin: 6px 0; }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
    font-size: 9pt;
    page-break-inside: avoid;
  }
  th, td {
    border: 1px solid #cbd5e1;
    padding: 5px 7px;
    text-align: left;
    vertical-align: top;
  }
  th { background: #f1f5f9; font-weight: 600; }
  tr:nth-child(even) td { background: #f8fafc; }
  pre {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    padding: 10px;
    font-size: 8pt;
    line-height: 1.4;
    white-space: pre-wrap;
    word-wrap: break-word;
    page-break-inside: avoid;
    overflow-x: auto;
  }
  code {
    background: #f1f5f9;
    padding: 1px 4px;
    border-radius: 3px;
    font-size: 8.5pt;
    font-family: 'SF Mono', Menlo, Consolas, monospace;
  }
  pre code { background: none; padding: 0; font-size: 8pt; }
  blockquote {
    border-left: 4px solid #2563eb;
    margin: 10px 0;
    padding: 8px 14px;
    background: #eff6ff;
    color: #1e3a5f;
  }
  blockquote p { margin: 4px 0; }
  hr { border: none; border-top: 1px solid #e2e8f0; margin: 20px 0; }
  ul, ol { margin: 6px 0; padding-left: 22px; }
  li { margin: 3px 0; }
  strong { color: #0f172a; }
  a { color: #2563eb; text-decoration: none; }
  /* Keep feature sections together where possible */
  h2 + h3 { margin-top: 12px; }
</style>
</head>
<body>
${bodyHtml}
</body>
</html>`;

  fs.writeFileSync(htmlPath, fullHtml);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto('file://' + htmlPath, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '14mm', right: '14mm' },
    displayHeaderFooter: true,
    headerTemplate: '<div style="font-size:7px; width:100%; text-align:center; color:#94a3b8; margin-top:4px;">CAPSTONE Project Bible v1.0 — Confidential — June 2026</div>',
    footerTemplate: '<div style="font-size:7px; width:100%; text-align:center; color:#94a3b8; margin-bottom:4px;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
  });
  await browser.close();

  const stats = fs.statSync(pdfPath);
  console.log('PDF created:', pdfPath);
  console.log('Size:', (stats.size / 1024).toFixed(0) + ' KB');
}

main().catch(err => { console.error(err); process.exit(1); });
