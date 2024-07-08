interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary() {
    return `name: ${this.name}`;
  },
};

const cola = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Cola has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(cola);
