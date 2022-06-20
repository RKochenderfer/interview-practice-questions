// Site: https://www.educative.io/blog/crack-amazon-coding-interview-questions#overview
console.log('starting run')

/*
    You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number x. 
    You have to find x. The input array is not sorted. Look at the below array and give it a try before checking the solution.
*/
const findMissing = input => {
	const sorted = input.sort()
	for (let i = 0; i < sorted.length; i++) {
		if (sorted[i] !== i + 1) {
			return i + 1
		}
	}
	return -1
}

const findSumOfTwo = (array, targetSum) => {
	const set = []
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < set.length; j++) {
			if (set[j] + array[i] === targetSum) {
				return true
			}
		}
		set.push(i)
	}
	return false
}

const mergeSort = (head1, head2) => {
	
	return head1
} 

const deepCopyArbitraryPointer = (head) => {

}

console.log(`Find Missing: ${findMissing([3, 7, 1, 2, 8, 4, 5])}`)
console.log(
	`Find Sum of Two Integers Is Equal To Given Value 10: ${findSumOfTwo(
		[5, 7, 1, 2, 8, 4, 3],
		10,
	)}`,
)
console.log(
	`Find Sum of Two Integers Is Equal To Given Value 19: ${findSumOfTwo(
		[5, 7, 1, 2, 8, 4, 3],
		19,
	)}`,
)
