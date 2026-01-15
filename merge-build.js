const fs = require('fs');
const path = require('path');
 
// 1. Define where your build files are located
// 'dist/your-project-name/browser' depends on your angular.json output path
const distFolder = path.join(__dirname, 'dist/AlentraExim/browser');
const indexPath = path.join(distFolder, 'index.html');
 
// 2. Read the built index.html
let html = fs.readFileSync(indexPath, 'utf8');
 
// 3. Helper function to read file content
const getFileContent = (filename) => {
    return fs.readFileSync(path.join(distFolder, filename), 'utf8');
};
 
// 4. Inline CSS (Find <link rel="stylesheet"> and replace with <style>...</style>)
html = html.replace(/<link rel="stylesheet" href="([^"]+)">/g, (match, filename) => {
    console.log(`Inlining CSS: ${filename}`);
    const css = getFileContent(filename);
    return `<style>${css}</style>`;
});
 
// 5. Inline JS (Find <script src="..."> and replace with <script>...</script>)
html = html.replace(/<script src="([^"]+)" type="module"><\/script>/g, (match, filename) => {
    console.log(`Inlining JS: ${filename}`);
    const js = getFileContent(filename);
    return `<script type="module">${js}</script>`;
});
 
// 6. Write the final single file
const outputPath = path.join(__dirname, 'single-app.html');
fs.writeFileSync(outputPath, html);
 
console.log(`Success! Single file created at: ${outputPath}`);