// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

var number1 = document.getElementById('number1')
var number2 = document.getElementById('number2')
var number3 = document.getElementById('number3')
var buttons = document.getElementById('buttons')
buttons.onclick = change_num
let score = 0

function change_num(){
    number1.innerHTML= Math.floor((Math.random() * 100));
    number2.innerHTML= Math.floor((Math.random() * 100));
    qtr()
    score++;
}
if(window.location.reload){
    number1.innerHTML= Math.floor((Math.random() * 100) + 1);
    number2.innerHTML= Math.floor((Math.random() * 100) + 1);
    qtr()
    
}

const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('mul')
const divide = document.getElementById('divide')
const modulus = document.getElementById('modulus')
function qtr(){
omen = Math.floor(Math.random()*5) 
switch(omen){
    case 0: number3.innerHTML = parseInt(number1.innerHTML,10) + parseInt(number2.innerHTML,10); break
    
    case 1: number3.innerHTML = parseInt(number1.innerHTML,10) - parseInt(number2.innerHTML,10); break
    case 2: number3.innerHTML = parseInt(number1.innerHTML,10) * parseInt(number2.innerHTML,10); break
    case 3: number3.innerHTML = (parseInt(number1.innerHTML) / parseInt(number2.innerHTML)).toFixed(1); break
    case 4: number3.innerHTML = parseInt(number1.innerHTML,10) % parseInt(number2.innerHTML,10); break
}

}




plus.onclick = pluss
minus.onclick=minuss
multiply.onclick=mull
divide.onclick=dividee
modulus.onclick=moduluss

function moduluss(){
    if(parseInt(number1.innerHTML,10) % parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
   
}

function dividee(){
    if((parseInt(number1.innerHTML,10) / parseInt(number2.innerHTML,10)).toFixed(1)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
  
}

function mull(){
    if(parseInt(number1.innerHTML,10) * parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
   
}

function minuss(){
    if(parseInt(number1.innerHTML,10) - parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
  
}
function pluss(){

    if(parseInt(number1.innerHTML,10) + parseInt(number2.innerHTML,10)==number3.innerHTML){
        scoreinc()
    }
    else{
        gameover()
    }
   
}
function scoreinc(){
    t=20
}


let t=20;
timer.innerHTML=t;
function runTimer()
{
    timer.innerHTML=t;
    if(t==0) {
        clearInterval(abcd)
        gameover()
    }
    t--;
    sessionStorage.setItem("score",score)

}

let abcd=setInterval(runTimer,1000)
function gameover(){
    
    location.href=('gameover.html')
}