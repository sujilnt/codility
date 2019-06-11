
const isNumber = (number)=>{
	return Number.isInteger(number);
};
const resultExpression=(expression, variable)=>{
  const expressArr= expression.split(" ");
  const stackArr=[];
  const operatorArr=[];
  let checkNumber =false;
  if(expressArr.length<=2) {
  	return null
  }
  for(let i =0,len=expressArr.length; i< len; i++ ){
  	let currentValue = expressArr[i];
  	 if(currentValue.length >=2){
  	 	break;
     }
     if(!isNumber(Number(currentValue))){
	     operatorArr.push(currentValue);
     }else{
     	if(checkNumber === false){
	        stackArr.push(currentValue);
	        checkNumber= true;
        }else{
     		let a= stackArr.pop();
     		let b = currentValue;
     		let operator = operatorArr.pop();
	        stackArr.push( evaluateBasedOnExpression(operator,a,b));
	        checkNumber = checkNumber === true ? false : true ;
        }
     }
  }
  return stackArr[0]=== undefined ? null: stackArr[0];
};

const evaluateBasedOnExpression = (operator,a,b)=>{
	let value = 0;
	switch (operator) {
		case '+':
			value= parseInt(a) + parseInt(b);
			break;
		case '-':
			value = parseInt(a) + parseInt(b);
			break;
		case '*':
			value = parseInt(a) * parseInt(b);
			break;
		case "/":
			value =  parseInt(a) / parseInt(b);
			break;
		default:
			value =  parseInt(a) ^ parseInt(b);
			break;
	}
	return value;
};

//console.log(resultExpression("* + 2 1 3",{})); //9
//console.log(resultExpression("-+1 5 3",{})); // 3
//console.log(resultExpression("+ 1",{})); // 3
console.log(resultExpression(" + 6 * - 4 + 2 3 8",{})); // 3
