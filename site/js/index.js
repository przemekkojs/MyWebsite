const main = document.getElementsByTagName('main')[0]

const header = document.createElement('header');
const footer = document.createElement('footer');
const article = document.createElement('article');

footer.id = 'footer';
header.id = 'header';
article.id = 'content';

main.appendChild(header);
main.appendChild(article);
main.appendChild(footer);