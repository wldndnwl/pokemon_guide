// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../mock";

function PokemonDetail() {
  // URL에서 포켓몬 ID를 가져옴.
  const { id } = useParams();
  const navigate = useNavigate();
  // 포켓몬 데이터 찾기
  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  // 포켓몬이 없으면 에러 메시지
  if (!pokemon) {
    return <div>포켓몬을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <h2>{pokemon.korean_name}</h2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default PokemonDetail;
