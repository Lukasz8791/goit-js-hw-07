// Change code below this line
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.href = item.original;

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute('data-source', item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function renderGallery() {
  const galleryFragment = document.createDocumentFragment();

  galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    galleryFragment.appendChild(galleryItem);
  });

  galleryList.appendChild(galleryFragment);
}

function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const imageSrc = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">
  `);

  instance.show();
}

galleryList.addEventListener('click', openModal);

document.addEventListener('keydown', event => {
    
    const instances = document.querySelectorAll('.basicLightbox');
  
    if (event.key === 'Escape' && instances.length > 0) {
        console.log('event klawisz escape');
        const modal = document.querySelector('.basicLightbox');
              if (modal) {
            modal.style.display = 'none';
            modal.remove();
          }             
    }
  }); 
  
  
renderGallery();

