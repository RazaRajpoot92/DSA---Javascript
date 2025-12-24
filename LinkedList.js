// Linked list is non-contegous data structure
// each element in linkedlist is represent with Node
// Node contains => value and next pointer
// There are two types of Linkedlist
// 1) Singly Linkedlist => has pointer to the next
// 2) Doubly Linkedlist => has two pointer, one for next and one for previous


function Node(val){
    this.val = val;
    this.next = null;

}

var MyLinkedList = function() {
    this.head = null;
    this.size = 0;

};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    
    if(index < 0 || index >= this.size) return -1;

    if(index==0){
        return this.head.val
    }else{
        let curr = this.head;

        for(let i=0; i<index; i++){
            curr = curr.next
        }
        return curr.val;
    }
    
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val)
    newNode.next = this.head;
    this.head = newNode;
    this.size++;

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if(this.head == null){
        this.head = newNode;
    }else{
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        curr.next = newNode;
    }
    
    this.size++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    if(index>this.size) return;

    let newNode = new Node(val)
    
    if(index ===0){
        this.addAtHead(val);
        return
    }else if(index === this.size){
        this.addAtTail(val);
        return
    }else{
        let curr = this.head;
        for(let i = 0; i < index-1; i++){
            curr = curr.next;
        }
        newNode.next = curr.next;
        curr.next = newNode;
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index< 0 || index >= this.size) return;
    
    if(index == 0){
        this.head = this.head.next;
    }else{
        let curr = this.head;
        for(let i = 0; i<index-1; i++){
            curr = curr.next;
        };
        curr.next = curr.next.next;
    }

    this.size--;


};


let obj = new MyLinkedList();

//console.log(obj)
obj.addAtHead(1)
obj.addAtTail(3)
obj.addAtIndex(1,2)
//console.log(obj)
//console.log(obj.get(1))


// check if linked-list has cycle

// better approch is slow and fast pointer or
// Floyd's cycle finding algorithm
// if two runner are running in circular path and one is slow and one is fast
// then it definately meet at same point in cycle.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

   if(!head) return false;
   
   let slow = head;
   let fast = head.next;

   while(slow!==fast){
    if(fast==null || fast.next===null) return false;
    slow = slow.next;
    fast = fast.next.next;
   }

   return true;
   
};


// check array is palidrome

let arr = [1,2,2,1]

function isPalidrome(arr){

    let s = 0;
    let e = arr.length - 1;

    while(s!==e && s<e){
        console.log(s, e)
        if(arr[s]!==arr[e]){
            return false;
        }
        s++;
        e--;
    }

    return true
}

//console.log(isPalidrome(arr))


let testSet = new Set()

testSet.add(1)
testSet.add(2)
testSet.add(3)
testSet.add(4)

console.log(testSet)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let res = result;
    let carry = 0;

    while(carry || l1 || l2){
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val:0) + carry;
        carry = Math.floor(sum/10)
        let digit = sum%10;

        let newNode = new ListNode(digit);
        result.next = newNode;
        result = newNode;

        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }

    return res.next;
};


// Merge two sorted list



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    resultNode = new ListNode();
    resultHead = resultNode;
    l1 = list1;
    l2 = list2;

    while(l1 || l2){
        if(l1 && l2){
            if(l1.val<l2.val){
                resultNode.next = l1;
                resultNode = l1
                l1 = l1.next;
            }else{
                resultNode.next = l2
                resultNode = l2
                l2 = l2.next
            }
        } else if(l1 === null){
            resultNode.next = l2;
            resultNode = l2
            l2 = l2.next
        }else{
            resultNode.next = l1
            resultNode = l1;
            l1 = l1.next;
        }
    }

    return resultHead.next;
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    // find the lenght

    let length = 0;
    let curr = head
    while(curr){
        curr = curr.next;
        length++
    }

    k = k%length;

    let s = head;
    let f = head;

    for(let i = 0; i<k; i++){
        f = f.next;
    }

    while(f.next){
        s = s.next;
        f = f.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;

    return newHead;
    
};


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let sentinel = new ListNode();
    sentinel.next = head;

    p = sentinel;
    c = head;
    n = head.next;

    while(c && n){
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next
    }

    return sentinel.next;
};

/// recursive solution

var swapPairs = function(head) {
    if(!head || !head.next) return head;

   let l = head;
   let r = head.next;

    
    l.next = swapPairs(r.next)
    r.next = l;

    return r
    
};


let test = "LLLLRRRR";
let r = 0;
let l = 0;
let s = 0;
let res = []

for(let i = 0; i<test.length; i++){
    if(test[i]=="R"){
        r++;
    }
    if(test[i]=="L"){
        l++
    }

    if(r==l){
        res.push(test.slice(s,i+1))
        s=i+1
        r=0;
        l=0;
    }
}

console.log(res)