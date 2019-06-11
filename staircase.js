const staircase = (n)=>{
	for(let i=1,space=n-1; i<=n; i++){
		let firstLetter = " ".repeat(space);
		console.log(firstLetter +"#".repeat(i));
		space-=1;
	}
};
staircase(5);
staircase(6);
