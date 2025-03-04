import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetQuiz } from "../redux/quizSlice";

export default function ShowAnswers() {
  const answers = useSelector((state) => state.quiz.answers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Your Answers</h2>

        {answers && answers.length > 0 ? (
          <ul className="space-y-4">
            {answers.map((ans, index) => (
              <li
                key={index}
                className={`p-4 rounded-lg border-2 ${
                  ans.isCorrect ? "border-green-500" : "border-red-500"
                }`}
              >
                <p className="font-semibold">
                  {index + 1}. {ans.question}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Your Answer:</span>{" "}
                  {ans.selected}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Correct Answer:</span>{" "}
                  {ans.correct}
                </p>
                <p
                  className={`font-bold ${
                    ans.isCorrect ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {ans.isCorrect ? "✅ Correct" : "❌ Incorrect"}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No answers recorded.</p>
        )}

        <div className="flex justify-center mt-6 space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/quiz")}
          >
            Try Again
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              dispatch(resetQuiz());
              navigate("/takequiz");
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
