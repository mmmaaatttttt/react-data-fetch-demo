import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

function PokemonList() {
  const [pokemonList, setPokemon] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const catchSomeOfThem = async () => {
      try {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon");
        let data = await response.json();
        setPokemon(data.results);
      } catch(err) {
        setError(err);
      }
    };

    catchSomeOfThem();
  }, []);

  return (
    <div>
      <h1>PokemonList</h1>
      {pokemonList.map(pokemon => (
        <Pokemon name={pokemon.name} url={pokemon.url} key={pokemon.name} />
      ))}
      {error ? <p>{error.message}</p> : null}
    </div>
  );
}

export default PokemonList;
