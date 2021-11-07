let count = 3;
let isValid: boolean = true;
const fullName: string = "salim mehdi";

function getCount(value:number) {
  if (value!=0) {
    for (let i = 0; i < value; i++) {
      console.log(isValid);
      if (isValid) {
        count++;
      }
      isValid = !isValid;
    }
    console.log("the count is " + count +" "+ fullName);
    return count;
  }else {
    return "The Input should not be A ZERO";
  }
};
//console.log(getCount(10));

//-------------------------------------------------------

let func1 = (x:number,y:number)=> x+y;
console.log(func1(1,5));


let func2 = (sum)=> sum.x+sum.y;
console.log(func2({x:"1",y:9}));


let func3 = (sum : {x:number,y:number}) => sum.x+sum.y;
console.log(func3({x:3,y:6}));

interface sumInterface {
  x:number,
  y:number
}
let func4 = (sum:sumInterface) => sum.x+sum.y;
console.log(func4({x:6,y:10}))

export class main{
  num:number = 12431;
  function(message:string){
    console.log(message)
  }
}
