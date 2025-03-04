import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question:
      "Which programming language is primarily used for developing Android apps?",
    options: ["Java", "Python", "Swift", "C#"],
    answer: "Java",
  },
  {
    question: "Which of the following is NOT a programming language?",
    options: ["Python", "Ruby", "HTML", "Swift"],
    answer: "HTML",
  },
  {
    question: "Which company developed the Java programming language?",
    options: ["Microsoft", "Sun Microsystems", "Apple", "Google"],
    answer: "Sun Microsystems",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style System",
      "Cascading Style Sheets",
      "Computer Style Sheet",
      "Colorful Style System",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    answer: "//",
  },
  {
    question:
      "Which data structure follows the Last In, First Out (LIFO) principle?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What is the default port number for HTTP?",
    options: ["80", "443", "22", "21"],
    answer: "80",
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Flask"],
    answer: "React",
  },
  {
    question: "Which command is used to initialize a Git repository?",
    options: ["git commit", "git clone", "git init", "git push"],
    answer: "git init",
  },
];

export default function PracticePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowAnswer(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/takequiz");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-5">
      <h1 className="text-3xl font-bold">Practice Mode</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">
          {questions[currentQuestion].question}
        </h2>

        <div className="space-y-2">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-2 rounded-lg border-2 ${
                selectedOption === option
                  ? "bg-blue-500 text-white border-blue-700"
                  : "bg-white text-black border-gray-300"
              } transition`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedOption && (
          <button
            className="mt-4 w-full p-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition"
            onClick={() => setShowAnswer(true)}
          >
            Show Answer
          </button>
        )}

        {showAnswer && (
          <p className="mt-4 text-lg font-semibold">
            Correct Answer:{" "}
            <span className="text-green-500">
              {questions[currentQuestion].answer}
            </span>
          </p>
        )}

        <button
          className="mt-4 w-full p-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
          onClick={handleNextQuestion}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Practice"
            : "Next Question"}
        </button>
      </div>
    </div>
  );
}
