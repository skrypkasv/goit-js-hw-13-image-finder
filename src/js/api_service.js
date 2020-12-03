import throwError from './throw_error';

export default class ImgApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.url = 'https://pixabay.com/api/';
    this.apiKey = `19367568-bec790f08eb1ec18688a31f32`;
  }

  fetchImages() {
    return fetch(
      `${this.url}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${this.apiKey}`,
    )
      .then(response => {
        if (response.ok) return response.json();
      })
      .then(({ hits }) => {
        this.nextPage();
        return hits;
      })
      .catch(err => {
        throwError(err);
      });
  }

  nextPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
