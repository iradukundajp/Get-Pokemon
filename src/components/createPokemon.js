// components
const createPokemonContainer = (name, image, types) => {
  const pokemonContainer = document.createElement('div');
  pokemonContainer.classList.add('pokemon-container');

  const h2 = document.createElement('h2');
  h2.innerText = name;
  
  const img = document.createElement('img');
  img.src = image;
  img.alt = name;

  const h3 = document.createElement('h3');
  h3.innerText = 'Types:';
  
  const ul = document.createElement('ul');
  types.forEach((type) => {
    const li = document.createElement('li');
    li.innerText = type;
    ul.appendChild(li);
  });
  pokemonContainer.appendChild(h2);
  pokemonContainer.appendChild(img);
  pokemonContainer.appendChild(h3);
  pokemonContainer.appendChild(ul);

  return pokemonContainer;
};

export default createPokemonContainer;


  