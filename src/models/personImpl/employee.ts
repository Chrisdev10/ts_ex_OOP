import { Person, PersonalInfo } from '../person';
export class Employee extends Person {
  readonly status: string = 'Contractual';
  private constructor(info: PersonalInfo) {
    super(info);
  }
  static create(info: PersonalInfo): Employee {
    return new Employee(info);
  }
}
