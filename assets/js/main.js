// ***** MAIL *****

// Mail Chiedi all’utente la sua email.  
var userEmail = prompt("Inserisci il tuo indirizzo E-mail")
console.log(userEmail);

// Controlla che sia nella lista di chi può accedere.
// Stampa un messaggio appropriato sull’esito del controllo.
var listEmail = ["Player_1@gmail.com", "Player_2@gmail.com","Player_3@gmail.com"]
console.log(listEmail);
// var allowed = listEmail.includes(userEmail)
var access = document.getElementById("access")
var game = document.getElementById('game_box');

var allowed = false;

for(var i=0; i < listEmail.length; i++){
    if (userEmail == listEmail[i]){
        allowed = true
    }
}

if (allowed == true){
    access.innerHTML = "Access Granted"
    game_box.style.display = 'block'
    console.log(access);
} else {
    access.innerHTML = "Access Denied! Try again!"
    game_box.style.display = 'none'
    console.log(access);
}

// ************************************************************************
// function containsObj(userEmail, listEmail){
//     for (var userEmail = 0; userEmail < listEmail.length; userEmail++){
//         if (listEmail[userEmail] === userEmail) {
//             return true;
//         }
//     }
//     return false;   
// }
// ***********************************************************************

// GAME
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
var playerNumber = Math.ceil(Math.random() * 6);
document.getElementById("playerNumber").innerHTML = playerNumber
console.log(playerNumber);
var pcNumber = Math.ceil(Math.random() * 6)
document.getElementById("pcNumber").innerHTML = pcNumber
console.log(pcNumber);
//  Stabilire il vincitore, in base a chi fa il punteggio più alto.
var result = document.getElementById("result")

if (playerNumber > pcNumber){
    result.innerHTML = "Congratulations! You Won!"    
} else if (playerNumber < pcNumber){
    result.innerHTML = "Ops! You Lost..."
} else {
    result.innerHTML = "Draw!"
}

