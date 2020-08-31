// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert a node at the head
  insertFirst(data) {
    // creating a new node at head with the data and assigning the existing head as 'next'.
    this.head = new Node(data, this.head);
  }

  // return the size of the list
  size() {
    let counter = 0;
    let node = this.head;

    // if there's a head or if there's a node after assigning the next node, it enters the loop
    while (node) {
      // increasing the counter on finding a node
      counter++;
      //assigning the next node as the node
      node = node.next;
    }

    return counter;
  }

  // returns the first node of the linked list
  getFirst() {
    // head is the first node of the linked list
    return this.head;
  }

  // returns the last node of the linked list
  getLast() {
    let node = this.head;

    // if the head does not exist, return null (the list is empty)
    if (!this.head) {
      return null;
    }

    // if there's a head or if there's a node after assigning the next node, it enters the loop
    while (node) {
      // if the next reference is null, we are on the last node
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  // clear the linked list
  clear() {
    // the linked list exists through the head
    this.head = null;
  }

  // the head element is the first element of the list
  removeFirst() {
    // handles an empty list
    if (!this.head) {
      return;
    }
    // in reality, we have to point the head to the second element of the list
    this.head = this.head.next;
  }

  // remove the last element of the list
  removeLast() {
    // handles an empty list
    if (!this.head) {
      return;
    }

    // if the head is the only node in the list
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    //once the node.next is null, it will jump out of the while loop and we can point the previous node as null
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  // insert at the end of the list
  insertLast(data) {
    // get the last node, reuse the getLast function
    const lastNode = this.getLast();

    if (lastNode) {
      // assigning the next as the new node with data
      lastNode.next = new Node(data);
    }
    //if the list is empty
    else {
      this.head = new Node(data);
    }
  }

  // get a node at a particular index
  getAt(index) {
    // initialising the node and the counter
    let counter = 0;
    let node = this.head;
    // if the head exists or the node exists upon reassigning, it enters the loop
    while (node) {
      // return the node if the counter and the index match
      if (counter === index) {
        return node;
      }
      // increase the counter and assign the next node to the current value of the node
      counter++;
      node = node.next;
    }
    // return null if the node does not exist on the provided index
    return null;
  }

  // remove a node at the current index
  removeAt(index) {
    // handles an empty list
    if (!this.head) {
      return;
    }

    // to remove the first node
    if (index === 0) {
      this.head = this.head.next;
    }

    // get the previous node and point its next to the next of the current node
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  // insert a node at a particular index
  insertAt(data, index) {

    // handles an empty list
      if(!this.head) {
          this.head = new Node(data);
          return;
      }

      // inserting at the first element
      if(index===0) {
          this.head = new Node(data, this.head);
          return;
      }

      // get the previous node and insert it between the previous and the next
      // if the previous node is null (index out of bounds), insert it at the end of the list
      const previous = this.getAt(index-1) || this.getLast();
      // newNode's next is previous's next
      const newNode = new Node(data, previous.next);
      // previous's next is newNode
      previous.next = newNode;
  }
}

module.exports = { Node, LinkedList };
