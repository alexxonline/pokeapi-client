import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import ClientContext from "./services/ClientContext";
import App from "./App";
import { MockApiClient } from "./services/MockApiClient"


test("renders a pikachu element", async () => {
  render(
    <ClientContext.Provider value={{client: new MockApiClient()}}>
      <App />
    </ClientContext.Provider>
  )
  const titleElement = screen.getByText(/Pokemon Finder/i);
  fireEvent.click(screen.getByText(/Buscar/i));
  await waitFor(() => screen.getByRole("pokemon-container"))
  expect(screen.getByRole("pokemon-name")).toHaveTextContent(/pikachu/i)
  expect(titleElement).toBeInTheDocument();
});
