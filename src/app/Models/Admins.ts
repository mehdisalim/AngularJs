export class Admins{

  constructor(private _customer_id: number,
              private _first_name: string,
              private _last_name: string,
              private _email: string,
              private _firstName_Manager: string,
              private _lastName_Manager: string,
              private _phone: number,
              private _username: string,
              private _password: string,
              private _address: string,
              private _district: string,
              private _city_id: number,
              private _location: string,
              private _postal_code: number,
              private _password_check: string,
              private _manager_email: string) {
  }


  get customer_id(): number {
    return this._customer_id;
  }

  set customer_id(value: number) {
    this._customer_id = value;
  }

  get first_name(): string {
    return this._first_name;
  }

  set first_name(value: string) {
    this._first_name = value;
  }

  get last_name(): string {
    return this._last_name;
  }

  set last_name(value: string) {
    this._last_name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get firstName_Manager(): string {
    return this._firstName_Manager;
  }

  set firstName_Manager(value: string) {
    this._firstName_Manager = value;
  }

  get lastName_Manager(): string {
    return this._lastName_Manager;
  }

  set lastName_Manager(value: string) {
    this._lastName_Manager = value;
  }

  get phone(): number {
    return this._phone;
  }

  set phone(value: number) {
    this._phone = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get district(): string {
    return this._district;
  }

  set district(value: string) {
    this._district = value;
  }

  get city_id(): number {
    return this._city_id;
  }

  set city_id(value: number) {
    this._city_id = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get postal_code(): number {
    return this._postal_code;
  }

  set postal_code(value: number) {
    this._postal_code = value;
  }

  get password_check(): string {
    return this._password_check;
  }

  set password_check(value: string) {
    this._password_check = value;
  }

  get manager_email(): string {
    return this._manager_email;
  }

  set manager_email(value: string) {
    this._manager_email = value;
  }
}
