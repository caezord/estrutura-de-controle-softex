const prompt=require("prompt-sync")({sigint:true});

let altura = parseFloat(prompt(`digite sua altura: `));
let sexo = parseFloat(prompt(`qual o seu sexo? 1-h ou 2-m \n >>> `));

switch (sexo){
    case 1:
        console.log(`seu peso ideal é ${(72.7 * altura)-58}`);
        break;

    case 2:
        console.log(`seu peso ideal é ${(62.1 * altura)-44.7}`)
        break;

    default:
        console.log(`opção indisponível`);
}