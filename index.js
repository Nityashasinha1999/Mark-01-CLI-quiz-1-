var readlineSync = require('readline-sync')
var username = readlineSync.question('What is your name? ')
console.log('Welcome ' + username)
var score = 0;
var QuestionOne = 'Hey, what is your age?'
var AnswerOne = 23

var userAge = readlineSync.question(QuestionOne)

console.log(userAge)
if (parseInt(userAge) === AnswerOne) {
  console.log('You are right')
  score = score + 1
  console.log("Score is " + score)

} else {
  console.log('You are wrong')
  score = score - 1
  console.log("Score is " + score)
}

var QuestionTwo = 'Do you live in Bokaro?'
var AnswerTwo = 'No'

var userLocation = readlineSync.question(QuestionTwo)

if (userLocation === AnswerTwo) {
  console.log('You are right')
  score = score + 1
  console.log("Score is " + score)

} else {
  console.log('You are wrong')
  score = score - 1
  console.log("Score is " + score)
}
var QuestionThree = 'Are you a frontend developer?'
var AnswerThree = 'Yes'

var userInfo = readlineSync.question(QuestionThree)

if (userInfo === AnswerThree) {
  console.log('You are right')
  score = score + 1
  console.log("Score is " + score)

} else {
  console.log('You are wrong')
  score = score - 1
  console.log("Score is " + score)
}
var QuestionFour = 'Do you like Maggi?'
var AnswerFour = 'Yes'

var userLike = readlineSync.question(QuestionFour)

if (userLike === AnswerFour) {
  console.log('You are right')
  score = score + 1
  console.log("Score is " + score)

} else {
  console.log('You are wrong')
  score = score - 1
  console.log("Score is " + score)
}
var QuestionFive = 'Do you like React?'
var AnswerFive = 'Yes'

var userReact = readlineSync.question(QuestionFive)

if (userReact === AnswerFive) {
  console.log('You are right')
  score = score + 1
  console.log("Score is " + score)

} else {
  console.log('You are wrong')
  score = score - 1
  console.log("Score is " + score)
}