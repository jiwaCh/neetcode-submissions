class MinStack {


    constructor() {
        this.minStack = []
        this.stack = []
        return null
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val)
        if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length-1]){
            this.minStack.push(val)
        }
        return null
    }

    /**
     * @return {void}
     */
    pop() {
        const popped = this.stack.pop()
        if(this.minStack.length > 0 && this.minStack[this.minStack.length-1] === popped){
            this.minStack.pop()
        }
        return null
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length-1 >= 0 ? this.stack[this.stack.length-1] : null
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.length > 0  ? this.minStack[this.minStack.length-1] : null
    }
}
