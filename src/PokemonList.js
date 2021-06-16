import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonList() {
  const [pokemonList, setPokemon] = useState([]);

  useEffect(() => {
    const catchSomeOfThem = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon");
      let data = await response.json();
      setPokemon(data.results);
    };

    catchSomeOfThem();
  }, []);

  return (
    <div>
      <h1>PokemonList</h1>
      {pokemonList.map(pokemon => (
        <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
      ))}
    </div>
  );
}

export default PokemonList;
