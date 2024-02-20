export default function PokemonDetails({ name, icon, typeIcon, description }) {
  return (
    <>
      <div className="chosen-image">
        <img src={icon} alt={name} className="chosen-pokemon-img" />
      </div>
      <div className="chosen-pokemon-info">
        <h2 className="chosen-pokemon-name">{name}</h2>
        <img src={typeIcon} alt="" className="chosen-pokemon-type" />
        <p className="chosen-pokemon-desc">{description}</p>
      </div>
    </>
  );
}
