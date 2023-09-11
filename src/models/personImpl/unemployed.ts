import { Person, PersonalInfo } from '../person';
export class UnEmployed extends Person {
  readonly status: string = 'allocation';
  private constructor(info: PersonalInfo) {
    super(info);
  }
  static create(info: PersonalInfo): UnEmployed {
    return new UnEmployed(info);
  }
}
