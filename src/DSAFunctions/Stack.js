class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.top = null;
      this.size = 0;
    }
  
    push(data) {
      const newNode = new Node(data);
      newNode.next = this.top;
      this.top = newNode;
      this.size++;
    }
  
    pop() {
      if (!this.top) {
        return null; // Stack is empty
      }
  
      const poppedData = this.top.data;
      this.top = this.top.next;
      this.size--;
      return poppedData;
    }
  
    peek() {
      return this.top ? this.top.data : null;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    print() {
      let current = this.top;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }
  
  // Example usage:
  const stack = new Stack();
  
  stack.push(1);
  stack.push(2);
  stack.push(3);
  
  console.log("Top of the stack:", stack.peek()); // Output: 3
  
  stack.pop();
  
  console.log("After pop, top of the stack:", stack.peek()); // Output: 2
  
  console.log("Is the stack empty?", stack.isEmpty()); // Output: false
  
  stack.print();
  /*
  Output:
  2
  1
  */
  