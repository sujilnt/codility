const solution = (A)=>{
	const pairs={};
	A.forEach((r,index)=>{
		if(pairs[r]=== undefined){
			pairs[r]= [index]
		}else{
			pairs[r]= [...pairs[r],index]
		}
	});
	 const t= Object.keys(pairs);
	 let r= t.filter((r)=>pairs[r].length<=1 )[0];
	 console.log(r);
	 console.log(pairs);
	
	return 1;
};

solution([9, 3, 9, 3, 9, 7, 9]);
