'use strict';

class _Node{
  constructor(value, next, prev){
    this.value = value,
    this.next = next,
    this.prev =  prev;
  }
}

class DubLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  insertFirst(item){
    if(this.head === null){
        this.head = new _Node(item,null,null);
        this.tail = this.head;
      return;
    }
      let tempNode = new _Node(item,this.head,null);
      this.head.prev = tempNode;
      this.head = tempNode;
    return ;
  }
  insertLast(item){
    if(this.head === null){
      insertFirst(item)
    }
    else{
      let tempNode = new _Node(item,null,this.tail);
      this.tail.next = tempNode;
      this.tail = tempNode;
    }
  }
}

function main(){
  let DLL = new DubLinkedList();
  DLL.insertFirst('Aquaria');
  // DLL.insertFirst('Caprica');
  // DLL.insertFirst('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  // DLL.insertLast('Tauron');
  // DLL.remove('Picon')


  console.log(DLL)

}
main();
