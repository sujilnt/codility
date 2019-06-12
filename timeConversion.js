/*
* Time Conversion
 Given a time in -hour AM/PM format, convert it to military (24-hour) time.
 Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM
 on a 12-hour clock, and 12:00:00 on a 24-hour clock.
 Input Format
 A single string containing a time in -hour clock format (i.e.: or ), where
 and .
 Output Format
 Convert and print the given time in -hour format, where .
 Sample Input
 07:05:45PM
 Sample Output
 19:05:45
* */

const timeConversion = (s)=>{
	const sliceVal = s.indexOf("AM");
	if(sliceVal >= 0){
		let removesuffix = s.slice(0,sliceVal);
		let intialString = removesuffix.substring(0,2);
		let newString = Number(intialString) === 12 ? "00" : intialString;
		removesuffix=removesuffix.replace(intialString,newString);
		return removesuffix;
	}else{
		let sliceValPm = s.indexOf("PM");
		let removesuffix = s.slice(0,sliceValPm);
		let intialString = removesuffix.substring(0,2);
		let newString = Number(intialString) < 12 ? Number(intialString) + 12: 12;
		removesuffix=removesuffix.replace(intialString,newString);
		return removesuffix;
	}
};

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:05:45PM"));
console.log(timeConversion("12:05:45AM"));
