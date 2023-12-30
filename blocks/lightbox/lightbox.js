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
    mySlide.classList.add('mySlides');

    const numbertext = document.createElement('div');
    numbertext.classList.add('numbertext');
    numbertext.innerText = `${index + 1} / ${cols.length}`;
    mySlide.appendChild(numbertext);

    const img = document.createElement('img');
    img.src = col.querySelector('img').src;
    img.style.width = '90%';
    img.setAttribute('alt', 'stadium');
    mySlide.appendChild(img);

    modalContent.appendChild(mySlide);

    const newDemo = document.createElement('img');
    newDemo.src = col.querySelector('img').src;
    newDemo.style.width = '100%';
    newDemo.classList.add('demo');
    newDemo.classList.add('cursor');
    newDemo.addEventListener('click', () => 
    {
      currentSlide(index + 1)

  });
    col.appendChild(newDemo);
  });

  const newPrev = document.createElement('p');
  newPrev.classList.add('prev');
  const span1 = document.createElement('span')
  newPrev.append(span1)
  const image1 = document.createElement('img')
  span1.append(image1)
  image1.setAttribute('src', '/icons/arrow-redo-circle-sharp-svgrepo-com.svg');
  image1.setAttribute('alt', 'arrow');
  newPrev.addEventListener('click', () => plusSlides(-1));
  modalContent.appendChild(newPrev);

  const newNext = document.createElement('p');
  newNext.classList.add('next');
  const span2 = document.createElement('span')
  newNext.append(span2)
  const image2 = document.createElement('img')
  span2.append(image2)
  image2.setAttribute('src', '/icons/arrow-undo-circle-sharp-svgrepo-com.svg')
  image2.setAttribute('alt', 'arrow');
  newNext.addEventListener('click', () => plusSlides(1));
  modalContent.appendChild(newNext);

  const captionContainer = document.createElement('div');
  captionContainer.classList.add('caption-container');
  const caption = document.createElement('p');
  captionContainer.appendChild(caption);
  caption.classList.add('caption');
  modalContent.appendChild(captionContainer);

  let slideIndex = 1;

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  const slides = document.querySelectorAll('.mySlides');
  const demos = document.querySelectorAll('.demo');
    if(slides[0]) {
      slides[0].style.display = 'block';
    }

  function showSlides(n) {

  if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    demos.forEach((demo) => {
      demo.classList.remove('active');
    });

    slides[slideIndex - 1].style.display = 'flex';
    demos[slideIndex - 1].classList.add('active');
  }

  slides[slideIndex - 1].style.display = 'flex';
  demos[slideIndex - 1].classList.add('active');
}
