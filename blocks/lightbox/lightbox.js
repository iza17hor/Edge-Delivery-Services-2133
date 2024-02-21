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
    mySlide.appendChild(numbertext);

    const stadiumName = col.children[0].innerText.trim();

    numbertext.innerText = `${stadiumName}`;
    mySlide.appendChild(numbertext);

    const img = document.createElement('img');
    img.src = col.querySelector('img').src;
    img.style.width = '100%';
    img.classList.add('lightbox-img');
    img.setAttribute('id', 'stadium');
    mySlide.appendChild(img);

    img.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      handleModalView(img.src, stadiumName, index + 1);
    });

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

  /// metoda wyswietlenia bierzacego obrazu
  function handleModalView(srcImg, stadium, index) {
    const modal = document.createElement('div');
    modal.classList.add('modal-full-screen');

    const modalFullScreenContent = document.createElement('div');
    modalFullScreenContent.classList.add('modal-full-screen-content');

    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-text');
    modalFullScreenContent.appendChild(modalDiv);

    const modalIcon = document.createElement('img');
    modalIcon.setAttribute('src', '/icons/close-bold-svgrepo-com.svg');
    modalIcon.classList.add('modal-icon');
    modalDiv.appendChild(modalIcon);



    const modalImg = document.createElement('img');
    modalImg.src = srcImg;
    modalImg.classList.add('modal-full-screen-img');
    modalFullScreenContent.appendChild(modalImg);

    cols.forEach((col, i) => {
      if (i !== index) {
        const modalI = document.createElement('img');
        modalI.classList.add('modal-full-screen-img');
        modalI.src = col.querySelector('img').src;
        modalI.setAttribute('src', `${modalI.src}`);
        modalFullScreenContent.appendChild(modalI);
        modalI.style.display = 'none';
      }
    });

    modal.appendChild(modalFullScreenContent);
    const buttons = document.createElement('div');
    modalFullScreenContent.appendChild(buttons);
    buttons.classList.add('buttons-content');

    const prevButtonModal = document.createElement('p');
    buttons.appendChild(prevButtonModal);
    prevButtonModal.classList.add('prevButton');
    const spanPrevBtn = document.createElement('span');
    prevButtonModal.appendChild(spanPrevBtn);
    const imgPrevBtn = document.createElement('img');
    imgPrevBtn.classList.add('prev-img-btn');
    spanPrevBtn.append(imgPrevBtn);
    imgPrevBtn.setAttribute('src', '/icons/action-paging-prev-svgrepo-com.svg');
    prevButtonModal.addEventListener('click', () => changeImageNext(-1));

    const nextButtonModal = document.createElement('p');
    buttons.appendChild(nextButtonModal);
    nextButtonModal.classList.add('nextButton');
    const spanNextBtn = document.createElement('span');
    nextButtonModal.append(spanNextBtn);
    const imgNextBtn = document.createElement('img');
    imgNextBtn.classList.add('next-img-btn');
    spanNextBtn.append(imgNextBtn);
    imgNextBtn.setAttribute('src', '/icons/action-paging-next-svgrepo-com.svg');
    nextButtonModal.addEventListener('click', () => changeImageNext(1));

    document.body.appendChild(modal);

    modalIcon.addEventListener('click', () => {
      modal.remove();
    });
  }

  let currentIndex = 1;

  function changeSlides(n) {
    // eslint-disable-next-line no-use-before-define
    showSlides((currentIndex -= n));
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
    slides[currentIndex - 1].classList.add('active-slide');

    slides[currentIndex - 1].style.display = 'flex';
    thumbnails[currentIndex - 1].classList.add('active');
  }

  function changeImageNext(step) {
    currentIndex += step;
    if (currentIndex < 0) {
      currentIndex = cols.length - 1;
    } else if (currentIndex >= cols.length) {
      currentIndex = 0;
    }

    const allImages = document.querySelectorAll('.modal-full-screen-img');
    allImages.forEach((image, index) => {
      if (index !== currentIndex) {
        image.style.display = 'none';
      } else {
        image.style.display = 'block';
      }
    });

    const firstImage = allImages[0];
  }
  showSlides(currentIndex);
}
