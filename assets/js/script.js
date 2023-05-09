
// function makeAlert() {
//     window.alert()
// }

// function writeMessageInDiv(name) {
//     let myDiv = document.getElementById("message")
//     myDiv.innerText = `Bonjour, ${name}, comment allez-vous ?`
// }

// function eraseMessage() {
//     let myDiv = document.getElementById("message")
//     myDiv.innerText = `Bonjour, ${name}, comment allez-vous ?`

// }
// définition d'une variable qui sera mon bouton à l'aide de getElementById
// const monBouton = document.getElementById('monButton')

// console.log(monBouton)

// je définis une variable qui sera mon bouton à l'aide de querySelector
// const myButton = document.querySelector('#myButton')

// console.log(myButton)

//METHODE 2
// Appel de la fonction à l'aide du .onclick : pas besoin de parenthèses lors de l'appel de la fonction
// monBouton.onclick = makeAlert

//METHODE 3 (la plus utilisée)
// Mise en place d'un écouteur sur l'élément addEventListener

//  monBouton.addEventListener("click", function() {

// Je lance la fonction alert
// console.log("bientôt la cantine")
// makeAlert()
//  })

// je sélectionne l'élément getElementById
//  let mxButton = document.getElementById('mxButton')
// je mets en place un écouteur d'évènement
//  mxButton.addEventListener("click", function() {

//on détermine l'élément inputFirstname
// let inputFirstnameValue = document.getElementById('inputFirstname')
// on stocke la valeur dans la variable name à l'aide de .value
// let name = inputFirstname.value

// if(name == '') {
//     window.alert("Veuillez saisir votre prénom")
// } else {

// }
// il ne reste plus qu'à appeler notre fonction
//     writeMessageInDiv(name)
//  })

// mxButton.addEventListener("dbclick", function() {

// })
// exo Compteur
//declaration de variables
// const myCounter = document.getElementById('myCounter')
// const myClick = document.getElementById('myClick')
// const myReset = document.getElementById('myReset')
// const myTimer = document.getElementById('myTimer')

// let total = 0
// let timer = 5

// myClick.addEventListener('click', function () {
//     total = total + 1
//     myCounter.innerText = total
//     if (total == 1) {
//         myTimer.innerText = 5
//         setInterval(showTimer, 1000)
//     }


// })
// myReset.addEventListener('click', function () {
//     total = 0
//     myCounter.innerText = 'click to begin !'
// })

// function showTimer() {

//     if (timer == 0) {
//         window.alert(`Vous avez effectué ${total} click(s)`)
//         timer = 5
//         total = 0
//         location.reload()
//     } else {
//         timer --
//         myTimer.innerText = timer
//     }

// }
        // exoGuessANumber

let myResult = document.getElementById("myInput").value
const myValidate = document.getElementById("myValidate")
let guessNb = 17
let message = document.getElementById("message")

myValidate.addEventListener('click', function () {
    let myInput = document.getElementById("myInput").value
    console.log(myInput)
    if (myInput == guessNb) {
        message.textContent = "Bingo !!"
    } else if (myInput < 17) {
        message.textContent = "C\'est plus"
    } else {
        message.textContent = "C\'est moins"
    }
})








