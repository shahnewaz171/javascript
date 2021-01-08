//=====Objects===== 

var person = {};
person.name = 'Muhammad Shahnewaz';
person.age = '40';
person.print = function(){
    console.log(this.name + ' ' + this.age);
}; 

person.print();
//end


var person = {
    name: 'Muhammad Shahnewaz',
    age: 23,
    skills: ['HTMl, CSS, JavaScript, React, Node, Bootstrap'],

    print: function(){
        console.log(this.name, this.age, this.skills);
    }
};
//person name change
person.name = 'Shahnewaz Khondokar';

person.print();
console.log(person,['name']);

for (var i in person) {
    console.log(person[i]);
    
}
