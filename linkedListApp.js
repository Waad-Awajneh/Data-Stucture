/*
LinkedList:
create a function that takes a linkedlist of letters as a parameter and check if it is palindrome or not 
"A palindrome is a word or phrase that reads the same backward as forward"
ex:
m => o => o => m  ..... true 
m => o => o => n  ..... false

*/

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  sizeOf() {
    return this.size;
  }

  add(element) {
    let node = new Node(element);
    let current;
    if (this.head == null) this.head = node;
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertAt(element, index) {
    if (index < 0 || index > this.size) {
      return "InValid Index";
    } else {
      let node = new Node(element);
      let current,
        prev,
        it = 0;
      current = this.head;
      if (index === 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;

        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }

        node.next = current;
        prev.next = node;
      }
      this.size++;
    }
  }
  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return "InValid Index";
    } else {
      let current,
        prev,
        it = 0;
      current = this.head;
      prev = current;
      if (index === 0) {
        this.head = current.next;
      } else {
        while (it < index) {
          it++;
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
      }
      this.size--;
      return current.element;

    }
  }

  ReturnFrom(index) {
    if (index < 0 || index > this.size) {
      return "InValid Index";
    } else {
      let current,
        it = 0;
      current = this.head;
      if (index === 0) {
        return current.element;
      } else {
        while (it < index) {
          it++;
          current = current.next;
        }
       return  current.element;
      }
    }
  }





  removeElement(element) {
    let current = this.head;
    let prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return prev;
      }
      prev = current;
      current = current.next;
    }

    return -1;
  }


  indexOf(element)
  {
    let count = 0;
    let current = this.head;
    while (current != null) {
      if (current.element === element) return count;
  
      count++;
      current = current.next;
    }
    return -1;
  }
  


}


function isOdd(list){
  
 return list.sizeOf()%2==1;
}


function isPalindrome(linkedList){
  midIndex=Math.floor(linkedList.sizeOf()/2);
  let midElement;

  if(isOdd(linkedList)){
    linkedList.removeFrom(midIndex);
  }

  for (let index = 0; index < midIndex; index++) {
 if(linkedList.ReturnFrom(index)!=linkedList.ReturnFrom(linkedList.sizeOf()-1-index)){

    return false;
    }
  
  }
  return true;


}











let ll=new LinkedList;
// ll.add("a");
// ll.add("b");
// ll.add("c");
// ll.add("d");
// ll.add("e");
// ll.add("f");
// ll.add("g");
// ll.add("h");
// ll.indexOf("b")
// ll.insertAt("mmmmm",2)
ll.add("m");
ll.add("r");
ll.add("o");
ll.add("q");//mroqvorm  
ll.add("v");
ll.add("o");//mrovqorm
ll.add("r");
ll.add("m");

console.log(ll)
console.log(isPalindrome(ll))