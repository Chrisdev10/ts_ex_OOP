import { Housing, housingSettings } from '../housing';
export class Apartment extends Housing {
  private constructor(settings: housingSettings) {
    super(settings);
  }
  static create(settings: housingSettings): Apartment {
    return new Apartment(settings);
  }
}
