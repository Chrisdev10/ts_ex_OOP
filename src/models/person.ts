export type Address = {
  street: string;
  houseNumber: number | string;
  floor?: number;
  postCode: number;
  city: string;
  country: string;
};
export type PersonalInfo = {
  lastName: string;
  firstName: string;
  sexe: 'F' | 'M';
  birdthDate: Date;
  phoneNumber: number | string;
  email?: string;
  address: Address;
  readonly nationalRegister: string;
};
export abstract class Person {
  private _info: PersonalInfo;
  constructor(info: PersonalInfo) {
    this._info = info;
  }
  public get info() {
    return this._info;
  }
  public walk() {
    console.log("I'm walking");
  }
  public breath() {
    console.log("I'm breathing");
  }
  public speak() {
    console.log("I'm speaking");
  }
  toString() {
    return `${this._info.lastName} ${this._info.firstName}`;
  }
}
