import { Employee } from './models/personImpl/employee';
import { data, houseData } from './data/data';
import { Person } from './models/person';
import { House } from './models/housingImpl/house';
import { Housing } from './models/housing';
import { Apartment } from './models/housingImpl/apartment';
import { UnEmployed } from './models/personImpl/unemployed';
/**
 * array of house
 */
const housingArray: Housing[] = [
  House.create(houseData[0]),
  Apartment.create(houseData[1]),
];
/**
 * Person objects
 */
const person1: Person = Employee.create(data[0]);
const person2: Person = UnEmployed.create(data[2]);

// add tenant to house
housingArray
  .find(
    house =>
      house.houseCaract.owner.nationalRegister ===
      person1.info.nationalRegister,
  )
  ?.tenantData.push(person1);
housingArray[1].tenantData.push(person2);
//test
console.log(housingArray[1].toString());
