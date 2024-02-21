import React from "react";

export default function PokemonCard({ name, icon, typeIcon, onClick }) {
  return (
    <div className="pokemon-card" onClick={onClick}>
      <div className="image-container">
        <img src={icon} alt={name} className="pokemon-image" />
      </div>
      <div className="pokemon-info">
        <h2 className="pokemon-name">{name}</h2>
        <img src={typeIcon} alt="Type" className="type-icon" />
      </div>
    </div>
  );
}
