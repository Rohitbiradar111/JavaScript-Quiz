let readLineSync = require("readline-sync");
let kuler = require("kuler");
let score = 0;
let userName = readLineSync.question(`Please Enter Your Name - `);
console.log(kuler(`\nHello ${userName}, Welcome to Our JavaScript Quiz

              Lets Begin the Quiz`, "#267de3"));

const database = {
  data: [
    {
      question: "Inside which HTML tag do we put the JavaScript Code?",
      options: {
        a: "<link>",
        b: "<script>",
        c: "<section>",
        d: "<header>",
      },
      correctAnswer: "b",
    },
    {
      question:
        "Which of the following is a primitive datatype in Javascript ?",
      options: {
        a: "object",
        b: "array",
        c: "string",
        d: "function",
      },
      correctAnswer: "c",
    },
    {
      question: "Which method is used to handle an event in Javascript?",
      options: {
        a: "addEventListener()",
        b: "map()",
        c: "filter()",
        d: "apply()",
      },
      correctAnswer: "a",
    },
    {
      question: "what does map() method return?",
      options: {
        a: "array",
        b: "string",
        c: "null",
        d: "true or false",
      },
      correctAnswer: "a",
    },
    {
      question: "what is the diffrence between call() and apply() method?",
      options: {
        a: "Both are same",
        b: "call() method takes comma separated arguments and apply() method takes arguments in form of an array",
        c: "call() returns an array and apply returns a function",
        d: "None of the above",
      },
      correctAnswer: "b",
    },
  ],
};

const leaderBoard = {
  data: [
    {
      name: "Jethalal",
      score : 3
    },
    {
      name: "Bhide",
      score : 1
    },
    {
      name: "Babitaji",
      score : 2
    }
  ]  
}

function correctAnswerorNot(userAnswer, correctAnswer){
  if(userAnswer === correctAnswer){
    console.log(kuler(`CORRECT ANSWER`, "#009874"));
    score++;
  }
  else
  {
    console.log(kuler(`WRONG ANSWER`, "#FF0000"));
    console.log(kuler(`The Correct Answer is - ${correctAnswer}`, "009874"));
  }
}

function showQuestionswithOptions(database) {
  for (let i = 0; i < database.data.length; i++) 
  {
    console.log(`\nQuestion${i+1} - ${database.data[i].question}`);
    for(let key in database.data[i].options)
      {
        console.log(`${key} : ${database.data[i].options[key]}`);
      }
    let userAnswer = readLineSync.question("Enter your answer by choosing either a/b/c/d - ").toLowerCase();
    correctAnswerorNot(userAnswer, database.data[i].correctAnswer);
  }
}

function highScorer(){
  leaderBoard.data.push({name: userName, score: score});
  let sortedscore = leaderBoard.data.sort((a,b) => b.score - a.score);
  console.log(kuler(`\nYour Score in the LeaderBoard - `, "#00FFFF"));
  for(let leader of sortedscore)
    {
      console.log(kuler(`${leader.name} - Score : ${leader.score}`, "#FFFF00"));
    }
}

showQuestionswithOptions(database);
console.log(kuler(`\nYour score is : ${score}`, "#FFA500"));
highScorer(leaderBoard);
