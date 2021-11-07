class HelloWorld{
  protected msg: string = "mehdi ";
  private count:number | undefined ;
  constructor(message:string,count?:number) {
    this.msg=message;
    this.count=count;
  }

  public getMessage():string {
    if (this.count!=undefined) {
      this.count = 10;
      return this.msg + "  " + this.count;
    }else {
      return this.msg + "  " + " we don't have any Count";
    }
  }

}
//console.log(new HelloWorld("Hello World From MOROCCO").getMessage())
//console.log(new HelloWorld("Hello World From MOROCCO",20).getMessage())

//----------------------------------------------------------------------------------------------

class HelloWorld2{
  constructor(private message:string,private count:number) {}

  getMessage():string {
    if (this.count!=undefined) {
      this.count = 10;
      return this.message + "  " + this.count;
    }else {
      return this.message + "  " + " we don't have any Count";
    }
  }
  get Count():number{
    return this.count;
  }
  set Count(count : number){
    this.count=count;
  }

}
let hellow = new HelloWorld2("hellow",10);
console.log(new HelloWorld2("Hello World From MOROCCO",10).getMessage())
hellow.Count=30;
console.log(new HelloWorld2("Hello World From MOROCCO",hellow.Count).getMessage())

//----------------------------------------------------------------

import { main } from './main';

export class HelloWorld3{

  constructor() {
    new main().function("mehdi salim")
  }
}
