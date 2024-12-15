interface Vehicle {
  name: string;
  year: number | Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `
    name: ${this.name}
    year: ${this.year}
    broken: ${this.broken}
    `;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

//--

const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};
printVehicle2(oldCivic);
