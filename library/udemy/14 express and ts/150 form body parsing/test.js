const bubbleSort = (arr) => {
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr.length - i - 1; j++){
			if(arr[j+1] > arr[j]) continue;
			[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
		}
	}
	return arr;
}

let arr = [5,4,3,2,1];
let result = bubbleSort(arr);
console.log(result);