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

//  for (var i = 0; i < pokemonList.length; i++) {
//   document.write('<h2>' + pokemonList[i].name + '</h2>' + 'height: ' + pokemonList[i].height)
  pokemonList.forEach(function(creature) {
  console.log(creature.name + ' height: ' + creature.height);
});
