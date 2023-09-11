import { PebScore, housingSettings } from '../models/housing';
import { PersonalInfo } from '../models/person';

export const data: PersonalInfo[] = [
  {
    lastName: 'Delbeke',
    firstName: 'Christophe',
    sexe: 'M',
    birdthDate: new Date(1992, 10, 1),
    phoneNumber: '0496794178',
    email: 'delbeke.christophe@hotmail.com',
    address: {
      street: 'rue des chenes',
      houseNumber: 1,
      postCode: 4444,
      city: 'Aix',
      country: 'BE',
    },
    nationalRegister: '12.23.43-432.12',
  },
  {
    lastName: 'Earwicker',
    firstName: 'Milli',
    sexe: 'M',
    birdthDate: new Date(1970, 10, 1),
    phoneNumber: 352342342,
    address: {
      street: 'rue des abeilles',
      houseNumber: 11,
      postCode: 5555,
      city: 'Welkenraedt',
      country: 'BE',
    },
    nationalRegister: '12.23.43-666.12',
  },
  {
    lastName: 'Alvey',
    firstName: 'Danica',
    sexe: 'F',
    birdthDate: new Date(1989, 4, 1),
    phoneNumber: 4235234234,
    address: {
      street: 'rue des cerisiers',
      houseNumber: 12,
      postCode: 3333,
      city: 'Kelmis',
      country: 'BE',
    },
    nationalRegister: '41.42.43-222.12',
  },
];
export const houseData: housingSettings[] = [
  {
    owner: {
      lastName: 'Alvey',
      firstName: 'Danica',
      sexe: 'F',
      birdthDate: new Date(1989, 4, 1),
      phoneNumber: 4235234234,
      address: {
        street: 'rue des cerisiers',
        houseNumber: 12,
        postCode: 3333,
        city: 'Kelmis',
        country: 'BE',
      },
      nationalRegister: '41.42.43-222.12',
    },
    tenant: {
      lastName: 'Alvey',
      firstName: 'Danica',
      sexe: 'F',
      birdthDate: new Date(1989, 4, 1),
      phoneNumber: 4235234234,
      address: {
        street: 'rue des cerisiers',
        houseNumber: 12,
        postCode: 3333,
        city: 'Kelmis',
        country: 'BE',
      },
      nationalRegister: '41.42.43-222.12',
    },
    address: {
      street: 'rue des cerisiers',
      houseNumber: 12,
      postCode: 3333,
      city: 'Kelmis',
      country: 'BE',
    },
    superficy: 123,
    hasFloor: true,
    floorNumber: 1,
    room: 4,
    garden: true,
    pebScore: PebScore.B,
    dateConstr: new Date(2010, 3, 1),
  },
  {
    owner: {
      lastName: 'Delbeke',
      firstName: 'Christophe',
      sexe: 'M',
      birdthDate: new Date(1992, 10, 1),
      phoneNumber: '0496794178',
      email: 'delbeke.christophe@hotmail.com',
      address: {
        street: 'rue des chenes',
        houseNumber: 1,
        postCode: 4444,
        city: 'Aix',
        country: 'BE',
      },
      nationalRegister: '12.23.43-432.12',
    },
    address: {
      street: 'rue des chenes',
      houseNumber: 1,
      postCode: 4444,
      city: 'Aix',
      country: 'BE',
    },
    superficy: 123,
    hasFloor: false,
    floorNumber: 0,
    room: 3,
    garden: false,
    pebScore: PebScore.D,
    dateConstr: new Date(2003, 3, 1),
  },
];
