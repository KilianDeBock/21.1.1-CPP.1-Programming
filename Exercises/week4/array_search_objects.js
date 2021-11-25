const array = [
  {
    name: 'apples',
    quantity: 2
  },
  {
    name: 'bananas',
    quantity: 0
  },
  {
    name: 'cherries',
    quantity: 5
  }
];

const foundIndex = array.findIndex((item) => item.name === 'bananas');
const filteredInventory = array.filter((item) => item.quantity > 0);
let tempStr = '';
filteredInventory.forEach((item, index) => {
  tempStr += `\nProduct ${index + 1}: ${item.name}`;
});
console.log(tempStr);