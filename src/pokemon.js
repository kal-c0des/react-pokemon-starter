import electricTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Electric.svg";
import fireTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Fire.svg";
import waterTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Water.svg";
import grassTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Grass.svg";
import fairyTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Fairy.svg";
import psychicTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Psychic.svg";
import normalTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Normal.svg";
import iceTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Ice.svg";
import fightingTypeIcon from "./assets/img/pokemon_type_icons/Pokemon_Type_Icon_Fighting.svg";

import pikachuImg from "./assets/img/pokemon/pikachu.png";
import charizardImg from "./assets/img/pokemon/charizard.png";
import bulbasaurImg from "./assets/img/pokemon/bulbasaur.png";
import squirtleImg from "./assets/img/pokemon/squirtle.png";
import jigglypuffImg from "./assets/img/pokemon/jigglypuff.png";
import abraImg from "./assets/img/pokemon/abra.png";
import eveeImg from "./assets/img/pokemon/evee.png";
import snorlaxImg from "./assets/img/pokemon/snorlax.png";
import laprasImg from "./assets/img/pokemon/lapras.png";
import mewtwoImg from "./assets/img/pokemon/mewtwo.png";
import lucarioImg from "./assets/img/pokemon/lucario.png";
import kirliaImg from "./assets/img/pokemon/kirlia.png";

export default [
  {
    name: "Pikachu",
    type: "Electric",
    description:
      "A mouse-like Pokémon that can release electric discharges of varying intensity.",
    icon: pikachuImg,
    typeIcon: electricTypeIcon,
  },
  {
    name: "Charizard",
    type: "Fire/Flying",
    description:
      "Spits fire hot enough to melt boulders. Known to unintentionally cause forest fires.",
    icon: charizardImg,
    typeIcon: fireTypeIcon,
  },
  {
    name: "Bulbasaur",
    type: "Grass/Poison",
    description:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    icon: bulbasaurImg,
    typeIcon: grassTypeIcon,
  },
  {
    name: "Squirtle",
    type: "Water",
    description:
      "Shoots water at prey while in the water. Withdraws into its shell when in danger.",
    icon: squirtleImg,
    typeIcon: waterTypeIcon,
  },
  {
    name: "Jigglypuff",
    type: "Normal/Fairy",
    description:
      "Uses its alluring eyes to enrapture its foe. It then sings a pleasing melody that lulls the foe to sleep.",
    icon: jigglypuffImg,
    typeIcon: fairyTypeIcon,
  },
  {
    name: "Abra",
    type: "Psychic",
    description:
      "Sleeps 18 hours a day. If it senses danger, it will teleport itself to safety even as it sleeps.",
    icon: abraImg,
    typeIcon: psychicTypeIcon,
  },
  {
    name: "Eevee",
    type: "Normal",
    description:
      "Its irregularly configured DNA is affected by its surroundings. It evolves if its environment changes.",
    icon: eveeImg,
    typeIcon: normalTypeIcon,
  },
  {
    name: "Snorlax",
    type: "Normal",
    description:
      "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
    icon: snorlaxImg,
    typeIcon: normalTypeIcon,
  },
  {
    name: "Lapras",
    type: "Water/Ice",
    description:
      "A gentle soul that can understand human speech. It can ferry people across the sea on its back.",
    icon: laprasImg,
    typeIcon: iceTypeIcon,
  },
  {
    name: "Mewtwo",
    type: "Psychic",
    description:
      "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
    icon: mewtwoImg,
    typeIcon: psychicTypeIcon,
  },
  {
    name: "Lucario",
    type: "Fighting/Steel",
    description:
      "It has the ability to sense the Auras of all things. It understands human speech.",
    icon: lucarioImg,
    typeIcon: fightingTypeIcon,
  },
  {
    name: "Kirlia",
    type: "Psychic/Fairy",
    description:
      "It has the power to predict the future. Its power peaks when it is protecting its Trainer.",
    icon: kirliaImg,
    typeIcon: fairyTypeIcon,
  },
];
