import I1 from "../img/i1.png";
import D6 from "../img/d6.png";
import C3 from "../img/c3.png";
import Fi1 from "../img/c7.png";

export const heroData = [
  {
    id: 1,
    name: "Sobremesa",
    decp: "Açaí",
    price: "8.25",
    imageSrc: I1,
  },
  {
    id: 2,
    name: "Bebida",
    decp: "Fanta (lata)",
    price: "10.25",
    imageSrc: D6,
  },
  {
    id: 3,
    name: "Petisco",
    decp: "Kebab Misto",
    price: "26.90",
    imageSrc: C3,
  },
  {
    id: 4,
    name: "Refeição",
    decp: "Frango com fritas",
    price: "38.90",
    imageSrc: Fi1,
  },
];

export const categories = [
  {
    id: 1,
    name: "Bebida",
    urlParamName: "drink",
    
  },
  {
    id: 2,
    name: "Petisco",
    urlParamName: "snack",
  },
  {
    id: 3,
    name: "Refeição",
    urlParamName: "meal",
  },
  {
    id: 4,
    name: "Saladas",
    urlParamName: "salads",
    
  },
  {
    id: 5,
    name: "Sanduíche",
    urlParamName: "sandwich",
  },
  {
    id: 6,
    name: "Sobremesa",
    urlParamName: "dessert",
  },

];