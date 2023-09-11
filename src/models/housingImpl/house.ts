import { Housing, housingSettings } from '../housing';
export class House extends Housing {
  private constructor(settings: housingSettings) {
    super(settings);
  }
  static create(settings: housingSettings): House {
    return new House(settings);
  }
}
