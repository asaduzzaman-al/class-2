
let name = prompt('Name');
let age = prompt('Age');
let gender = prompt('Gender');

byer_age = 0;
somman = '';

switch(gender){
    case('Male'):
    byer_age = 21;
    somman = 'Vayyaaaa';
    break;

    case('Female'):
    byer_age = 18;
    somman = 'Apuuuu';
    break;

}


if(age >= byer_age){
    console.log(`
     Hi ${name}, ${somman} apni byer jonno prostut hon
    `);
}else{
    console.log(`
     Hi ${name}, ${somman} apnar ekhono byer boise hoinai, you have to wait ${byer_age-age} years
    `);
} 