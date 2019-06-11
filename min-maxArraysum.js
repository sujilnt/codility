const arrayMinMax = (arr)=>{
  const mainArray = arr;
  const finalValues = {};
  let totalSum = arr.reduce((c,a,b)=>c+a);
  for(let i =0, len= arr.length;i< len; i++){
  	
  	finalValues[totalSum-mainArray[i]] = totalSum-mainArray[i];
  }
  console.log(finalValues);
};

console.log(arrayMinMax([1,3,5,7,9]));
