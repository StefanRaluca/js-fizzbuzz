console.log("list");


//Stabiliamo come stampare il DOM 

// variabile dentro il addEventListener per stampare in pagina il valore lista

//Utilizziamo la formula  ciclica con dentro la condizione per poter dire che ogni multiplo di 3 e di 5 ha un valore diverso 

//operazioni : 
//- L'operatore % ci fa vedere il resto ed se esso è 0 allora è multiplo di 3 

//-Ugualmente per 5 ;

//- Dopo facciamo una operazione per trovare sia i numeri multipli di 3 sia di 5 e stampiamo un rezultato diverso (FizzBuzz) (questa condizione metti come prima)


document.addEventListener("DOMContentLoaded", function() {
    let printPage = "<ul>";

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            printPage += "<li>FizzBuzz</li>";
            //console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            printPage += "<li>Fizz</li>";
           // console.log("Fizz");
        } else if (i % 5 === 0) {
            printPage += "<li>Buzz</li>";
            //console.log("Buzz");

        } else {
            printPage += "<li>" + i + "</li>";
        }
    }

    printPage += "</ul>";

    document.getElementById("container_list").innerHTML = printPage;
});
