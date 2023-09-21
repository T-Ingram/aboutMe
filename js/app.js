'use strict';

let userName = prompt ('Before we get started please tell me your name?');
//console.log (userName);
alert('Hello ' + userName + ', let\'s get started.');
//console.log ("Before we get started please tell me your name? Hello " + userName + ", let's get started.")

let correctAnswerTally = 0;

function q1() {
  let questionOne = prompt('Is my name Trevor Ingram?').toLowerCase();

  if (questionOne ==='yes' || questionOne === 'y'){
    //console.log('You are correct!');
    alert('You are correct!');
    correctAnswerTally++;
  } else if (questionOne === 'no' || questionOne === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
  } else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
  }
}

function q2() {
  let questionTwo = prompt('Did I grow up in Oregon?').toLowerCase();

  if (questionTwo ==='yes' || questionTwo === 'y'){
    //console.log('You are correct!');
    alert('You are correct!');
    correctAnswerTally++;
  } else if (questionTwo === 'no' || questionTwo === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
  } else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
  }
}

function q3() {
  let questionThree = prompt('Did I ever live in Florida?').toLowerCase();

  if (questionThree ==='yes' || questionThree === 'y'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
  } else if (questionThree === 'no' || questionThree === 'n'){
    //console.log('You are correct!');
    alert('You are correct!');
    correctAnswerTally++;
  } else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
  }
}

function q4() {
  let questionFour = prompt('Did I attend college?').toLowerCase();

  if (questionFour ==='yes' || questionFour === 'y'){
    //console.log('You are correct!');
    alert('You are correct!');
    correctAnswerTally++;
  } else if (questionFour === 'no' || questionFour === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
  } else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
  }
}

function q5() {
  let questionFive = prompt('Do I still work at Cascades East Transit?').toLowerCase();

  if (questionFive ==='yes' || questionFive === 'y'){
    //console.log('Wrong answer, try again' + userName);
    alert('Wrong answer, try again ' + userName);
  } else if (questionFive === 'no' || questionFive === 'n'){
    //console.log('You are correct!' + userName + ', great job!');
    alert('You are correct! ' + userName + ', great job!');
    correctAnswerTally++;
  } else {
    //console.log('userName' + ', please answer with yes/no or y/n.');
    alert(userName + ', please answer with yes/no or y/n.');
  }
}

function q6() {
  const correctAnswer = 3;
  const attempts = 4;

  for (let i = 1; i <= attempts; i++) {
    let guess = parseInt(prompt('How many states have I lived in? (Attempt ' + i + '/' + attempts + ')'));

    if (guess === correctAnswer) {
      //console.log('Congratulations! That's correct.')
      alert('Congratulations! That\'s correct.');
      correctAnswerTally++;
      break;
    } else if (guess < correctAnswer) {
      //console.log('Too low. Try again.')
      alert('Too low. Try again.');
    } else {
      //console.log('Too high. Try again.')
      alert('Too high. Try again.');
    }

    if (i === attempts) {
      //console.log('Sorry, you've used all your attempts. The correct answer is ' + correctAnswer + ' states.')
      alert('Sorry, you\'ve used all your attempts. The correct answer is ' + correctAnswer + ' states.');
    }
  }
}

function q7() {
  const correctStates = ['Oregon', 'Kansas', 'Texas'];
  let attempts = 6;

  let correctGuess = false;

  while (attempts > 0 && !correctGuess) {
    let userGuess = prompt('Name one of the three states I\'ve lived in (' + attempts + ' attempts remaining):').toLowerCase();

    for (let i = 0; i < correctStates.length; i++) {
      if (userGuess === correctStates[i].toLowerCase()) {
        //console.log('Correct! I've lived in ' + correctStates[0] + ", " + correctStates[1] + ', and ' + correctStates[2] + '.')
        alert('Correct! I\'ve lived in ' + correctStates[0] + ', ' + correctStates[1] + ', and ' + correctStates[2] + '.');
        correctAnswerTally++;
        correctGuess = true;
        break;
      }
    }

    if (!correctGuess) {
      attempts--;
      if (attempts > 0) {
        //console.log('Incorrect. Try again.')
        alert('Incorrect. Try again.');
      } else {
        //console.log('Sorry, you've run out of attempts. The correct states are ' + correctStates[0] + ", " + correctStates[1] + ', and ' + correctStates[2] + '.')
        alert('Sorry, you\'ve run out of attempts. The correct states are ' + correctStates[0] + ', ' + correctStates[1] + ', and ' + correctStates[2] + '.');
      }
    }
  }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();

//console.log(userName + ', you got ' + correctAnswerTally + ' out of 7 questions correct!')
alert(userName + ', you got ' + correctAnswerTally + ' out of 7 questions correct!');
