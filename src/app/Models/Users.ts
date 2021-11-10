export class Users{

  private _firstName:string;
  private _lastName:string;
  private _jobTitle:string;
  private _salary:number;
  private _id:number;

  constructor(firstName: string, lastName: string, jobTitle: string, salary: number, id: number ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._jobTitle = jobTitle;
    this._salary = salary;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get jobTitle(): string {
    return this._jobTitle;
  }

  set jobTitle(value: string) {
    this._jobTitle = value;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    this._salary = value;
  }
}
