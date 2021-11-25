// Describe a person
const person = { // = Object initializer
  hairColor: 'black',
  length: 1.72,
  weight: 66,
  dob: new Date(2000, 11, 11, 17).getTime(),
  jump: function () {
    console.log('JUMP AROUND!');
  },
  fight() {
    console.log('FIGHT!');
  },
  eat: () => {
    return 'EATING';
  }
};
console.log(person);

// Call properties from object.
const myDob = new Date(person.dob);
console.log(myDob.toString());
person.length = 1.73;
console.log(person);
person['weight'] = 67;
console.log(person);
person.nickname = 'Stualyttle';
console.log(person);
person.jump();
person.fight();
console.log(person.eat());

// Make a copy but where the hell are the functions?
const person2 = JSON.parse(JSON.stringify(person));
person2.hairColor = 'red';
console.log(person);
console.log(person2);

// Custom object with constructor function.
// "CapitalCasing"! Not "camelCasing"!
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.toString = () => {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Make an instance
const person1 = new Person('Kilian', 'De Bock');
console.log(person1.firstName + ' ' + person1.lastName);
console.log(person1.toString());
const person3 = new Person('Liudmila', 'Mikhaylinova');
console.log(`${person3.firstName} ${person3.lastName}`);
console.log(person3.toString());

// Describe a Post
function Post(title, synopsis) {
  this.title = title;
  this.synopsis = synopsis;
  this.body;
  this.toString = () => {
    return this.title;
  };
}

let post = new Post('Leerkracht yeet title van tweakers site!', 'Blijft dingen stelen van publieke eigendom en geeft er zijn lessen mee!');
post.body = `<p>Het begon met een gewone les, maar het werd snel al een les van diefstal en copyright. De hele opleiding is geschokt en problemen blijven opdagen van diefstal door de leerkrachten.</p>`;
console.log(post.toString());
console.log(post.synopsis);
console.log(post.body);

const shoppingBasket = [
  {
    name: 'Pasta',
    quantity: 2
  },
  {
    name: 'Pesto',
    quantity: 3
  },
  {
    name: 'Chicken',
    quantity: 1
  },
  {
    name: 'Cheese',
    quantity: 1
  }
];

let output = '';
for (let item of shoppingBasket) {
  output += `\n${item.name} => quantity: ${item.quantity}`;
}
console.log(output);

output = '';
shoppingBasket.forEach((item) => {
  output += `\n${item.name} => quantity: ${item.quantity}`;
});
console.log(output);

output = shoppingBasket.map((item) => `${item.name} => quantity: ${item.quantity}`).join('\n');
console.log(output);

// Search in  array of object.
let indexOfObjectinShoppingBasket = shoppingBasket.findIndex((item) => {
  return item.name.indexOf('C') !== -1;
});

let itemInbShoppingBasket = shoppingBasket[indexOfObjectinShoppingBasket];
console.log(itemInbShoppingBasket.name);

itemInbShoppingBasket = shoppingBasket.find((item) => item.quantity === 3);
console.log(itemInbShoppingBasket.name);

const filteredShoppingBasket = shoppingBasket.filter((item) => item.quantity === 1);
console.log(filteredShoppingBasket);