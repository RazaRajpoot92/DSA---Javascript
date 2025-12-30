
    var MyStack = function() {
        this.stack = []
    };

    /** 
    * @param {number} x
    * @return {void}
    */
    MyStack.prototype.push = function(x) {
        this.stack.push(x)
    };

    /**
    * @return {number}
    */
    MyStack.prototype.pop = function() {
        return this.stack.pop()
    };

    /**
    * @return {number}
    */
    MyStack.prototype.top = function() {
        return this.stack[this.stack.length - 1]
    };

    /**
    * @return {boolean}
    */
    MyStack.prototype.empty = function() {
        let length = this.stack.length
        return length<1
        
    };

    /** 
    * Your MyStack object will be instantiated and called as such:
    * var obj = new MyStack()
    * obj.push(x)
    * var param_2 = obj.pop()
    * var param_3 = obj.top()
    * var param_4 = obj.empty()
    */

let mystack = new MyStack();
mystack.push(2)
mystack.push(2)
console.log(mystack.pop())
console.log(mystack.pop())
console.log(mystack.top())
console.log(mystack.empty())



// Implementation of stack using one queue



    var MyStack = function() {
        this.q = []
    };

    /** 
    * @param {number} x
    * @return {void}
    */
    MyStack.prototype.push = function(x) {
        this.q.push(x)
    };

    /**
    * @return {number}
    */
    MyStack.prototype.pop = function() {
        let n  = this.q.length
        for(let i = 0; i<n-1; i++){
            this.q.push(this.q.shift())
        }
        return this.q.shift()
    };

    /**
    * @return {number}
    */
    MyStack.prototype.top = function() {
        let n = this.q.length
        
        for(let i = 0; i<n-1; i++){
            this.q.push(this.q.shift())
        }
        let lastEle = this.q[0];
        this.q.push(this.q.shift())
        

        return lastEle
    };

    /**
    * @return {boolean}
    */
    MyStack.prototype.empty = function() {
        let length = this.q.length
        return length<1
    };

    /** 
    * Your MyStack object will be instantiated and called as such:
    * var obj = new MyStack()
    * obj.push(x)
    * var param_2 = obj.pop()
    * var param_3 = obj.top()
    * var param_4 = obj.empty()
    */

