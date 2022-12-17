const choiceArr = ["ROCK", "PAPER", "SCISSORS"]
let noOfTurns = 0
//window.computerChoose = Math.floor(Math.random() * choiceArr.length)
const turnInput = document.querySelector('[data-ns-test="game-number"]')
const playbtn = document.querySelector('[data-ns-test="play-game"]')
const btn = document.querySelectorAll(".user-choice")
const compChoice = document.querySelector('[data-ns-test="computer-choose"]')
const userPoints = document.querySelector('[data-ns-test="user-points"]')
const compPoints = document.querySelector('[data-ns-test="computer-points"]')
const turnsLeft = document.querySelector('[data-ns-test="rounds-left"]')
const roundResult = document.querySelector('[data-ns-test="round-result"]')
const gameResult = document.querySelector('[data-ns-test="game-result"]')


playbtn.addEventListener("click",()=>{
    if(turnInput.value != '') {
    noOfTurns = turnInput.value
    btn.forEach(aabs => aabs.removeAttribute('disabled'))
    turnsLeft.innerText = noOfTurns
    userPoints.innerText = 0;
    compPoints.innerText = 0;
    roundResult.innerText ='';
    gameResult.innerText = '';
    }
})
btn.forEach(e => {
    e.addEventListener("click",game)
})
function game(){
    window.computerChoose = Math.floor(Math.random() * choiceArr.length)
    compChoice.innerText = choiceArr[window.computerChoose]
    turnsLeft.innerText = parseInt(turnsLeft.innerText)-1;
    if(event.target.value.toUpperCase()==choiceArr[window.computerChoose]){
        roundResult.innerText = "TIE"
    }else{
        if(event.target.value=="rock"){
            if(choiceArr[window.computerChoose]=="PAPER"){
                roundResult.innerText = "LOSE"
            }else{
                roundResult.innerText = "WON"
            }     
        }else if(event.target.value=="paper"){
            if(choiceArr[window.computerChoose]=="ROCK"){
                roundResult.innerText = "WON"
            }else{
                roundResult.innerText = "LOSE"
            }
        }else{
            if(choiceArr[window.computerChoose]=="ROCK"){
                roundResult.innerText = "WON"
            }else{
                roundResult.innerText = "LOSE"
            }
        }
    }if(roundResult.innerText=="LOSE"){
        compPoints.innerText = parseInt(compPoints.innerText)+1;
    }else if(roundResult.innerText=="WON"){
        userPoints.innerText = parseInt(userPoints.innerText)+1;
    }
    if(parseInt(turnsLeft.innerText)==0){
        btn.forEach(e => e.setAttribute("disabled",true))
        if(parseInt(userPoints.innerText)>parseInt(compPoints.innerText)){
            gameResult.innerText = "WON"
        }else if(parseInt(userPoints.innerText)<parseInt(compPoints.innerText)){
            gameResult.innerText = "LOSE"
        }else{
            gameResult.innerText = "TIE"
        }
        roundResult.innerText = ""
        compChoice.innerText = ""
        
    }
}

const resetbtn = document.querySelector('.reset-btn');
resetbtn.addEventListener('click' , reset)

function reset() {
    turnInput.value = ''
    noOfTurns = turnInput.value
    btn.forEach(e => e.setAttribute('disabled', true))
    turnsLeft.innerText = noOfTurns
    userPoints.innerText = '';
    compPoints.innerText = '';
    roundResult.innerText ='';
    gameResult.innerText = '';
}