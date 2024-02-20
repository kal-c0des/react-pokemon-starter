import { useState } from "react";
import PokemonCard from "./PokemonCard";
import pokidexEntries from "./pokemon";
import PokemonDetails from "./PokemonDetails.jsx";

import "./App.css";
import pokemon from "./pokemon";

function App() {
  const [pokidex, setPokidex] = useState(pokidexEntries);
  const [chosenPokemon, setChosenPokemon] = useState(null);

  return (
    <main className="main-container">
      <h1 className="page-header">React Pokidex</h1>
      {/* Hidden until Pokemon is clicked on */}
      <div className="chosen-pokemon-container">
        {chosenPokemon && (
          <PokemonDetails
            name={chosenPokemon.name}
            icon={chosenPokemon.icon}
            typeIcon={chosenPokemon.typeIcon}
            description={chosenPokemon.description}
          />
        )}
      </div>
      <div className="pokemon-cards-container">
        {pokidex &&
          pokidex.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                icon={pokemon.icon}
                typeIcon={pokemon.typeIcon}
                onClick={() => setChosenPokemon(pokemon)}
              />
            );
          })}
      </div>
    </main>
  );
}

export default App;
