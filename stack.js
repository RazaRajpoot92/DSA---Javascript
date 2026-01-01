
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

// let mystack = new MyStack();
// mystack.push(2)
// mystack.push(2)
// console.log(mystack.pop())
// console.log(mystack.pop())
// console.log(mystack.top())
// console.log(mystack.empty())



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



var MyQueue = function() {
    this.s = []
    this.s2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.s.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    if(this.s2.length === 0){
        while(this.s.length){
            this.s2.push(this.s.pop())
        }
    }

    return this.s2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(this.s2.length===0){
        while(this.s.length){
            this.s2.push(this.s.pop())
        }
    }

    return this.s2[this.s2.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {

    return this.s.length==0 && this.s2.length==0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let map = {
        "(":")",
        "{":"}",
        "[":"]"
    }

    for(let i = 0; i<s.length; i++){
        if(map[s[i]]){
            stack.push(s[i])
        }else{
            let top = stack.pop()
           if( !top || map[top] !== s[i] ){
            return false
           }
        }
    }
    
    return stack.length == 0
};

// let s = "([]{}){"
// console.log(isValid(s))


var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let ele = this.stack[this.stack.length-1]
  
    if(!ele){
        
        let element = {
            val: val,
            min: val
        }
        this.stack.push(element)

    }else{
        let min = val
        let element = {}

        if(min<ele.min){
            element.val = val,
            element.min = min
        }else{
            element.val = val,
            element.min = ele.min
        }

        this.stack.push(element)
    }
    
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   let element = this.stack.pop()
   return element.val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
   let element = this.stack[this.stack.length - 1];
    return element && element.val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let  element = this.stack[this.stack.length - 1]
    
    return element && element.min
};


var obj = new MinStack()

// obj.push(-2)
// obj.push(0)
// obj.push(-3)
// console.log(obj)
// console.log(obj.getMin())
// obj.pop()
// console.log(obj.top())
// console.log(obj.getMin())


//

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let level = 0
    let result = ""
    for(let i=0; i<s.length; i++){
        if(s[i]=="("){
            level++
            result += level>1?s[i]:""
            
        }else{
            result += level>1?s[i]:""
            level--
        }       
    }

  return  result
};

let digits = [1,9]

let n = digits.length - 1
let carry = 0;
let sum = 0;

for(let i = n; i>=0; i--){
    sum = digits[i] + 1

    if(sum>9){
        carry = 1;
        digits[i] = 0;
    }else{ 
        digits[i] = sum;
        carry = 0;

    }
}

if(carry==1){
    digits.unshift(1)
}

console.log(digits)