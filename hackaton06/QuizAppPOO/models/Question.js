export class Question {
    /**
     * @param {string} text - The question text.
     * @param {Array<string>} choices - The possible answer choices.
     * @param {string} answer - The correct answer.
     * */
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * @param {string} choice - The choice selected.
     * @result {boolean} - Returns true if the choice is correct, false otherwise.
     * */

    correctAnswer(choice) {
        return choice === this.answer;
    }
}