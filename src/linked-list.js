const Node = require("./node");

class LinkedList {
  constructor() {
    this.length = 0;
    this._head = null;
    this._tail = null;
  }

  append(data) {
    let node = new Node(data);

    if (this.length) {
      node.prev = this._tail;
      this._tail.next = node;
      this._tail = node;
    } else {
      this._head = node;
      this._tail = node;
    }
    this.length++;
    return node;
  }

  head() {
    return this._head ? this._head.data : this._head;
  }

  tail() {
    return this._tail ? this._tail.data : this._tail;
  }

  at(index) {
    let currentNode = this._head;
    let i = 0;
    while (i !== index) {
      if (index === 0) {
        return this._head.data;
      } else if (index === this.length - 1) {
        return this._tail.data;
      }
      currentNode = currentNode.next;
      i++;
    }
    return currentNode.data;
  }

  insertAt(index, data) {
    //вставить данные в указанный индекс
  }

  isEmpty() {
    if (!this.length) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this._head = null;
    this._tail = null;
    this.length = 0;

    return this;
  }

  deleteAt(index) {}

  reverse() {}

  indexOf(data) {}
}

module.exports = LinkedList;
