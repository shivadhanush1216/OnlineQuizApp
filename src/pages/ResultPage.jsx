import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const navigate = useNavigate();

  const score = useSelector((state) => state.quiz.score);
  const total = useSelector((state) => state.quiz.totalQuestions) || 0;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Quiz Completed!</h1>
      <p className="text-xl mt-4">
        Your Score: {score} / {total > 0 ? total : "N/A"}
      </p>

      <button
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/quiz")}
      >
        Try Again
      </button>

      <button
        className="mt-3 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/answers")}
      >
        Show Answers
      </button>

      <button
        className="mt-3 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => navigate("/takequiz")}
      >
        Back to Home
      </button>
    </div>
  );
}
