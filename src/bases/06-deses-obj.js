const person = {
    name: "Tony",
    age: 45,
    codeName: "Ironman",
  };
  
  const { name, age, codeName, power = "No tiene poder" } = person;
  
  // console.log( name )
  // console.log( age )
  // console.log( codeName )
  // console.log( power )
  
  const createHero = ({ name, age, codeName, power = "Dinero" }) => ({
    id: 123124,
    name,
    age,
    codeName,
    power,
  });
  
  console.log(createHero(person));