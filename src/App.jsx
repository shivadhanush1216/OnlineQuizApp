import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";
import PracticePage from "./pages/PracticePage";
import ShowAnswers from "./pages/ShowAnswers.jsx";
import TakeQuiz from "./pages/TakeQuiz.jsx";
import Navbar from "./components/Navbar.jsx";

export default function App() {
  const [user, setUser] = useState(() => localStorage.getItem("user") || "");

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<LoginPage setUser={setUser} />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/takequiz" element={<TakeQuiz />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/answers" element={<ShowAnswers />} />
      </Routes>
    </Router>
  );
}
