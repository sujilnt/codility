/*
* Birthday Cake
 Candles
 You are in-charge of the cake for your niece's birthday and have decided the cake will have one candle for
 each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest
 ones.
 For example, if your niece is turning years old, and the cake will have candles of height , , , , she
 will be able to blow out candles successfully, since the tallest candle is of height and there are such
 candles.
 Complete the function Given the height of each individual candle, find and print the number of candles
 she can successfully blow out.
 Input Format
 The first line contains a single integer, , denoting the number of candles on the cake.
 The second line contains space-separated integers, where each integer describes the height of candle
 .
 Constraints
 Output Format
 Print the number of candles the can be blown out on a new line.
 Sample Input 0
 4
 3 2 1 3
 Sample Output 0
 2
 Explanation 0
 We have one candle of height , one candle of height , and two candles of height . Your niece only
 blows out the tallest candles, meaning the candles where . Because there are such candles,
 we print on a new line.
 *
 * */
"use strict";
const birthdayCakeCandles = (ar)=>{
	let age = ar.length;
	const identifyCandles = {};
	for(let i =0; i< age;i++){
		if(identifyCandles[ar[i]]){
			identifyCandles[ar[i]] = identifyCandles[ar[i]] + 1;
		}else{
			identifyCandles[ar[i]]=1;
		}
	}
	const keys = Object.keys(identifyCandles);
	return identifyCandles[keys[keys.length-1]];
};

console.log(birthdayCakeCandles([3,2,1,3])===2);
console.log(birthdayCakeCandles([3,3,1,3])===3);
