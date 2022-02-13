const getUser = () => ({
  id: "ABD123",
  username: "Tony",
});

const heroes = [{
    id: 1,
    name: 'Batman'
},{
    id: 2,
    name: 'Superman'
}];

const exist = (heroes) => heroes.filter((heroe)=> heroe.id === 1 )
    
console.log(exist(heroes)) 