let minNum= document.querySelector('#min'),
    div=document.querySelector('div'),
    maxNum= document.querySelector('#max'),
    input=document.querySelector('input'),
    button=document.querySelector('button'),
    message=document.querySelector('#message');


let min = 1,
    max = 10,
    winnningScore = getWinningNum(min, max),
    guessesLeft=3;

 div.addEventListener('mousedown', function (e) {
 if (e.target.className === 'play-again'){
 	window.location.reload();
 }
 })

button.addEventListener('click', function () {
	//convert to a number
	let guess = parseInt(input.value);
	//validate
	if(isNaN(guess) || guess < min || guess > max){
     setMessage(`please enter a number between ${min} and ${max}`, 'red');
     input.style.borderColor='red';
	}
	//GAME OVER - won
	//check if won
	if (guess === winnningScore){
        gameOver(true,`${winnningScore} is correct, YOU WIN!` );
	}else{
         // wrong number
         guessesLeft-=1;
         if (guessesLeft === 0) {
         gameOver(false,  `GAME OVER! YOU LOST. the correct number was ${winnningScore} `);
         }else {
         	//game continues - answer wrong
         	//change border color
         	 input.style.borderColor='red';
         	//clear input
         	input.value = '';
         	// set message
         	setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

         }
	}
})
//game over
function gameOver(won, msg) {
	let color;
	won === true ? color = 'green' : color = 'red';
	     input.disabled = true;
         // make border green
         input.style.borderColor= color;
         //set text color
         message.style.color = color;
         //setmessage
         setMessage(msg);
         // Play again
         button.textContent ='Play Again';
         button.className += 'play-again';

}

function getWinningNum(min, max){
 return Math.floor(Math.random()*(max-min+ 1)+min);
}

function setMessage(msg, color) {
	message.style.color = color;
	message.textContent = msg;
}