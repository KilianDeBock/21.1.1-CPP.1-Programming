const students = [
  {
    firstName: 'Stualyttle',
    lastName: 'Kirry',
    thumbnailUrl: 'https://cdn.discordapp.com/avatars/132487290835435521/a_6f0190f0c4f84d54a471b87eb039ba06.gif?size=128',
    email: 'kilian.debock@student.arteveldehs.be'
  },
  {
    firstName: 'Veli',
    lastName: 'Duran',
    thumbnailUrl: 'https://cdn.discordapp.com/avatars/889792647353479179/7bc2f3eeaf07e6f85698e19df4b0fe30.png?size=128',
    email: 'veli.duran@student.arteveldehs.be'
  },
  {
    firstName: 'Michiel',
    lastName: 'Verld',
    thumbnailUrl: 'https://cdn.discordapp.com/avatars/367314268020015105/d8906af3952f5ff054403d9a53082011.png?size=128',
    email: 'michiel.willems@student.arteveldehs.be'
  },
  {
    firstName: 'Kimberly',
    lastName: 'Sabbe',
    thumbnailUrl: 'https://cdn.discordapp.com/avatars/794296321829765162/cf831ba524baf128dd4fbfce382d9d3c.png?size=128',
    email: 'kimberly.sabbe@student.arteveldehs.be'
  }
];

const studentsElement = document.querySelector('.peoples');

// V1.0
// let output = '';
// for (let people of students) {
//   output +=
//     `<div class="people">
//     <h1>${people.firstName} ${people.lastName}</h1>
//     <img src=${people.thumbnailUrl}>
//     <p>${people.email}</p>
//     <br><br>
//   </div>`;
// }
// studentsElement.innerHTML = output;

// V2.0
studentsElement.innerHTML = students.map((people) =>
  `<div class="people">
    <h1>${people.firstName} ${people.lastName}</h1>
    <img src=${people.thumbnailUrl}>
    <p>${people.email}</p>
    <br><br>
  </div>`).join('');


