const multiply = (a,b)=>a*b;
const sum = (a,b)=>a+b;
const sumandmultiply = (a,b,c)=>sum(multiply(a,b),c);

console.log(sumandmultiply(3,2,2));

const pipe = function(sum, multiply){
	return function pipe(arg,arg2,arg3){
		return sum(multiply(arg,arg2),arg3)	}
};

let sum2 = pipe(sum,multiply)(2,3,5);
console.log(sum2);
