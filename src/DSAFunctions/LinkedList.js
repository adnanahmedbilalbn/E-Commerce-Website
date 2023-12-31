class Node {
  constructor(data) {
    this.data = data    // self.data
    this.next = null;   // self.pointer
  }
}

class LinkedList {
  constructor() {        // (head point towards the node)
    this.head = null;   // self.head is Null (means node is empty)
  }             

  addToEnd(data) {
    const newNode = new Node(data);     // create new node
    if (!this.head) {         // head == Null
      this.head = newNode;    // self.head = newNode
    } else {                  // head != Null
      let current = this.head;    // store value of head in current var
      while (current.next) {      //  head == Null
        current = current.next;   // move the head into next pointer and store it value in current var)
      }
      current.next = newNode;     // add new node on last head
    }
  }

  printList() {
    let current = this.head;        // store head value on current var
    while (current) {               // head !== null
      console.log(current.data);    // print head data
      current = current.next;       // move the head of node into next pointer and store it value in current var
    }
  }
  isEmpty() {
    return this.head === null;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    return result;
  }
  deleteItem(item) {
    let current = this.head;
    let prev = null;
    // If the node to be deleted is the head
    if (current && current.data === item) {
      this.head = current.next;
      return;
    }
    // Find the node to be deleted and keep track of the previous node
    while (current && current.data !== item) {
      prev = current;
      current = current.next;
    }
    // If the item is found in the middle or end of the list
    if (current === null) {
      return; // Item not found
    }
    // Unlink the node from the list
    prev.next = current.next;
  }
  countNodes() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

function createLinkedList () {
  return new LinkedList();
};

export default createLinkedList;
