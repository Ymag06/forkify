class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const query = this._parentEl.querySelector('.search__field').value; // get the query
    this._clearInput(); // clear the query
    return query;
  } // get the value from user input in search bar

  _clearInput() {
    return (this._parentEl.querySelector('.search__field').value = '');
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  } // only get the value when submitted
}

export default new SearchView();
