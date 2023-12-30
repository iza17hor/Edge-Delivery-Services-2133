export default function decorate(block) {
    const finalDrawSection = document.querySelector('.final-draw');
    const titleSection = finalDrawSection.children[0];
    const cardsSection = finalDrawSection.children[1];


    titleSection.classList.add('final-draw-title');

    const firstText = titleSection.firstElementChild;
    firstText.classList.add('part-first');
    const drawText = document.createElement('p');
    firstText.append(drawText);
    drawText.textContent = 'draw';

    const logo = document.createElement('img');
    titleSection.append(logo);
    logo.setAttribute('src', '/icons/logo_Euro.jpeg');
    logo.setAttribute('alt', 'logo_euro');
    logo.classList.add('final-logo');
    logo.style.width = '45%';

    cardsSection.classList.add('final-draw-cards');
    const cardDivs = cardsSection.querySelectorAll('div');

    cardDivs.forEach((element) => {
        element.classList.add('card-group');
        element.firstElementChild.classList.add('items');
    });

    const cardGroups = document.querySelectorAll('.card-group');

    cardGroups.forEach((group) => {
        const ulList = group.lastElementChild;
        ulList.classList.add('list-items');
        const listItems = ulList.querySelectorAll('li');

        listItems.forEach((li) => {
            const flagImg = document.createElement('img');
            li.insertBefore(flagImg, li.firstChild);
            flagImg.classList.add('img-flag');
            flagImg.style.width = '20px';

            if (li.textContent === 'play-off winner A' || li.textContent === 'play-off winner B' || li.textContent === 'play-off winner C') {
                flagImg.setAttribute('src', '/icons/flag/play-off-winner-A-svgrepo-com.svg');
                flagImg.setAttribute('alt', 'invisible player');
            } else {
                flagImg.setAttribute('src', `/icons/flag/${li.textContent}-svgrepo-com.svg`);
                flagImg.setAttribute('alt', `${li.textContent}`);
            }
        });
    });
}
