/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
 
let i =2;
for(;i<arr.length; i++){
    if(i %2!==2){
        result.push(i)
    }
};

console.log(result)
 
//export result
module.exports = result;