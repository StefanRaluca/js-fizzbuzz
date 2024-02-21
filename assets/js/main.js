console.log("list");





//Usiamo anche il metodo con append:
// - (document.createElement) crea un elemento li in lista del Markup
// - creiamo una const che la definiamo con elementId





/*const ul =document.querySelector("ul.list_page");
const li =document.createElement('li');
li.append('Elemento');
ul.append('li');
*/
/* 

    const prinPage = document.getElementById("list_page");

    for (let i = 1; i <= 100; i++) {
        let liPage = document.createElement("li");

        if (i % 3 === 0 && i % 5 === 0) {
            liPage.innerHTML = "FizzBuzz";
        } else if (i % 3 === 0) {
            liPage.innerHTML = "Fizz";
        } else if (i % 5 === 0) {
            liPage.innerHTML = "Buzz";
        } else {
            liPage.innerHTML = i;
        }

        prinPage.append(liPage);
    }

*/



//Stabiliamo come stampare il DOM 

// variabile dentro il addEventListener per stampare in pagina il valore lista

//Utilizziamo la formula  ciclica con dentro la condizione per poter dire che ogni multiplo di 3 e di 5 ha un valore diverso 

//operazioni : 
//- L'operatore % ci fa vedere il resto ed se esso è 0 allora è multiplo di 3 

//-Ugualmente per 5 ;

//- Dopo facciamo una operazione per trovare sia i numeri multipli di 3 sia di 5 e stampiamo un rezultato diverso (FizzBuzz) (questa condizione metti come prima)

    let printPage = "<ul>";
    for (let i = 1; i <= 100; i++) {
        let listItemClass = ""
        if (i % 3 === 0 && i % 5 === 0) {
            printPage += "<li class='fizzbuzz'>FizzBuzz</li>";
            //console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            printPage += "<li class='fizz'>Fizz</li>";
            // console.log("Fizz");
        } else if (i % 5 === 0) {
            printPage += "<li class='buzz'>Buzz</li>";
            //console.log("Buzz");

        } else {
            printPage += "<li>" + i + "</li>";
        }
    }

    printPage += "</ul>";

    document.getElementById("container_list").innerHTML = printPage;



