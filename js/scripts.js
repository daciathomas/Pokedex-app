// wrapping pokemonList array in IIFE in order to directly access from the outside
var pokemonRepository = (function () {
var pokemonList = [
  {
    name: 'Charmeleon',
    height: 3.07,
    types: ['fire'],
    category: ['flame'],
  },
  {
    name: 'Squirtle',
    height: 1.08,
    types: ['water'],
    category: ['tiny turtle'],
  },
  {
    name: 'Caterpie',
    height: 1.00,
    types: ['bug'],
    category: ['worm'],
  },
  {
    name: 'Venusaur',
    height: 6.07,
    types: ['grass','poison'],
    category: ['seed'],
  }
];

  //add a single pokemon attributeto the pokemonList array,
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  // return the array value of Pokemon being pushed by the 'add() function'
  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
 };
})();
console.log(pokemonRepository.getAll ());

var newPokemon = {name:'Metapod', height: 2.04, types: ['bug'], category: ['cocoon'] };
pokemonRepository.add(newPokemon);

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
  document.write(pokemon.name + ' height: ' + pokemon.height);
});
