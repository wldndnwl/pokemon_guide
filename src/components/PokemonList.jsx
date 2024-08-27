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

// const PokemonList = ({ PokemonList, onAddPokemon }) => {
//   const [selectedPokemon, setSelectedPokemon] = useState([]);
//   const handleAddPokemon = (pokemon) => {
//     if (selectedPokemon.some((p) => p.id === pokemon.id)) {
//       alert(`${pokemon.korean_name} 포켓몬은 이미 선택되었습니다.`);
//       return;
//     }
//   };
//   if (selectedPokemon.length < 6) {
//     selectedPokemon([...selectedPokemon, pokemon]);
//   } else {
//     alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
//     return;
//   }
// };

const PokemonList = ({ pokemonList }) => {
  const { addPokemon, removePokemon } = usePokemon();

  return (
    <ListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          // isSelected={selectedPokemon.some((p) => p.id === pokemon.id)}
          onAdd={addPokemon}
          onRemove={removePokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;
