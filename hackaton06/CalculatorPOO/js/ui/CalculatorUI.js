import { Calculator } from "../modelo/Calculator.js";
import { History } from "../utils/history.js";

export class CalculatorUI {
    constructor(displayId, historyId) {
        this.calculator = new Calculator();
        this.history = new History(historyId);
        this.display = document.getElementById(displayId);
        this.initButtons();
    }

    initButtons() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.textContent;

                if(btn.classList.contains('op')) {
                    console.log(val);
                    this.calculator.chooseOperation(val)
                } else if (btn.classList.contains('equals')) {
                    console.log('equals');
                    this.calculator.compute();
                    this.history.addEntry(this.calculator.getLastOperation());
                } else {
                    this.calculator.appendNumber(val);
                }

                this.updateDisplay();
            });
        });

        document.getElementById('clear').addEventListener('click', () => {
            this.calculator.clear();
            this.updateDisplay();
        });
    }

    updateDisplay() {
        this.display.value = this.calculator.getDisplay();
    }
}