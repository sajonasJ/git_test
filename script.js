class MyArray {
  constructor(num) {
    this.length = 0;
    this.num = num;
    }

    addLength(){
      this.length++;
    }
  }

let userOne = new MyArray(1);
let userTwo = new MyArray(2);
let userThree = new MyArray(3);


console.log(userOne.length);
