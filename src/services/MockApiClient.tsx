import { Pokemon } from "../domain/Pokemon";
import { PokeApiClient } from "./PokeApiClient";

export class MockApiClient implements PokeApiClient {
    getPokemon(filter: string): Promise<Pokemon[]> {
      return new Promise((resolve, reject) => {
        resolve([
          {
            id: 0,
            name: "pikachu",
            sprites: {
              back_default: "",
              front_default: "",
            },
          },
        ]);
      });
    }
  }