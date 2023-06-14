document.addEventListener("DOMContentLoaded", function() {
    runQuiz();
  });
  

function runQuiz() {

    const quiz = [
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "1. Can you guess my age?",
        choices: ["20 to 30", "30 to 40", "40 to 50", "100 to 500"],
        answer: 2
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "2. Where I am from?",
        choices: ["Antarctic", "Russia", "South Africa", "Lithuania"],
        answer: 3
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "3. For how long I am living in UK?",
        choices: ["1 year", "3 years", "5 years", "over 10 years"],
        answer: 3
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "4. Who is my favorite business man?",
        choices: ["Elon Musk", "Bill Gates", "Joe Biden", "Jeff Bezos"],
        answer: 0
      },
      {
        title: "About Me Quiz",
        description: "This quiz will test your knowledge about me.",
        question: "5. What is my lucky number?",
        choices: ["10", "7", "0.2", "33"],
        answer: 1
      }
    ];
    
    
      let score = 0;
    
      window.onload = function() {
        alert("Welcome to my website! Please take this quiz to learn more about me.");
    }
        
        for (let i = 0; i < quiz.length; i++) {
          const question = quiz[i].question;
          alert(question);
    
          for (let j = 1; j < quiz[i].choices.length; j++) {
            alert(quiz[i].choices[j]);
          }
    
          let userAnswer = prompt("What is your answer?");

          let userAnswerNumber = parseInt(userAnswer) - 1;
          console.log(userAnswerNumber);
          if (userAnswerNumber === question.answer) {
            score++;
          } else {
            alert("Incorrect!");
          }
        }


    
        alert("Your total score is: " + score);
      };
    
    
  