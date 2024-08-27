// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";
import PokemonCard from "./PokemonCard";

const DashboardContainer = styled.div`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const PokemonList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  /* justify-content: center; */
`;

const Dashboard = () => {
  const { selectedPokemon } = usePokemon();

  return (
    <DashboardContainer>
      <h2>대시보드</h2>
      {selectedPokemon.length === 0 ? (
        <p>선택된 포켓몬이 없습니다.</p>
      ) : (
        <PokemonList>
          {selectedPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}
              isSelected={true}
              onAdd={() => {}}
              onRemove={() => {}}
            />
          ))}
        </PokemonList>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
