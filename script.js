'use strict';

console.log('123');


const secretNumber = Math.trunc(Math.random() * 20) + 1;


let score = 20;
document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {

    let guess = Number(document.querySelector('.guess').value)

    if (!guess) {
        document.querySelector('.message').textContent = '🤬 NO NUMBER!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '😍 YES!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector("body").style.backgroundColor='green';
    } else if (guess > secretNumber ) {
        document.querySelector('.message').textContent = '⛰ too high';
        score--
        document.querySelector('.score').textContent = score;
        if (score <= 0) {
            document.querySelector('.message').textContent = 'ur retarted'
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'too small 〽';
        score--
        document.querySelector('.score').textContent = score;
        if (score <=  0) {
            document.querySelector('.message').textContent = 'ur retarted'
            document.querySelector('.score').textContent = 0;

        }
    }


})