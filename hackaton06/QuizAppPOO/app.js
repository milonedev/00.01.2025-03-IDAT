import { Quizz } from "./models/Quizz.js";
import { UI } from "./models/Ui.js";
import { questions } from "./data/question.js";


const renderPage = (quizz, ui) => {

    if(quizz.isEnded()) {
        ui.showScore(quizz.score, quizz.questions.length);
    } else {
        console.log(quizz.getQuestionIndex());

        ui.showQuestion(quizz.getQuestionIndex().text);
        ui.showChoices(quizz.getQuestionIndex().choices, (answer) => {
            quizz.guess(answer);
            renderPage(quizz, ui);
        });

        ui.showProgress(quizz.questionIndex + 1, quizz.questions.length);

    }
}

function main() {
    const quizz = new Quizz(questions);
    const ui = new UI();

    renderPage(quizz, ui);
}

main()