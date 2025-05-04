import { Question } from "./Question.js";

export class Quizz {
    score = 0;
    questionIndex = 0;

    /**
     *
     * @param {Question[]} questions
    */
    constructor(questions) {
        this.questions = questions;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }

    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

}