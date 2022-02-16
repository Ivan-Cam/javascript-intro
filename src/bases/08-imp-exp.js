import { heroes } from "../data/heroes";

export const getHeroById = (id) => heroes.find((hero) => hero.id === id).name;

export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);

// import { getHeroById, getHeroesByOwner } from "./bases/08-imp-exp";

// console.log(getHeroById(5));

// console.log(getHeroesByOwner("DC"));
