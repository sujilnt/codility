const checkFunc = (pair)=>{
	return Object.entries(pair)[0][0];
};
const solution = (A)=>{
	const pairs={} , length= A.length-1 ;
	let  unpariedNUmber = 0;
	A.forEach((r,index)=>{
		let currentValue = pairs[r] || null;
		pairs[r] = currentValue === null ? [index]: [...currentValue,index];
		if(pairs[r].length >=2){
			delete pairs[r];
		}
		unpariedNUmber = index=== length ? checkFunc(pairs):0;
	});
	
	return unpariedNUmber;
};

solution([9, 3, 9, 3, 9, 7, 9]);
