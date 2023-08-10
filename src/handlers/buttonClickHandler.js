// handlers.js
import fetchPokemonData from '../apis/fetchPokemonData.js';
import createPokemonContainer from '../components/createPokemon.js';
import dom from '../dom.js';

const handleButtonClick = async (pokemonId) => {
  try {
    const data = await fetchPokemonData(pokemonId);
    const name = data.name;
    const image = data.sprites.front_default;
    const typeNames = data.types.map(type => type.type.name);

    const pokemonContainer = createPokemonContainer(name, image, typeNames);

    // Find the existing pokemon-container div
    const existingPokemonContainer = document.querySelector('.pokemon-container');

    if (existingPokemonContainer) {
      // Replace the content of the existing pokemon container div
      existingPokemonContainer.innerHTML = '';
      existingPokemonContainer.appendChild(pokemonContainer);
    } else {
      // If no existing container, append the new container to the root div
      dom.root.appendChild(pokemonContainer);
    }
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
  }
};

export default handleButtonClick;


