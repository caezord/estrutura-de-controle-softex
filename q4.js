const prompt=require("prompt-sync")({sigint:true});

let cod = parseFloat(prompt(`digite o código do produto: `));

switch (cod){
    case 1:
        console.log(`alimento nao perecivel`);
        break;

    case 2:
    case 3:
    case 4:
        console.log(`alimento perecivel`)
        break;
        
    case 5:
    case 6:
        console.log(`vestuario`)
        break;

    case 7:
        console.log(`higiene pessoal`)
        break;

    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        console.log(`limpeza e utensilios domesticos`)
        break;

    default:
        console.log(`opção indisponível`);
}