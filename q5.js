const prompt=require("prompt-sync")({sigint:true}); 

let valor1 = parseFloat(prompt(`Digite um valor: `));
let valor2 = parseFloat(prompt(`Digite outro valor: `));

let cod = parseFloat(prompt(`digite a operação que deseja realizar:\n1-media\n2-diferenca\n3-produto entre os numeros\n4-divisao do primeiro pelo segundo\n>>> `));

switch (cod){
    case 1:
        console.log(`${(valor1+valor2)/2}`);
        break;
    case 2:
        console.log(`${valor1-valor2}`);
        break;
    case 3:
        console.log(`${valor1*valor2}`);
        break;
    case 4:
        console.log(`${valor1/valor2}`)
        break;
}