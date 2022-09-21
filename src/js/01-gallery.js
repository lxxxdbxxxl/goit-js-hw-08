
import cardImage from '../templates/image-card.hbs';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const parentEl = document.querySelector('.gallery');

parentEl.insertAdjacentHTML('beforeend', cardImage(galleryItems));

new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});