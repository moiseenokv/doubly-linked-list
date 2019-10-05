const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(!this._head){
            this._head = node;
            this._tail = node;
        }else{
            let tmp = this._tail;
            this._tail = node;
            node.prev = tmp;
            tmp.next = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if(index>-1){
            let current = this._head;
            let i= 0;

            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;          
            }
            return current.data;
        }
     
    }

    insertAt(index, data) {
        if (index < 0 || this.length <= index) {
            return false;
          }
          let node = new Node(data);

          if (index === 0) {
            node.next = this._head;
            this._head.prev = node;
            this._head = node;
          } else if (index === this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
          } else {
            let current = this._head;
            let prev = null;
            let pos = 0;
    
            while (pos < index) {
              prev = current;
              current = current.next;
              pos++;
            }
    
            prev.next = node;
            node.prev = prev;
    
            node.next = current;
            current.prev = node;
          }
          this.length++;
          return this;
    }

    isEmpty() {
        return this.length === 0;
    }

   deleteAt(index) {
        if (index < 0 || index > this.length ) {
            return this;
          }
        let current;
        if(index===0){
          if(this.length==1){
            this._head=null;
            this._tail=null;
          }else{
            current = this._head;
            this._head = this._head.next;
            this._head.next = null;
          }
        }else if(index === this.length - 1){
            current = this._tail;
            this._tail = this._tail.prev;
            this._tail.prev = null;
        }else{
            current = this._head;
            let prev = null;
            let position = 0;

            while (position < index) {
                prev = current;
                current = current.next;
                position++;
            }
    
            prev.next = current.next;
            current.next.prev = prev;
        }
        this.length--;
 
        return this;
    }

    clear() {
      if(this._head==null || this._tail==null){
        return this;
      }
     this._head.next=null;
     this._head.prev=null;
     this._head.data=null;

     this._tail.next=null;
     this._tail.prev=null;
     this._tail.data=null;
     
     this.length = 0;
     return this;
    }

    reverse() {
        let current = this._head;
        this._tail=current;

        while (current !== null) {
            let prev = current.prev;
            current.prev = current.next;
            current.next = prev;
      
            if (current.prev) {
              current = current.prev;
            } else {
              this._head = current;
              break;
            }
        }

        return this;
    }

    indexOf(data) {
        let current = this._head;
      let index = 0;

      while (current) {
        if (current.data === data) {
          return index;
        }

        current = current.next;
        index++;
      }

      return -1;
    }
}

module.exports = LinkedList;
