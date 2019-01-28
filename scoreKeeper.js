let playerOne = document.querySelector('#playerOne');
let playerTwo = document.querySelector('#playerTwo');
let reset = document.querySelector('#reset');
let disOne = document.querySelector('#disOne');
let disTwo = document.querySelector('#disTwo');
let disInput= document.querySelector('#disInput');
let input = document.querySelector('input');
let p1score= 0;
let p2score= 0;
let gameOver= false;
let winningScore= 5;
 
 playerOne.addEventListener('click', function () {
 	if(!gameOver){
               p1score++;
    if (p1score === winningScore) {
    	gameOver = true;
    	disOne.classList.add('winner');
    	
 	}
 	disOne.textContent= p1score}
 	
})
  playerTwo.addEventListener('click', function () {
 	if(!gameOver){
               p2score++;
    if (p2score === winningScore) {
    	gameOver = true;
    	disTwo.classList.add('winner');
    	
 	}
 	disTwo.textContent= p2score}
 	
})
  reset.addEventListener('click', function () {
  	p1score= 0;
    p2score= 0;
    disOne.textContent = 0;
    disTwo.textContent= 0;
    disOne.classList.remove('winner');
    disTwo.classList.remove('winner');
    gameOver = false;
  })

 input.addEventListener('change', function () {
 	disInput.textContent = Number(input.value);
 	winningScore = Number(input.value);
 	p1score= 0;
    p2score= 0;
    disOne.textContent = 0;
    disTwo.textContent= 0;
    disOne.classList.remove('winner');
    disTwo.classList.remove('winner');
    gameOver = false;
 })















