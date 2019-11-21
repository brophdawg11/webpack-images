const imagesDiv = document.getElementById('images');
const consoleDiv = document.getElementById('console');

const log = (...args) => consoleDiv.innerHTML += args.join(' ') + '<br>';
const escapeHtml = str => str.
    replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
    .replace(/&/g, '&amp;');

log('Loaded!');
