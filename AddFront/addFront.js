class SLL {
    constructor(){
        this.head = null;
    }

    addFront(value) {
        var node = node(value);
        if (this.head == null){
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this.head;
    }

    removeFront(){
        if(this.head = null){
            return null;
        }else if(this.head.next == null){
            this.head = null;
            return null;
        } else {
            var runner = this.head.next;
            this.head = null;
            this.head = runner;
            return this.head;
        }
    }

    front(){
        if(this.head = null){
            return null;
        } else {
            return this.head.data;
        }
    }
}

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

