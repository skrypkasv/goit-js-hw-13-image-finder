import './styles.css';
import ImgApiService from './js/api_service';
import LoadMoreBtn from './js/load_more';
import { renderImgGallery, clearImgsContainer } from './js/markup_render';
import scrollToBottom from './js/scroll_to';

const imgApiService = new ImgApiService();

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

searchForm.addEventListener('submit', onSearchFormHandler);
loadMoreBtn.refs.button.addEventListener('click', onLoadMoreHandler);

function onSearchFormHandler(e) {
  e.preventDefault();

  imgApiService.query = e.currentTarget.elements.query.value.trim();
  if (imgApiService.query.length > 0) {
    loadMoreBtn.show();
    imgApiService.resetPage();

    onLoadMoreHandler();
    clearImgsContainer();
  }
}

function onLoadMoreHandler() {
  loadMoreBtn.disable();
  imgApiService.fetchImages().then(imgs => {
    renderImgGallery(imgs);
    loadMoreBtn.enable();
    scrollToBottom();
  });
}
