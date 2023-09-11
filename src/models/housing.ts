import { Address, Person, PersonalInfo } from './person';

export enum PebScore {
  A,
  B,
  C,
  D,
  E,
  F,
  G,
}
export type housingSettings = {
  owner: PersonalInfo;
  tenant?: PersonalInfo;
  address: Address;
  superficy: number;
  hasFloor: boolean;
  floorNumber: number;
  room: number;
  garden: boolean;
  pebScore: PebScore;
  dateConstr: Date;
};
export abstract class Housing {
  private _houseCaract: housingSettings;
  private _tenantData: Person[] = [];
  constructor(caract: housingSettings) {
    this._houseCaract = caract;
  }
  get houseCaract() {
    return this._houseCaract;
  }
  get tenantData() {
    return this._tenantData;
  }
  toString() {
    return `house address : ${this._houseCaract.address.street} ${this._houseCaract.address.houseNumber}, ${this._houseCaract.address.postCode} ${this._houseCaract.address.city} | list of person living in : ${this._tenantData}`;
  }
}
