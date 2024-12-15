import { faker } from '@faker-js/faker';

//? export const name = 'Jack';
//? export default 'thing';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.internet.userName();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }
}

console.log(faker);
