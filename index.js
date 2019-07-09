// Created by Andre and Adam
// 6/26/2019

const readlineSync = require('readline-sync');

const words = [
  'javascript',
  'code',
  'talentpath',
  'puppy',
  'react',
  'computer',
];

function gameStart() {
  const word = words[Math.floor(Math.random() * words.length)];
  //   console.log(word);
  const nameSplit = word.split('');
  // eslint-disable-next-line prefer-const
  const space = [];
  for (let i = 0; i < nameSplit.length; i++) {
    // eslint-disable-next-line prefer-template
    space.push('_');
  }
  // space.join();

  console.log(space.join(' '));

  //   console.log(word);

  const inputUser = readlineSync.question('Please guess a letter ');
  //   console.log(inputUser);
  const wrongNum = 5;

  if (word.includes(inputUser)) {
    console.log('You got it right');

    const newSpace = [];
    for (let i = 0; i < nameSplit.length; i++) {
      if (nameSplit[i] === inputUser) {
        newSpace.push(nameSplit[i]);
      } else {
        // eslint-disable-next-line prefer-template
        newSpace.push('_');
      }
    }
    console.log(newSpace.join(' '));
  } else {
    console.log('WRONG!');
    const newWrongNum = wrongNum - 1;
    console.log(`You have ${newWrongNum} guess(es) left`);
  }
}

function checkInput() {}

function correctGuess() {}

function incorrectGuess() {}

gameStart();
