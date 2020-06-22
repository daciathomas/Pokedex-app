
// wrapping pokemonList array in IIFE in order to directly access from the outside
var pokemonRepository = (function () {
var pokemonList = [ ];

//add a single pokemon attribute to the pokemonList array,
function add (pokemon) {
    pokemonList.push(pokemon);
  }

// return the array value of Pokemon being pushed by the 'add() function'
function getAll() {
  return pokemonList;
}

// Function to show details of each Pokemon
function showDetails(pokemon) {
  console.log(pokemon)
}

// function to add list for each pokemon
function addListItem(pokemon){
console.log(pokemon)
// create a variable for the forEach loop then  assign it the ul element
var $pokemonList = document.querySelector('.pokemon-List');
console.log($pokemonList)
//create a li element
var $listItem = document.createElement('li');
//create a button element and set innerText
var $button = document.createElement('button');
$button.innerText =  pokemon.name;
//append the button to list as its child
$pokemonList.appendChild($listItem);
//append the listItem to ul as its child
$listItem.appendChild($button);
//add a class button using classList
$button.classList.add('my-class');

$button.addEventListener('click', function(event){
  showDetails(pokemon);
});
}
//return all previous function so that it's available outside IIFE
return {
add: add,
getAll: getAll,
//addListIem function added to return object so that it's available outside the IIFE
addListItem: addListItem,
showDetails: showDetails
};


})();

console.log(pokemonRepository.getAll ());

var newPokemon = {name:'Metapod', height: 2.04, types: ['bug'], category: ['cocoon'] };
pokemonRepository.add(newPokemon);

console.log(pokemonRepository.getAll());
//creates list of pokemon with pokemon's name on the button
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);

});
