import { NumbersCollection } from './NumbersCollection';
import { BubbleSort } from './BubbleSort';

const numbersCollection = new NumbersCollection([5, 2, 4, 3, 1]);
const bubbleSort = new BubbleSort(numbersCollection);
bubbleSort.sort();
console.log(numbersCollection.data);
