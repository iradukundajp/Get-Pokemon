// clickListener.js
import handleButtonClick from '../handlers/buttonClickHandler.js';
import dom from '../dom.js';

const setupClickListener = () => {
  dom.button.addEventListener('click', () => {
    const pokemonId = dom.input.value;
    handleButtonClick(pokemonId);
  });
};

export default setupClickListener;
