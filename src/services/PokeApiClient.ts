import { Pokemon } from "../domain/Pokemon";
import { PokemonSimple } from "../domain/PokemonSimple";
const PREFETCH_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

export interface PokeApiClient {
  getPokemon(filter: string): Promise<Pokemon[]>;
}

export class HttpPokeApiClient implements PokeApiClient {
  listOfPokemons: Array<PokemonSimple> = [];

  private async getFullListOfPokemonNames() {
    if (this.listOfPokemons.length > 0) {
      return this.listOfPokemons;
    }

    let nextUrl = `${PREFETCH_URL}&offset=0`;
    while (nextUrl != null) {
      const response = await fetch(nextUrl);
      const responseBody = await response.json();
      this.listOfPokemons.push(...responseBody.results);
      nextUrl = responseBody.next;
    }

    return this.listOfPokemons;
  }

  async getPokemon(filter: string): Promise<Pokemon[]> {
    const list = await this.getFullListOfPokemonNames();
    const filteredResults = list.filter((pkmn) => {
      return pkmn.name.toLowerCase().indexOf(filter.toLowerCase()) != -1;
    });

    const result: Array<Pokemon> = [];

    for (let i = 0; i < filteredResults.length; i++) {
      const pokemonResponse = await fetch(filteredResults[i].url);
      const pokemonData = await pokemonResponse.json();
      result.push(pokemonData);
    }
    console.log(result)
    return result;
  }
}
