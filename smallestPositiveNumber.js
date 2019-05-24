/*
* Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*
* */

const findMissingPositvieNumber=(A,firstElement)=>{
	let intialValue =1;
	while(A.has(intialValue)) intialValue++ ;
	return intialValue;
};
const solution=(A)=>{
	const cleanA = new Set(A);
	let counter = 1;
	while(cleanA.has(counter)) counter++ ;
	return counter;
};
console.log(
solution([1, 3, 6, 4, 1, 2]), //5
solution([-1, -3]),//1
solution([1, 3, 6, 4, 1, 2]), //5
solution([1, 2, 3]),// 4
solution([-1, -3, 1, 2]), //3
solution([-1, -3]),// 1
solution([10,4,5,6,7]),
solution([]), //1
);
