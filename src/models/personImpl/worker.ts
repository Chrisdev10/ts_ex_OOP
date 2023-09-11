import { Person, PersonalInfo } from '../person';
export class Worker extends Person {
  readonly status: string = 'Contractual';
  private constructor(info: PersonalInfo) {
    super(info);
  }
  static create(info: PersonalInfo): Worker {
    return new Worker(info);
  }
}
