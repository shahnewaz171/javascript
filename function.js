//======Funtion======
//Normal function or Funtion Declaration [98-100]
function add (a,b){
    return a+b;
}

console.log(add(7, 12));
//Funtion Expression[104-106]
var add =  function(a, b){
    return a+b;
};
var addition = add;
console.log(add(10, 8));
console.log(addition(80, 100));




//======Callback Function======
var names= ['Muhammad', 'Shahnewaz', 'Khondokar', 'Mun', 'perfect', 'Awesome', 'Khondokar', 'Shahnewaz'];

names.forEach(function(name){
    var n = name.toLocaleUpperCase();
    console.log(n);
});


function operation(a, b, callback){
    var c= a+b;
    var d = a-b;

    callback(c,d);
}

function print(c,d){
    console.log(c, d); 
}

function multify(c, d){
    console.log('Multify, ' + (c*d));
    
}

operation(10, 5, print);
operation(10, 5, multify);




//Another
function operation(a, b, callback){
    var c= a+b;
   var d = a-b;

   callback(c,d);
}

operation(10, 5, function(c, d){
    console.log('Divide, ' + (c/d));
    
});
operation(10, 5, function(c, d){
   console.log('Multify, ' + (c*d));
});//end



var names= ['Muhammad', 'Shahnewaz', 'Khondokar', 'Mun', 'perfect', 'Awesome', 'Shahriar', 'Photography'];

function traverse(names, callback) {
    for (var i=0; i<names.length; i++){
        callback(names[i]);
    }
}

traverse(names, function(name){
    console.log(name.toUpperCase());
    
});//end

//Multiplication
var x = myFunction(4, 3);

console.log(x);

function myFunction(a, b){
    return a * b;
}

//Celsius
function toCelsius(f){
    return (5/9) * (f-12);
}

console.log(toCelsius(77));