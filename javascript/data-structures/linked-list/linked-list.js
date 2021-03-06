class Node {
    constructor(element){
        this.element = element;
        this.next = null;
        this.previous = null;

    }

class LinkedList {
    constructor(){
        this.head = null; //root node
        this.tail = null; //last element of the list
        this.size=0; //initial size
    }
}
    
    //Insert first node (head). Adds element to start of list (unshift) [O(1)]
    addHead(val){
        const newNode = new Node(val);
        newNode.next = this.head;
        if (this.head){
            this.head.previous = newNode;
        } 
        else {
            this.tail = newNode;
        }
        this.head = newNode; //updates Head
        this.size++;
        return newNode;
    }
    
    
    //Insert last node (tail). Adds element to end of list (push) [O(1)]
    addTail(tail){
        const newNode = new Node(value);

        if(this.head) {
            newNode.previous = this.tail;
        }

        this.tail.next = newNode;
        this.tail = newNode;
        
        else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.size++;
        return newNode;
    }
    
    
    
    //Insert at index
    
    
    
    
    //Remove at index
}

//The aim when removing a node will be to disconnect it
//from the other nodes, or pointers
//once there are no more pointers, the node will disappear