class Stack {
  constructor() {
    this.stackArray = [];
    this.size = 0;
  }

  push(data) {
    this.stackArray.push(data);
    this.size++;
    console.log("New stack data pushed:", data);
  }

  pop() {
    if (this.isEmpty()) {
      return null; // Stack is empty
    }

    const poppedData = this.stackArray.pop();
    this.size--;
    return poppedData;
  }

  peek() {
    return this.isEmpty() ? null : this.stackArray[this.stackArray.length - 1];
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    for (let i = this.size - 1; i >= 0; i--) {
      console.log(this.stackArray[i]);
    }
  }
}

function createStack() {
  return new Stack();
}

export default createStack;
