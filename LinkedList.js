// Linked list is non-contegous data structure
// each element in linkedlist is represent with Node
// Node contains => value and next pointer
// There are two types of Linkedlist
// 1) Singly Linkedlist => has pointer to the next
// 2) Doubly Linkedlist => has two pointer, one for next and one for previous

function LinkedList(){
    this.head = null;
    this.size = 0;
    this.tail = null;

}


function InsertNode(val){
    this.node = Node(val);
    this.head = this.node;
    this.size += 1;
}


function Node(val){
    this.val = val;
    this.next = null;
}

let node1 = new Node(4)
console.log(node1)