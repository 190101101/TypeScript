const profile = {
  name: "apsi",
  age: 14,
  coordinates: {
    lat: 1,
    lon: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;

const {
  coordinates: { lat, lon },
}: { coordinates: { lat: number; lon: number } } = profile;

console.log(lat, lon);