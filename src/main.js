import {
  createGalleryCardTemplate,
  initializeLightbox,
} from './js/render-functions';

import { getAxiosPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';

const formEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.js-gallery');

const loaderEl = document.querySelector('.js-loader');
const loadMoreBtnEl = document.querySelector('.load-more-btn-js');

const params = {
  searchedValue: '',
  page: null,
  total: null,
  perPage: 18,
};

const onFormElSubmit = async event => {
  event.preventDefault();
  const searchQuery = formEl.elements.user_query.value.trim();

  if (!searchQuery) {
    iziToast.warning({
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  params.searchedValue = searchQuery;
  params.page = 1;

  showLoader();

  try {
    const data = await getAxiosPhotos(params.searchedValue, params.page, params.perPage);

    if (data.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      galleryEl.innerHTML = '';
      formEl.reset();
      hideloadBtn();
      return;
    }

    galleryEl.innerHTML = data.hits.map(createGalleryCardTemplate).join('');
    initializeLightbox();

    params.total = data.totalHits;
    checkBtnStatus();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
};

const onloadMoreBtnElClick = async () => {
  hideloadBtn();
  showLoader();
  params.page += 1;

  try {
    const data = await getAxiosPhotos(params.searchedValue, params.page, params.perPage);
    
    galleryEl.insertAdjacentHTML('beforeend', data.hits.map(createGalleryCardTemplate).join(''));
    initializeLightbox();

    checkBtnStatus();
    scrollPage();
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong while loading more images. Please try again!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
};

const showLoader = () => loaderEl.classList.remove('is-hidden');
const hideLoader = () => loaderEl.classList.add('is-hidden');
const showloadBtn = () => loadMoreBtnEl.classList.remove('is-hidden');
const hideloadBtn = () => loadMoreBtnEl.classList.add('is-hidden');

const checkBtnStatus = () => {
  const maxPage = Math.ceil(params.total / params.perPage);
  if (params.page >= maxPage) {
    hideloadBtn();
    iziToast.info({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  } else {
    showloadBtn();
  }
};

const scrollPage = () => {
  const { height } = galleryEl.firstElementChild.getBoundingClientRect();
  scrollBy({
    behavior: 'smooth',
    top: height * 2,
  });
};


loadMoreBtnEl.addEventListener('click', onloadMoreBtnElClick);
formEl.addEventListener('submit', onFormElSubmit);
