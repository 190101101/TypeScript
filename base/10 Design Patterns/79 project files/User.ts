import { faker } from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.internet.userName();
    this.location = {
      lat: 40.4672919, //faker.location.latitude(),
      lng: 49.8439513, //faker.location.longitude(),
    };
  }
}
