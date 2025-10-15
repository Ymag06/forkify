import View from './View.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
class ResultView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No Recipes found in your query! Please Try Again;';
  _successMessage = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultView(); // do need have to type {} if we export like this
