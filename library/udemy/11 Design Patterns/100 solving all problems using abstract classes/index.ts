import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { BubbleSort } from './BubbleSort';

const numbersCollection = new NumbersCollection([5, 2, 4, 3, 1]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('zxcasdqwdqw');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(100);
linkedList.add(-11);
linkedList.add(5);
linkedList.sort();
linkedList.print();
