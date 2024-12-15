import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { BubbleSort } from './BubbleSort';

const numbersCollection = new NumbersCollection([5, 2, 4, 3, 1]);
const bubbleSortNumber = new BubbleSort(numbersCollection);
bubbleSortNumber.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('zxcasdqwdqw');
const bubbleSortCharacter = new BubbleSort(charactersCollection);
bubbleSortCharacter.sort();
console.log(charactersCollection.data);
