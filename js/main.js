"use strict";

document.getElementById("genera-btn").onclick = function () 
{ 
    const firstName = document.getElementById('name').value;
    const km = Number(document.getElementById('km').value);
    const age = document.getElementById('age').value;
    document.getElementById('ticket').style.display = "block";

    //Prezzo biglietto
    let ticketPrice = km * 0.21;
    
    //Eta' utente
    const userAge = document.getElementById('age').value;
    //Numero carrozza
    let numeroCarrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById('carrozza').innerHTML = numeroCarrozza;

    //Nome passeggero
    const nomePasseggero = document.getElementById("name").value;
    document.getElementById('nome').innerHTML = nomePasseggero;

    //Codice CP
    const codice = Math.floor(Math.random()*100000+1)
    document.getElementById('cp').innerHTML = codice;

    //Calcolo prezzo
    if(userAge == 2){
        let priceUnderAge = ticketPrice - (ticketPrice * 0.2);
        document.getElementById('price').innerHTML = priceUnderAge.toFixed(2) + "€";
    }
    else if(userAge == 3)
    {
        let priceOverAge = ticketPrice - (ticketPrice * 0.4);
        document.getElementById('price').innerHTML = priceOverAge.toFixed(2) + "€";;
    }
    else{
        document.getElementById('price').innerHTML = ticketPrice.toFixed(2) + "€";
    }
};