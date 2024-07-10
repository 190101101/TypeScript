import { faker } from '@faker-js/faker';

export class Company {
  name: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: 40.4672919, //faker.location.latitude(),
      lng: 49.8499513, //faker.location.longitude(),
    };
  }
}
