function format(value: unknown): void {
  switch (typeof value) {
    case 'string':
      console.log('string:', value.toUpperCase());
      break;
    case 'number':
      console.log('number:', value.toFixed(2));
      break;
    default:
      console.log('other types:', value);
  }
}
