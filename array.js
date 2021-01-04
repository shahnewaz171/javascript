//======Array=======

var names = [];

names[0] = 'Muhammad Shahnewaz';
names[1] = 'Khondokar';
names[2] = 'Mun';

console.log(names);
//Uppercase
for (var i=0; i<names.length; i++){
    console.log(names[i].toUpperCase());    
}


var names= ['Muhammad', 'Shahnewaz', 'Khondokar', 'Mun', 'perfect', 'Awesome'];

var data = [1,2,3,4];
//total length
console.log(names.length);

// num 1 array
console.log(names[1]);

//last array
console.log(names[names.length - 1]);

//Data to Index number
console.log(names.indexOf('Shahnewaz'));

//Data Push
names[names.length] = 'Someone';
console.log(names);

names.push('Mr. Perfect');
console.log(names);


//Array Sort
var sortedArray = names.sort();
console.log(sortedArray);


names.splice(6, 1, 'Anyone');
console.log(names);