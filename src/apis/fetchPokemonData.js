// api
const fetchPokemonData = async (pokemonId) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export default fetchPokemonData;

  