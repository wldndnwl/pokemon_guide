// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useState } from "react";

// Context 생성
const PokemonContext = createContext();

// Context 값 사용
export function usePokemon() {
  return useContext(PokemonContext);
}

// Provider 컴포넌트
export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // 포켓몬 추가 함수
  const addPokemon = (pokemon) => {
    if (!selectedPokemon.some((p) => p.id === pokemon.id)) {
      if (selectedPokemon.length < 6) {
        setSelectedPokemon([...selectedPokemon, pokemon]);
      } else {
        alert("최대 6개의 포켓몬만 선택할 수 있습니다.");
      }
    } else {
      alert(`${pokemon.korean_name} 포켓몬은 이미 선택되었습니다.`);
    }
  };

  // 포켓몬 제거 함수
  const removePokemon = (pokemon) => {
    setSelectedPokemon(selectedPokemon.filter((p) => p.id !== pokemon.id));
  };

  // Context Provider 반환
  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
