/*
stack :
create a function that takes a string as a parameter and return true if the string has 
Balanced Brackets and false if it hasn't (using stack)
ex :
"ab(cd{ef}gh)" => true
"ab(cd{ef)" => false 

*/

class Stack {
  constructor() {
    this.stack = [];
    this.top = -1;
  }

  push(element) {
    this.top++;
    this.stack[this.top] = element;
  }

  pop() {
    if (this.isEmpty()) return "Stack is Empty";

    let value = this.peek();
    this.top--;
    return value;
  }

  isEmpty() {
    if (this.top == -1) return true;
  }

  size() {
    return this.top+1;
  }

  peek(){
    return this.isEmpty() ? undefined: this.stack[this.top];
    }
    

  printElements() {
    let elements = "";
    this.stack.forEach((element) => {
      elements += element + "  ";
    });

    console.log(elements);
  }
}

function isBalancedBrackets(str) {
  let stackOpenBrackets = new Stack();
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      stackOpenBrackets.push(str[i]);
    } else if (str[i] == ")" || str[i] == "]" || str[i] == "}") {
      let last = stackOpenBrackets.pop();
      switch (str[i]) {
        case ")":
          if (last != "(") return false;
          break;
        case "}":
          if (last != "{") return false;
          break;
        case "]":
          if (last != "[") return false;
          break;
      }
    }
  }
  if (stackOpenBrackets.isEmpty())  return true;
  else return false
 
}


console.log( "[([])] =>>" +"Is BalancedBrackets?"+isBalancedBrackets("[([])]"));



/*queue:
write a function that takes an integer K and a queue of integers you have to reverse the order 
of the first K elements of the queue, leaving the other elements in the same relative order.
ex:
k=3
1 2 3 4 5 ====> 3 2 1 4 5*/

class Queue{

  constructor() {
      this.queue =[];
  }
  
  enQueue(value){
  
      this.queue.push(value);
  }
  
  deQueue(){
  let value=this.peek();
  this.queue.shift();
  return value;
  }
  
  peek(){
  return this.isEmpty() ? undefined: this.queue[0];
  }
  
  isEmpty(){
    if (this.lenght() == 0) return true;
  
  }
  
  lenght(){
  return this.queue.length;
  }


  printElements() {
    let elements = "";
    this.queue.forEach((element) => {
      elements += element + "  ";
    });

    // console.log(elements);
    return elements;
  }
  
  }
  
  
  
  function reverseTheOrder(k,queue){
    let stack=new Stack;
    let newQueue=new Queue;
    for (let index = 0; index < k; index++) {
      stack.push(queue.deQueue());

    }
    // console.log(stack);
    for (let index = 0; index < k; index++) {
     newQueue.enQueue(stack.pop())
    }
    while(!queue.isEmpty()){
      newQueue.enQueue(queue.deQueue());

    }
  
  return newQueue;
  }

  let queue1 = new Queue;
  queue1.enQueue(1) 
  queue1.enQueue(2) 
  queue1.enQueue(3) 
  queue1.enQueue(4)
  queue1.enQueue(5) 
  queue1.enQueue(6)
  queue1.enQueue(1) 
  queue1.enQueue(2) 
  queue1.enQueue(3) 
  queue1.enQueue(4)
  queue1.enQueue(5) 
  queue1.enQueue(6)

  console.log("reverse The Order of queue =>> "+ queue1.printElements())
  queue1 = reverseTheOrder(6,queue1);
  
  console.log("reversed Queue =>> " + queue1.printElements());
 