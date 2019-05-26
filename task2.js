const solution = ()=>{
	const getimage = document.querySelector("img");
	const url = "https://frontendmasters.com/wp-content/themes/frontendmasters/assets/images/workshop/instructor-mike-north@2x.jpg";
   const articles = fetch(url,{
	  "Content-Type" :"image/jpeg",
	   "Access-Control-Allow-Origin": "*"
   }).then(response => response.blob()).then((response)=> {
   	   console.log(response,response.type);
	   	const requestURL = window.URL.createObjectURL(response.url);
	   	getimage.src= requestURL;
	   	console.log(getimage);
	   })
	   .catch(e => console.log("error!!! /n" ,e))
};
console.log(solution());


