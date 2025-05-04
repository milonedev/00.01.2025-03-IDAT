export class UI {
    constructor() {}

    showQuestion(text) {
        const questionTitle = document.getElementById("question");
        questionTitle.innerHTML = text;
    }

    showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = "";

        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement("button");
            button.innerHTML = choices[i];
            button.className = "btn";
            button.style.margin = "10px 0";
            button.onclick = () => callback(choices[i]);
            choicesContainer.appendChild(button);
        }
    }

    showProgress(currentIndex, total) {
        const element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`;
    }

    showScore(score, total) {
        const element = document.getElementById("quiz");
        element.innerHTML = `
            <h1>Result:</h1>
            <h2>Your score is ${score} out of ${total}</h2>
        `;
    }

}