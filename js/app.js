import {TextFormatting} from './textFormatting.js';
import {handleSubmit} from './formHandler.js';

const init = () => {
  const form = document.querySelector('.form');
  const button = document.querySelector('.form__button');
  const crossBtn = document.querySelector('.form__text-clear');

  form.addEventListener('submit', (e) => {
    handleSubmit(e)
        .then(text => {
          form.text.value = TextFormatting
              .setText(text)
              .handlePrepositions()
              .handleCopyright()
              .handleNumberingCharacters()
              .handleSpacesAroundDashes()
              .handleQuoteMarks()
              .getText();
        })
        .catch(error => console.warn(error));
  });

  form.text.addEventListener('input', () => {
    button.disabled = !form.text.value.trim();
  });

  crossBtn.addEventListener('click', () => {
    form.text.value = '';
    button.disabled = true;
  });
};

init();
