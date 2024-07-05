const profile = {
  name: 'Jack',
  age: 25,
  coordinates: {
    lat: 1,
    long: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coordinates: { lat, long },
}: { coordinates: { lat: number; long: number } } = profile;
