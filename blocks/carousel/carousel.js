export default function decorate() {
  const images = document.querySelectorAll('.carousel-wrapper img');
  const carousel = document.querySelector('.carousel');

  const divs = carousel.querySelectorAll('div');

  // eslint-disable-next-line no-plusplus
  for (let i = 0; divs.length > 0; i++) {
    console.log(divs[1]);
  }

  let imageIndex = 0;
  function showImages() {
    images.forEach((image) => {
      image.classList.remove('active');
    });
    images[imageIndex].classList.add('active');
    imageIndex = (imageIndex + 1) % images.length;

    setTimeout(showImages, 2000);
  }

  showImages();
}
