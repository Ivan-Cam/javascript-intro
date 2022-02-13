const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 49081,
    lat: 12.12312,
    lng: 31.23412,
  },
};

const persona2 = { ...persona };

persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
