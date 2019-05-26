const sumFibs=(number)=>{

};
const fibonacci = (number)=>{
    if(number<=1) return number;
    return fibonacci(number-1) + fibonacci(number-2)
};

console.log(fibonacci(5));
