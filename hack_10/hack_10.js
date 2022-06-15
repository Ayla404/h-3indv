

/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result;

result= Object.assign({},foo)
delete result.alias;



//1)NAME

let Nam = result.name;
result.name = Nam[0].toUpperCase()+ Nam. slice(1);

//2)ROLES
result.roles.push(roleSuperUser,roleUser);
let Rol = result.roles[0];
result.roles[0] = Rol.toUpperCase();



//3)SKILLS
let Sk = result.skills

//add
Sk.splice(0,0, skills[0], skills[1])//git,github
Sk.splice(5,0, skills[2]); //docker
Sk.push(skills[3])//deploy


//mod
result.skills=Sk.map(Sk => Sk.charAt(0).toUpperCase() + Sk.substring(1));
result.skills[3]= Sk[3].toUpperCase();
result.skills[4]= Sk[4].toUpperCase();


//4)LEVELS
let i=0;
for(i in levels){
    levels[i].LEVEL = levels[i].LEVEL.replace("l-", "L")
    result.levels=levels
}
//console.log(Sk)
//console.log(result)


//export result
module.exports = result; 