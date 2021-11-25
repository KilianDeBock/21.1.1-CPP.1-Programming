const favoriteMeal = {
  title: 'Belgian fries with stew.',
  servings: 6,
  ingredients: [
    {
      name: 'potato',
      amount: 10 + ' st'
    },
    {
      name: 'beef',
      amount: 4 + ' st'
    },
    {
      name: 'binder',
      amount: 1 + ' kg'
    },
    {
      name: 'oil',
      amount: 3 + ' l'
    }
  ]
};

let output = '';
favoriteMeal.ingredients.forEach((item) => {
  output += `\n${item.amount} ${item.name}`;
});

const message = `
${'='.repeat(50)}\n
|${' '.repeat(16)}FAVORITE  RECIPE${' '.repeat(16)}|\n
${'='.repeat(50)}\n
Name: "${favoriteMeal.title}"
${'-'.repeat(50)}\n
Servings: ${favoriteMeal.servings}
${'-'.repeat(50)}\n
Ingredients:
${'-'.repeat(50)}\n
${output}
${'='.repeat(50)}\n
`;

console.log(message);