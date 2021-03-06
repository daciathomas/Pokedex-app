
// wrapping pokemonList array in IIFE in order to directly access from the outside
var pokemonRepository = (function () {
var pokemonList = [ ];
var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
//creates an event listener when the button is clicked
$button.addEventListener('click', function (event){
  showDetails(pokemon);
});
}
//Add loadlist function as a return key that uses fetch
function loadList() {
  return fetch(apiUrl).then(function (response) {
  return response.json();
//If the promise isresolved, .then function passed through parametere
}).then (function (json){
  json.results.forEach(function (item) {
    var pokemon = {
      name: item.name,
      detailsUrl: item.url
    };
    add (pokemon);
  });
//if the promise is rejected .catch is run
}).catch(function (e) {
  console.error(e);
})
}

//Add loadDetails function with Pokemon object as a parameter
function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch (url). then(function (response) {
    return response.json();
  }).then (function (details) {
  // Add details of the item
  item.image.url = details.sprites.front_default;
  item.height = details.height;
  item.types = details.types;
}).catch(function (e) {
  console.error(e);
});
}
// function to return Pokedex object Array
function catchAll () {
  return pokemonList;
}
//function to console.log pokemon details
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
  });
}
//return all previous function so that it's available outside IIFE
return {
add: add,
getAll: getAll,
addListItem: addListItem,
loadList: loadList,
loadDetails: loadDetails,
showDetails: showDetails
};
})();

console.log(pokemonRepository.getAll ());
/*
var newPokemon = {name:'Metapod', height: 2.04, types: ['bug'], category: ['cocoon'] };
pokemonRepository.add(newPokemon);

console.log(pokemonRepository.getAll()); */
//creates list of pokemon with pokemon's name on the button
pokemonRepository.loadList().then (function () {
pokemonRepository.getAll().forEach(function(pokemon){
  pokemonRepository.addListItem(pokemon);
  });

});
