class MyStack {
    constructor() {
        /** @type {number[]} */
        this.queue = [];
    }

    /**
     * @param {number} x
     * @returns {void}
     */
    push(x) {
        this.queue[this.queue.length] = x;
    }

    /**
     * @returns {number}
     */
    pop() {
        return this.queue.splice(this.queue.length - 1, 1)[0];
    }

    /**
     * @returns {number}
     */
    top() {
        return this.queue[this.queue.length - 1];
    }

    /**
     * @returns {boolean}
     */
    empty() {
        return this.queue.length === 0;
    }
}


// -----------------------
const myStack = new MyStack();
myStack.push(1);
myStack.push(2);
console.log(myStack.top(1));
console.log(myStack.pop(2));
console.log(myStack.empty()); 