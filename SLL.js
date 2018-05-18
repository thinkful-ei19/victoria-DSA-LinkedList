'use strict';

class _Node{
  constructor(value, next){
    this.value = value,
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head=null;
  }
  insertFirst(item){
    this.head = new _Node(item, this.head);
  }
  insertLast(item){
    if(this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null){
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    let currNode = this.head;
    if(!this.head){
      return null;
    }
    while(currNode.value !== item){
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode
  }
    remove(item) {
      if(!this.head){
        return null;
      }
      if(this.head.value === item){
        this.head = this.head.next;
        return;
      }
      let currNode = this.head;
      let previousNode = this.head;
      while((currNode !== null) && (currNode.value !== item)){
        previousNode = currNode;
        currNode = currNode.next;
      }
      if(currNode === null){
        console.log('Item not found');
        return;
      }
      previousNode.next = currNode.next;
    }

  insertBefore(item, key){
    if (this.head.value === key) {
      this.insertFirst(item);
      return true;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while (currNode.next !== null && currNode.value !== key){
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode.value === key){
      previousNode.next = new _Node(item, currNode);
      return true;
    }
    return false;
  }
  insertAfter(item, key){
    if(this.head.value === key){
      let node = new _Node(item, this.head.next);
      this.head.next = node;
      return true;
    }
    let currNode = this.head;
    while (currNode.next !== null && currNode.value !== key){
      currNode = currNode.next;
    }
    if (currNode.value === key){
      currNode = new _Node(item, currNode.next);
      return true
    }
    return false
  }

  insertAt(item, index){
     if (index === 0){
       this.insertFirst(item);
       return;
     }
     let currNode = this.head;
     let counter = 0
     while (counter < index){
       currNode = currNode.next;
       counter ++
     }
     if (counter === index){
       currNode.next = new _Node(item, currNode.next);
       return true
     }
     return false
  }
}

function size(list){
  let sizePtr = list.head;
  let count = 0;
  while(sizePtr !== null){
    count++;
    sizePtr = sizePtr.next;
  }
  return count;
}

function display(list){
  let currNode = list.head;
  while(currNode !== null){
    console.log(currNode)
    currNode = currNode.next
  }
  if(currNode === null){
  return
  }
}

function isEmpty(list){
  return list.head ? true : false
}

function findPrevious(list, item){
  let currNode = list.head;
  let previousNode = list.head;
  if(!currNode){
    null;
  }
  while(currNode.value !== item){
    if (currNode.next === null) {
      return null;
    }
    else {
      previousNode = currNode;
      currNode = currNode.next;
    }
  }
  if(currNode.value === item){
    return previousNode
  }
}

function findLast(list){
  let currNode = list.head;
  while(currNode.next !== null){
    currNode = currNode.next;
  }
  if (currNode.next === null) {
    return currNode
  }
}

function reverse(list){
  let holder = null;
  let currHead = list.head;
  while(currHead !== null){
    let tempNode = currHead.next;
    currHead.next = holder;
    holder = currHead;
    currHead = tempNode
  }
  return list.head = holder;
}

function thirdFromTheEnd(list){
  let currNode = list.head;
  let nextNode = list.head.next;
  let third = null;
  if(size(list)<=2){
    return false
  }
  while (nextNode.next !== null) {
    third = currNode;
    currNode = nextNode;
    nextNode = nextNode.next;
  }
  return third.value
}

function middle(list){
  let currNode = list.head

  let whole = size(list)
  if(whole <= 1 ){
    return currNode
  }

  let middle = whole/2
  if(middle % 2 === 0){
    console.log(middle)
    middle = middle -1
  }
  let count = 0;
  while(count < middle){
    currNode = currNode.next
    count ++
  }
  return currNode
}

function CycleList(list){
  let currHead = list.head;
  let fastPointer = list.head.next;
  while(fastPointer !== null){
    fastPointer = fastPointer.next
    if(fastPointer === currHead){
      return true
    }
  }
  return false
}

function main(){
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  // console.log(SLL)
  //LinkedList {
  // head:
  //  _Node {
  //    value: 'Apollo',
  //    next: _Node { value: 'Boomer', next: [Object] } } }
  //SLL.insertBefore('Hello World', 'Boomer')
  //console.log(SLL)
//   LinkedList {
//   head:
//    _Node {
//      value: 'Apollo',
//      next: _Node { value: 'Hello World', next: [Object] } } }
  //SLL.insertAfter('FooBar', 'Apollo')
  // SLL.insertAt('Orange', 3)
  // console.log(SLL.find('Orange'))


 let cycle = new LinkedList();
 cycle.head = new _Node('1', null);
 cycle.head.next = new _Node('2', new _Node('3', new _Node('4', cycle.head)));
 console.log(CycleList(SLL))
}

main()

//Mystery program Polynomial time O(n^2)
