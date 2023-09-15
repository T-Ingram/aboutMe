'use strict';

let userName = prompt ("Before we get started please tell me your name?");
//console.log (userName);
alert("Hello " + userName + ", let's get started.");
//console.log ("Before we get started please tell me your name? Hello " + userName + ", let's get started.")



let questionOne = prompt('Is my name Trevor Ingram?').toLowerCase();

if (questionOne ==='yes' || questionOne === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if (questionOne === 'no' || questionOne === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionTwo = prompt('Did I grow up in Oregon?').toLowerCase();

if (questionTwo ==='yes' || questionTwo === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if (questionTwo === 'no' || questionTwo === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionThree = prompt('Did I ever live in Florida?').toLowerCase();

if (questionThree ==='yes' || questionThree === 'y'){
  //console.log('Wrong answer, try again.');
  alert('Wrong answer, try again.');
} else if (questionThree === 'no' || questionThree === 'n'){
    //console.log('You are correct!');
    alert('You are correct!');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionFour = prompt('Did I attend college?').toLowerCase();

if (questionFour ==='yes' || questionFour === 'y'){
  //console.log('You are correct!');
  alert('You are correct!');
} else if (questionFour === 'no' || questionFour === 'n'){
    //console.log('Wrong answer, try again.');
    alert('Wrong answer, try again.');
} else {
    //console.log('Please answer with yes/no or y/n.');
    alert('Please answer with yes/no or y/n.');
}

let questionFive = prompt('Do I still work at Cascades East Transit?').toLowerCase();

if (questionFive ==='yes' || questionFive === 'y'){
  //console.log('Wrong answer, try again' + userName);
  alert('Wrong answer, try again ' + userName);
} else if (questionFive === 'no' || questionFive === 'n'){
    //console.log('You are correct!' + userName + ', great job!');
    alert('You are correct! ' + userName + ', great job!');
} else {
    //console.log('userName' + ', please answer with yes/no or y/n.');
    alert(userName + ', please answer with yes/no or y/n.');
}
