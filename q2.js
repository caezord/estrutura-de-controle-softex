const prompt=require("prompt-sync")({sigint:true});

let ano = parseFloat(prompt(`digite o ano  que você nasceu: `));

if(ano < 2024){
    console.log(`pode votar`);
}else{
    console.log(`não pode votar`);
}