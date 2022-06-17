/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* en donde se representan la clave y el valor
* 
* output => {
    id:100,
    name:"Foo",
    role:"ADMIN"
}
*/
let result = {
    id:100,
    name:"foo",
    role:"admin"
};

let nam = result.name;
result.name = nam[0].toUpperCase()+ nam.slice(1);


let rol = result.role;
result.role = rol.toUpperCase();

//console.log(result)
//export result
module.exports = result; 