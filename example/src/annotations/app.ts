const obj = {
  name: "kuki",
  age: 7,
  coordinates: {
    lat: 1,
    lon: 2,
  },
};

console.log(obj);

const {
  coordinates: { lat, lon },
}: { coordinates: { lat: number; lon: number } } = obj;
