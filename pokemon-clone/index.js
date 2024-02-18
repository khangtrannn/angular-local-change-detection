const fs = require('fs');

async function getPokemon(id) {
  try {
    const response = await fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const svgContent = await response.text();

    // Write SVG content to a local file
    fs.writeFile(`../src/assets/pokemons/${id}.svg`, svgContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log(`File pokemon_${id}.svg saved successfully.`);
      }
    });
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

for (let i = 0; i < 100; i++) {
  getPokemon(i);
}
