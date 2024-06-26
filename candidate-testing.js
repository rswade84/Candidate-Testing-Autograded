const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';

//TODO: Variables for Part 2
// Stores All Questions & Answers, its an ARRAY of STRINGS.
let questions = [
  'Who was the first American woman in space? ',
  'True or false: 5 kilometer == 5000 meters? ',
  '(5 + 3)/2 * 10 = ? ',
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  'What is the minimum crew size for the ISS? ',
];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];

// This Stores candidateAnswers and will be initialized later
let candidateAnswers;

// This Askes Candidate's name
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Enter your name:');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
}

// This functions Grades the Quiz
function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let correctCount = 0;

  // This loops through each question.
  for (let i = 0; i < questions.length; i++) {
    // Compares Questions to Answers, converts to lower caser prior.
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      correctCount++;
    }
    // Shows each questions, answer, and correct answer
    console.log(`Question ${i + 1}: ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}\n`);
  }
  // Calulates the grade into a percentage
  let grade = (correctCount / questions.length) * 100;

  // This shows Overall Grade
  console.log(
    `Overall Grade: ${grade}% (${correctCount} of ${questions.length} responses correct)`,
  );

  // Decides if user passes or fails.
  if (grade >= 80) {
    console.log(`Your Results: PASSED!`);
  } else {
    console.log(`Your Resultss: FAILED`);
  }

  return grade;
}

// This function runs the program

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram,
};
