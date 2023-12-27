import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');

  const links = [
    'https://www.uefa.com/euro2024/news/',
    'https://www.uefa.com/euro2024/event-guide/',
    'https://www.uefa.com/uefaeuro/history/rankings/',
    'https://www.shopuefa.com/en/?_s=bm-fi-psc-uefa-hpshopnav',
    'https://www.uefa.com/euro2024/ticketing/',

  ];

  [...block.children].forEach((row, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    li.append(a);

    a.setAttribute('href', links[index] || '#');

    while (row.firstElementChild) a.append(row.firstElementChild);

    [...a.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });

    ul.append(li);
  });

  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
