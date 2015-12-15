var person = {
  name: 'Diane',
  location: 'Nashville',
  age: 26,
  hobbies: 'hiking',
  cat: {
    name: 'Lucky Bears',
    hobbies: ['purrs, eats, meows, poops']
  },
     Me: function(){
        console.log('hey hey hey hey there...!');
      },
    };

   // console.log(person.name);


var cat = {
  name: 'lucky',
  eat: function() {
    console.log();
  }
};


var generalEatFunction = function() {
  console.log(this.food + " " + 'is his favorite food');
this.hungry = false;
}

var dog = {
  name: 'Pup',
  location: 'nashville',
  food: 'kibble',
  hungry: true,

  party: function(){
  console.log(this.name + " " + 'likes to runaround and eat kitty turds');
  },

  eat: generalEatFunction
};


dog.party();
dog.eat();





//new example; the decorator pattern
//decorators take an object as a parameter
var dog = {
  name: 'kia',
  breed: 'husky'
}

var give_shots = function(animal) {
  animal.vaccinations = ['rabies', 'heartworms', 'fleas']
}

give_shots(dog);

console.log(dog);

var takeItToTheVet = function(animal) {
  animal.neutered = true;
}

takeItToTheVet(dog);

console.log(dog);
