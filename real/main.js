const idmeny = document.getElementById("idmeny");
const meny = document.querySelector(".meny");

idmeny.addEventListener("click", () => {
    meny.classList.toggle("aktiv");
});

const thumbs = document.querySelectorAll('.thumb');


const lightbox = document.querySelector('#lightbox');

const lightboxImg = document.querySelector('#lightbox-img');

const closeBtn = document.querySelector('#close-btn');

const galleriBilder = document.querySelectorAll('.bild-gallery img');

galleriBilder.forEach(img => {
  img.addEventListener('click', () => {
    const fullSizeSrc = img.getAttribute('src');
    lightboxImg.src = fullSizeSrc;
    lightbox.classList.remove('lightbox-hidden');
    lightbox.classList.add('lightbox-visible');
  });
});
const closeLightbox = () => {
  lightbox.classList.remove('lightbox-visible');
  lightbox.classList.add('lightbox-hidden');
  lightboxImg.src = "";
};
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (event) => {

  if (event.target === lightbox) {

    closeLightbox();

  }

});