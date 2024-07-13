import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { BubbleSort } from './BubbleSort';

const numbersCollection = new NumbersCollection([5, 2, 4, 3, 1]);
const bubbleSortNumber = new BubbleSort(numbersCollection);
bubbleSortNumber.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('zxcasdqwdqw');
const bubbleSortCharacter = new BubbleSort(charactersCollection);
bubbleSortCharacter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(-3);
linkedList.add(7);
linkedList.add(47);
linkedList.add(5);
const bubbleSortlinkedList = new BubbleSort(linkedList);
bubbleSortlinkedList.sort();
linkedList.print();
