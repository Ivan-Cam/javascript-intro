const getUser = () => ({
  id: "ABD123",
  username: "Tony",
});

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

// const existe = heroes.some((heroe) => heroe.id === 1);
// const existe = heroes.filter((heroe) => heroe.id === 1);
const { name } = heroes.find((heroe) => heroe.id === 1);

console.log( name );