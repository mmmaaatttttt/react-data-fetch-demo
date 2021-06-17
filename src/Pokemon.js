import { useEffect, useState } from "react";

function Pokemon({ name, url }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const catchOne = async () => {
      let response = await fetch(url);
      let data = await response.json();
      setPokemon(data);
    };

    catchOne();
  }, [url]);

  return (
    <div>
      <h1>{name}</h1>
      {pokemon ? <img src={pokemon.sprites.front_default} alt={`${name} front default`} /> : null }
    </div>
  );
}

export default Pokemon;
