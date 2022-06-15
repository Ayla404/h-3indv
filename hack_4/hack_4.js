/**
* agregar a los valores del array los tokens:
* {f:6} y {g:7}
* dentro del array result 
* 
* 
* output => [{g:7},{a:1},{b:2},{c:3},{d:4},{e:5},{f:6}]
*/
let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let tokenF = {f:6};
let tokenG = {g:7};
let result = [];



let i = 0;
for(;i<arr.length; i++){
    if(i==0){
        arr.splice(5,i,tokenF)
    }
    if(i==0){
        arr.splice(i,0,tokenG)
    }
    result=arr.slice()
}
 
 
console.log(result)
//export result
module.exports = result; 