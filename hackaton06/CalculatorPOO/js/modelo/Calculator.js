export class Calculator {
  constructor() {
    this.currrent = '';
    this.previous = '';
    this.operator = null;
    this.result = '';
  }

  appendNumber(number) {
    if (number === '.' && this.currrent.includes('.')) return;
    this.currrent = this.currrent.toString() + number.toString();
  }

  chooseOperation(operator) {
    if (this.currrent === '') return;
    if (this.previous !== '') {
      this.compute();
    }
    this.operator = operator;
    this.previous = this.currrent;
    this.currrent = '';
  }

  compute() {
    const prev = parseFloat(this.previous);
    const current = parseFloat(this.currrent);
   
    if (isNaN(prev) || isNaN(current)) return;
    
    let result;

    switch (this.operator) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = current !== 0 ? prev / current : 'Error';
        break;
      default:
        return;
    }

    this.result = result;
    this.currrent = result.toString();
    this.previous = `${prev} ${this.operator} ${current}`;
    this.operator = null;
  }

  clear() {
    this.currrent = '';
    this.previous = '';
    this.operator = null;
    this.result = '';
  }

  getDisplay() {
    return this.currrent.toString();
  }

  getLastOperation() {
    return `${this.previous} = ${this.result}`;
  }
}

