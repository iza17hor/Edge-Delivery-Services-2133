export default function decorate(block) {
  const cols = [...block.children];
  const lightboxWrapper = document.querySelector('.lightbox-wrapper');
  const lightbox = document.createElement('div');
  lightbox.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  lightboxWrapper.appendChild(lightbox);
  lightbox.appendChild(modalContent);

  cols.forEach((col, index) => {
    const mySlide = document.createElement('div');
    mySlide.classList.add('lightbox-slide');

    const numbertext = document.createElement('div');
    numbertext.classList.add('lightbox-numbertext');
    numbertext.innerText = `${index + 1} / ${cols.length}`;
    mySlide.appendChild(numbertext);

    const img = document.createElement('img');
    img.src = col.querySelector('img').src;
    img.style.width = '100%';
    img.classList.add('lightbox-img');
    img.setAttribute('id', 'stadium');
    mySlide.appendChild(img);

    modalContent.appendChild(mySlide);

    const thumbnail = document.createElement('img');
    thumbnail.src = col.querySelector('img').src;
    thumbnail.style.width = '100%';
    thumbnail.classList.add('lightbox-thumbnail');
    thumbnail.classList.add('cursor');
    thumbnail.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      currentSlide(index + 1);
    });
    col.appendChild(thumbnail);
  });

  const prevButton = document.createElement('p');
  prevButton.classList.add('lightbox-prev');
  const prevIcon = document.createElement('span');
  prevButton.append(prevIcon);
  const prevImage = document.createElement('img');
  prevIcon.append(prevImage);
  prevImage.setAttribute('src', '/icons/arrow-redo-circle-sharp-svgrepo-com.svg');
  prevImage.setAttribute('alt', 'arrow');
  // eslint-disable-next-line no-use-before-define
  prevButton.addEventListener('click', () => changeSlides(-1));
  modalContent.appendChild(prevButton);

  const nextButton = document.createElement('p');
  nextButton.classList.add('lightbox-next');
  const nextIcon = document.createElement('span');
  nextButton.append(nextIcon);
  const nextImage = document.createElement('img');
  nextIcon.append(nextImage);
  nextImage.setAttribute('src', '/icons/arrow-undo-circle-sharp-svgrepo-com.svg');
  nextImage.setAttribute('alt', 'arrow');
  // eslint-disable-next-line no-use-before-define
  nextButton.addEventListener('click', () => changeSlides(1));
  modalContent.appendChild(nextButton);

  const captionContainer = document.createElement('div');
  captionContainer.classList.add('lightbox-caption-container');
  const caption = document.createElement('p');
  captionContainer.appendChild(caption);
  caption.classList.add('lightbox-caption');
  modalContent.appendChild(captionContainer);

  let currentIndex = 1;

  function changeSlides(n) {
    // eslint-disable-next-line no-use-before-define
    showSlides((currentIndex += n));
  }

  function currentSlide(n) {
    // eslint-disable-next-line no-use-before-define
    showSlides((currentIndex = n));
  }

  const slides = document.querySelectorAll('.lightbox-slide');
  const thumbnails = document.querySelectorAll('.lightbox-thumbnail');

  if (slides[0]) {
    slides[0].style.display = 'flex';
  }

  function showSlides(n) {
    if (n > slides.length) currentIndex = 1;
    if (n < 1) currentIndex = slides.length;

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    thumbnails.forEach((thumbnail) => {
      thumbnail.classList.remove('active');
    });

    slides[currentIndex - 1].style.display = 'flex';
    thumbnails[currentIndex - 1].classList.add('active');
  }

  showSlides(currentIndex);
}
