import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementScore,
  setTotalQuestions,
  addAnswer,
} from "../redux/quizSlice";

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

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();
  const userScore = useSelector((state) => state.quiz.score);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setTotalQuestions(questions.length));
  }, [dispatch]);

  const handleAnswer = () => {
    const currentQ = questions[currentQuestion];

    dispatch(
      addAnswer({
        question: currentQ.question,
        selected: selectedOption,
        correct: currentQ.answer,
        isCorrect: selectedOption === currentQ.answer,
      })
    );

    if (selectedOption === currentQ.answer) {
      dispatch(incrementScore());
    }

    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      navigate("/result");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
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

        <button
          className={`mt-4 w-full p-2 rounded-lg ${
            selectedOption
              ? "bg-green-500 text-white hover:bg-green-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          } transition`}
          onClick={handleAnswer}
          disabled={!selectedOption}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>
        <br />
        <br />
        <Timer
          time={20}
          onTimeUp={handleNextQuestion}
          questionIndex={currentQuestion}
        />
      </div>
    </div>
  );
}
