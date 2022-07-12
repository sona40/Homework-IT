       /*1*/

try{
function animal(){
	animal = dog;
}
console.log(dog);
}catch(err){
	console.log(err.name);
}finally{
	console.log("Correct the error");
}  


let num = 1;
try {
  num.toPrecision(500);   
}
catch(err) {
  console.log(err.name);
}finally{
	console.log("Correct the error");
}


try {
  eval("console.log('Hello)");
}
catch(err) {
  console.log(err.name);
}finally{
	console.log("Correct the error");
}


try {
let num = 1;
  num.toUpperCase(); 
}catch(err) {
  console.log(err.name);
}finally{
	console.log("Correct the error");
}



              /*2*/

function div(a, b){
	if (b == 0) {
    throw new Error("Cannot be divided by 0"); 
  }
     return  a / b;
}
console.log(div(10, 2));




