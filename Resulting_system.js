
let name = prompt('Name plz');
let marks = prompt('Marks plz');

if( marks >= 0 && marks <= 32){
    console.log(`Hi ${ name }, You failed please try again `);
}else if( marks >= 33 && marks < 40 ){
    console.log( `Hi ${ name }, You got Grade D and GPA = 1`);
}else if( marks >= 40 && marks < 50 ){
    console.log(` Hi ${ name }, You got Grade C and GPA = 2`);
}else if( marks >= 50 && marks < 60){
    console.log(` Hi ${ name }, You got Grade B and GPA = 3`);
}else if( marks >= 60 && marks < 70){
    console.log(` Hi ${ name }, You got Grade A- and GPA = 3.5`);
}else if( marks >= 70 && marks < 80 ){
    console.log(` Hi ${ name }, You got Grade A and GPA = 4`);
}else if( marks >= 80 && marks <= 100){
    console.log(` Hi ${ name }, You got Grade A+ and GPA = 5`);
}else{
    console.log(` Hi ${ name }, Your results is invalied`);
}