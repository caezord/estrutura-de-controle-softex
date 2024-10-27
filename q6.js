const prompt=require("prompt-sync")({sigint:true}); 

let cod = parseFloat(prompt(`
    cardapio:
    100- cachorro quente
    101- bauru simples
    102- bauru om ovo
    103- hambirguer
    104- cheeseburguer
    105- refrigerante
    >>> `));

switch (cod){
    case 100:
        console.log(`deu 1,70`);
        break;
    case 101:
        console.log(`deu 2,30`);
        break;
    case 102:
        console.log(`deu 2,60`);
        break;
    case 103:
        console.log(`deu 2,40`)
        break;
    case 104:
        console.log(`deu 2,50`)
        break;
    case 105:
        console.log(`deu 1,00`)
        break;

    default:
        console.log(`indisponivel no cardapio`);
        break;


}