/*
*
* */
const solution = ()=>{
  const tdElementsArr= document.querySelectorAll("tr td") || [];
  let returnVal = "", intialNeglectedRow=1;
  tdElementsArr.forEach((values,index)=>{
	  returnVal = intialNeglectedRow !== index ? returnVal + values.innerHTML : returnVal;
	 intialNeglectedRow = index >= intialNeglectedRow ? increment(intialNeglectedRow): intialNeglectedRow;
  });
 return returnVal;
};

const increment=(num)=> num +3;

window.load= solution();
