import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { usePokemon } from "../context/PokemonContext";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  /* background-color: #eecad5; */
  border-radius: 8px;
`;

const PokemonList = ({ pokemonList }) => {
  const { selectedPokemon, addPokemon, removePokemon } = usePokemon();

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
          onAdd={addPokemon}
          onRemove={removePokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
