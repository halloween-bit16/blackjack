// push("") and pop() - last element of array
// unshift() and shift("") - first element of array

function getRandom(){
    let rn= Math.floor(Math.random()*13) + 1

    if ( rn > 10)
        return 10
    else
        return rn
}

let Player= {
    pname: "John",
    chips: 200
}

let sum = 0 
let hasBlackJack = false
let msg=""
let msgEl = document.getElementById("msg-el")
let cardsEl = document.querySelector("#cards-el")
let sumEl = document.getElementById("sum-el")
let cards = []
let playerEl = document.querySelector("#player-el")

function startGame(){
    let fn = getRandom()
    let sn = getRandom()
    cards = [fn,sn]
    hasBlackJack= false
    renderGame()
}

function renderGame(){
      cardsEl.textContent="Cards: "
      sum=0
    for (let i=0; i< cards.length; i++){
        cardsEl.textContent+=cards[i]+" , "
        sum+=cards[i]
    }
    sumEl.textContent= "Sum: "+sum

    if ( sum < 21 ){
        msg="Do you want to draw a new card?"
    }
    else if ( sum === 21 ){
        msg="you win!"
        hasBlackJack = true
        Player.chips+=20
    }
    else {
        msg="you lost!"
        Player.chips-=20
    }

    msgEl.textContent = msg
    updatePlayerData()
}

function newCard(){
    if(!hasBlackJack && sum < 21){
    cards.push(getRandom())
    renderGame()
    }
}

function updatePlayerData(){
playerEl.textContent = Player.pname+" : $"+Player.chips
}

updatePlayerData()