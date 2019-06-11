const trekking = (n,arr)=>{
	let counter=0,sealevel=0;
	arr.forEach((data,index,arr)=>{
		sealevel = data === "U" ? sealevel+1 : sealevel-1;
		counter = sealevel === 0 && arr[index+1] !== data ?  counter+1: counter;
	});
	
return counter;
};
//console.log(trekking(8,["D","D","U","U","U","U","D","D"]), 2);
//console.log(trekking(8,["U","D","D","D","U","D","U","U"]), 1);

const trekkingByString = (n,string)=>{
	let counter=0,sealevel=0;
	for(let i =0,value=""; i < n;i++){
		value = string.trim().charAt(i);
		sealevel = value === "U" ? sealevel+1 : sealevel-1;
		counter = sealevel === 0 && "U"  === value  ?  counter+1 : counter;
		console.log(value,string.charAt(n-1),sealevel,counter);
	}
	
	return counter;
};
console.log(trekkingByString(8, "UDDDUDUU"), 1);
console.log(trekkingByString(10, "UDUUUDUDDD"), 0);
