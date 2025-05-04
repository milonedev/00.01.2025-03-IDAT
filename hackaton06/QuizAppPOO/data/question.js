import { Question } from "../models/Question.js";
import { data } from "../data/quizz.js";

export const questions = data.map((item) => {
    return new Question(
        item.question,
        item.choices,
        item.answer
    );
})