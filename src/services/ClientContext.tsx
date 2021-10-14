import React from "react";
import { HttpPokeApiClient, PokeApiClient } from "./PokeApiClient";

export interface ClientContext {
  client: PokeApiClient;
}

const defaultState = {
  client: new HttpPokeApiClient(),
};

const clientContext = React.createContext<ClientContext>(defaultState);

export default clientContext;
