// generiamo una funzione che crea numeri random
function randomNumber(){
    let number= Math.floor((Math.random() *5)+1);
    return number;
}

// generiamo una funzione che sommi due numeri e verifichi se la loro somma è pari o dispari
function pariOdispari(x, y){
    let somma= x + y;
     if(somma%2 == 0){
        return "pari";
     }
    return "dispari";
}

//facciamo inserire al utente un numero
let numero=parseInt(prompt("inserisci un numero"));

// facciamo inserire al utente se il risultato sarà pari o dispari
let risposta= prompt("scegli tra pari o dispari").toLowerCase();

// verifichiamo se il risultato ottenuto corrisponde alla nostra scelta
if(risposta == pariOdispari(randomNumber(), numero)){
    console.log("Hai vinto")
}
else{
    console.log("Hai perso")
}


console.log();

