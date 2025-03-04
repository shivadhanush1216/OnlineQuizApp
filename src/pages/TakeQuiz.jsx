import React from "react";
import { useNavigate } from "react-router-dom";

export default function TakeQuiz({ setUser }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setUser(true);
    navigate("/takequiz");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-3xl">Welcome to Online Quiz</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => navigate("/quiz")}
      >
        Take Quiz
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        onClick={() => navigate("/practice")}
      >
        Practice Mode
      </button>
    </div>
  );
}
