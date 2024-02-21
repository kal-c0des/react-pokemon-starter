import { useState } from "react";
import pokidexEntries from "./pokemon";
import PokemonDetails from "./components/PokemonDetails.jsx";

import "./App.css";
import PokemonCardCollection from "./components/PokemonCardCollection.jsx";

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
      <PokemonCardCollection
        pokidex={pokidex}
        onPokemonCardClick={setChosenPokemon}
      />
    </main>
  );
}

export default App;
