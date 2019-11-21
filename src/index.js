import doge from './images/doge.jpg';
import dogeSmall from './images/doge-small.jpg';
import dogeSvg from './images/doge.svg';
import dogeInline from './images/doge.svg?inline';
import dogeSmallHttp from './images/doge-small.jpg?http';

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

log('doge', doge);
imagesDiv.innerHTML += `<img src="${doge}" />`;

log('dogeSmall', dogeSmall);
imagesDiv.innerHTML += `<img src="${dogeSmall}" />`;

log('dogeSmallHttp', dogeSmallHttp);
imagesDiv.innerHTML += `<img src="${dogeSmallHttp}" />`;

log('dogeSvg', dogeSvg);
imagesDiv.innerHTML += `<img src="${dogeSvg}" />`;

log('dogeInline', escapeHtml(dogeInline));
imagesDiv.innerHTML += dogeInline;
