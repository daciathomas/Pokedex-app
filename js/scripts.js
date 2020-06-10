
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

// function to add list for each pokemon
function addListeItem(pokemon){
// create a variable for the forEach loop then  assign it the ul element
var pokemonList = document.querySelector('.pokemon-List');
//create a li element
var listItem = document.createElement('li');
//create a button element and set innerText
var button = document.createElement('button');
button.innerText =  pokemon.name;
//add a class button using classList
button.classList.add('pokemon-name');
//append the button to list as its child
listItem.appendChild(button);
//append the listItem to ul as its child
pokemonList.appendChild(listItem);

}
return { //return all previous function so that it's available outside IIFE
  add: add,
  getAll: getAll,

};

})();

console.log(pokemonRepository.getAll ());
var newPokemon = {name:'Metapod', height: 2.04, types: ['bug'], category: ['cocoon'] };
pokemonRepository.add(newPokemon);
console.log(pokemonRepository.getAll());

//empty for EAch loop block
pokemonRepository.getAll().forEach(function(pokemon){




});
