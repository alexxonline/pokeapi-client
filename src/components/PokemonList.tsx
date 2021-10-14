import { Pokemon } from "../domain/Pokemon";

export default function PokemonList({ list }: { list: Array<Pokemon> }) {
    if (list.length > 0) {
      return (
        <>
          {list.map((pkmn) => (
            <div className="d-flex align-items-center" key={pkmn.name} role="pokemon-container">
              <img src={pkmn.sprites.front_default} alt={pkmn.name} />
              <p role="pokemon-name">{pkmn.name}</p>
            </div>
          ))}
        </>
      );
    } else {
      return <p>No se encontraron resultados prueba hacer una nueva búsqueda</p>;
    }
  }