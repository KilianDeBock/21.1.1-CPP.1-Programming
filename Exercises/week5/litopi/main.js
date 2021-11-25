const firstLiElements = document.querySelectorAll('.poem__container > li');
let input = {};
firstLiElements.forEach((lm, i) => {
  input[i] = [];
  lm.querySelectorAll('li').forEach((item) => {
    input[i].push(item.innerHTML);
  });
});

let output = '<div class="poem__container">\n';
for (let [i, array] of Object.entries(input)) {
  output += '<p>';
  for (let [i, item] of array.entries()) {
    output += i < (array.length - 1) ? `${item}<br>` : item;
  }
  output += i < (array.length - 1) ? `</p>\n` : '';
}
output += `</div>`;

console.log(output);