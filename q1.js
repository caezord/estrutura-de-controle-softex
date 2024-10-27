const prompt=require("prompt-sync")({sigint:true}); 

let valor1 = BigInt(prompt(`Digite um valor: `));
let valor2 = BigInt(prompt(`Digite outro valor: `));

if(valor1 > valor2){
    console.log(`${valor1} é maior que ${valor2}`);
}else{
    console.log(`${valor2} é maior que ${valor1}`);
}