// eslint-disable-next-line no-unused-vars
import React from "react";
import styled from "styled-components";
import { usePokemon } from "../context/PokemonContext";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 8px;
  /* background-color: #d1e9f6; */
  text-align: center;
  width: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => (props.isSelected ? "#ff6b6b" : "#4caf50")};
  color: white;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#ff4b4b" : "#45a049")};
  }
`;

function PokemonCard({ pokemon, isSelected }) {
  const { addPokemon, removePokemon } = usePokemon();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();
    if (isSelected) {
      removePokemon(pokemon);
    } else {
      addPokemon(pokemon);
    }
  };

  const handleClickCard = () => {
    navigate(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card onClick={handleClickCard}>
      <img
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        style={{ width: "100px", height: "100px" }}
      />
      <p>{pokemon.korean_name}</p>
      <Button isSelected={isSelected} onClick={handleClick}>
        {isSelected ? "삭제" : "추가"}
      </Button>
    </Card>
  );
}

export default PokemonCard;
