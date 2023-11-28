//creiamo la funzione controllo nella quale prenderemo la parola inserita dal utente e la invertiremo

function Controllo(x){  
   let wordreverse= x.split("").reverse().join("").toLowerCase();

     //se la parola inserita è uguale a quella invertita allora è palindroma
     if( x.toLowerCase()== wordreverse){
        console.log("La parola è palindroma")
     }
     else{
        console.log("la parola non è palindroma")
     }
}

// CHIEDIAMO AL UTENTE LA PAROLA DA VERIFICARE
 let parola= prompt("inserire una parola"); 
Controllo(parola);