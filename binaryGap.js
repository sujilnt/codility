// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const converttoBinery= (N ) => {
	return N.toString(2);
};


function solution(N) {
	let tracker={};
	let zeroLength=0;
	let binaryString = converttoBinery(N);
	for(let i =0,head=null, tail=null,count = 0; i<= binaryString.length ; i++ ){
		if(binaryString.charAt(i) === "1"){
			tracker[tail] = tracker[head] === null ? null : tracker[head];
			tracker[head]= true;
			 if(tracker[head] && tracker[tail]){
				 //console.log("log",i,tail,count);
			 	zeroLength = zeroLength < count ? count: zeroLength ;
			 	count =0;
			 }
		}else if(tail === null){
			count +=1
		}
		
	}
	return zeroLength;
}
console.log(solution(1041)===5);
console.log(solution(15)===0);

