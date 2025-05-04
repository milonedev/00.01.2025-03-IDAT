export class History {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    addEntry(entry) {
        const li = document.createElement('li');
        li.textContent = entry;
        this.container.appendChild(li);
    }

    clearHistory() {
        this.container.innerHTML = '';

    }
}