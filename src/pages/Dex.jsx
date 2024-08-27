// import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import { usePokemon } from "../context/PokemonContext";

function Dex() {
  //   const [selectedPokemon, setSelectedPokemon] = useState([]);
  const { selectedPokemon, addPokemon, removePokemon } = usePokemon();

  //   const addPokemon = (pokemon) => {
  //     if (selectedPokemon.some((p) => p.id === pokemon.id)) {
  //       alert(`${pokemon.korean_name} 포켓몬은 이미 선택되었습니다.`);
  //     } else if (selectedPokemon.length >= 6) {
  //       alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
  //     } else {
  //       setSelectedPokemon([...selectedPokemon, pokemon]);
  //     }
  //   };

  //   const removePokemon = (pokemon) => {
  //     setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  //   };

  return (
    <div
      style={{
        // display: "flex",
        // justifyContent: "space-around",
        padding: "20px",
      }}
    >
      <Dashboard selectedPokemon={selectedPokemon} onAddPokemon={addPokemon} />
      <PokemonList
        pokemonList={MOCK_DATA}
        onAddPokemon={addPokemon}
        selectedPokemon={selectedPokemon}
        onRemovePokemon={removePokemon}
      />
    </div>
  );
}

export default Dex;
