const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    this.value = null;
    this.next = null;
  }
  
  getUnderlyingList() {
    return this;
  }

  enqueue(value) {
    if (this.value === null) {
      this.value = value;
      this.next = null;
    } else {
      let curNode = this;
      while (curNode.next !== null) {
        curNode = curNode.next;
      }
      curNode.next = new ListNode(value);
    }
  }

  dequeue() {
    const value = this.value;
    const curNode = this.next;
    this.value = curNode.value;
    this.next = curNode.next;
    return value;
  }
}