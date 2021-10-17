const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.data;
  }

  add(data) {
    let curValue = this.data;
    if (curValue === null) {
      curValue = new Node(data);
      this.data = curValue.root;
      this.left = curValue.left;
      this.right = curValue.right;
    } else {
      if (curValue > data) {
        curValue = this.left;
        if (curValue === null) {
          curValue = new Node(data);
          this.left = curValue;
        }
      } else if (curValue < data) {
        curValue = this.right;
        if (curValue === null) {
          curValue = new Node(data);
          this.right = curValue;
        }
      }
    }

  }

  has(data) {
   return this;
  }

  find(data) {
    return this;
  }

  remove(data) {
    return this;
  }

  min() {
    let curNode = this.data;
    while (curNode.left !== null) {
      curNode = curNode.left;
    }
    return curNode.root;
  }

  max() {
    return this;
  }

}