const radius = [3,1,2,4];
//Area
const area = function(radius){
    return Math.PI*radius*radius;
}
//Circumference
const circumference = function(radius){
    return 2*Math.PI*radius;
}
//Diameter
const diameter = function(radius){
    return 2*radius
}

//logic for the above 3 code.
const calculate= function(radius,logic){
    const output = [];
    for(let i=0; i<radius.length; i++){
       output.push(logic(radius[i]))
    }
    return output;
}

//Area
console.log(calculate(radius,area));
//Circumference
console.log(calculate(radius,circumference));
//Diameter
console.log(calculate(radius,diameter))


//first approach.....

// const calculateArea = function(radius){
//     const output = [];
//     for(let i=0; i<radius.length; i++){
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }
// console.log(calculateArea(radius));