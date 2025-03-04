import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  score: 0,
  totalQuestions: 0,
  answers: [], // ✅ Store user's answers
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    setTotalQuestions: (state, action) => {
      state.totalQuestions = action.payload;
    },
    addAnswer: (state, action) => {
      state.answers.push(action.payload); // ✅ Add user's answer
    },
    resetQuiz: (state) => {
      state.score = 0;
      state.answers = []; // ✅ Reset answers
    },
  },
});

export const { incrementScore, setTotalQuestions, addAnswer, resetQuiz } =
  quizSlice.actions;
export default quizSlice.reducer;
