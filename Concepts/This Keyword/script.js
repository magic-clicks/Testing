// this = reference to the object where THIS is used
// (the object depends on the immediate context)
// person.name = this.name

const person1 = {
    name: "Spongebob",
    favFood: "Hamburgers",
    sayHello: function(){console.log(`Hi i am ${this.name}`)},
    sayFavFood: function(){console.log(`I love to eat ${this.favFood}`)},
}

const person2 = {
    name: "Patrick",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi i am ${this.name}`)},
    sayFavFood: function(){console.log(`I love to eat ${this.favFood}`)},
}

person1.sayHello();
person1.sayFavFood();

person2.sayHello();
person2.sayFavFood();

// does not work with arrow functions! 