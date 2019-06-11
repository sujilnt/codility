"use strict";
const smallStringRepeater = (string,n,lenofString)=>{
	if(lenofString===0){
		return 0 ;
	}
	return string[0] === "a" ? n : 0 ;
};

const bigStringRepeater = (string,n,lenofString)=>{
	let ndivide = Math.floor(n/lenofString);
	let remainder = Math.floor(n%lenofString);
	console.log("divide and conquer",ndivide, remainder,getCurrentValue(string,lenofString) * ndivide ,remainder);
	let remainderCount = remainder === 0 ? 0 : getCurrentValue(string,remainder);
	return  (getCurrentValue(string,lenofString) * ndivide) + remainderCount;
};

const RepeatedString = (string, n )=>{
     let lenofString = string.length;
	return lenofString < 2 ? smallStringRepeater(string,n,lenofString) : bigStringRepeater(string,n,lenofString);
};


const getCurrentValue = (string, lenofString)=>{
	let counter = 0 ;
	for(let i= 0; i< lenofString; i++){
		if(string[i]==="a"){
			counter += 1;
		}
	}
	return counter;
};
console.log(RepeatedString("aba",10));
console.log(RepeatedString("a",10000000));
console.log(RepeatedString("aab",882787));


