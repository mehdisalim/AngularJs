export class NavBarServices{
  private _listOfNames:string[] =["Omar","Fatima","Ayman","Samira","Mohammed","Mehdi"];
  get listOfNames():string[]{
    return this._listOfNames;
  }
}
