import { useState, useContext } from "react";
import "./App.css";
import { Pokemon } from "./domain/Pokemon";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import clientContext from "./services/ClientContext";

function App() {
  const [results, setResults] = useState<Array<Pokemon>>([]);
  const { client } = useContext(clientContext)

  const handleSearch = async (filter: string) => {
    const results = await client.getPokemon(filter);
    setResults(results);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon finder</h1>
        <p>El que quiere el Pokemons, que los busque.</p>
      </header>

      <SearchBar emitSearch={handleSearch} />
      <PokemonList list={results} />

      <footer className="mt-5">
        <hr />
        <div className="d-flex justify-content-between">
          <p>Hecho por Alex Saez</p>{" "}
          <a href="https://github.com/alexxonline/pokeapi-client" className="btn btn-info">
            Link a mi repo
          </a>
        </div>
      </footer>
    </div>
  );
}



export default App;
