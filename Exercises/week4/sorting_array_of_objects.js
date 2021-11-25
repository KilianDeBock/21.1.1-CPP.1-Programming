const library = [
  {
    title: 'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Gem Squash Tokoloshe',
    author: 'Zadok Rachel',
    libraryID: 3245,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
];

const abc = JSON.parse(JSON.stringify(library.sort((a, b) => a.author.localeCompare(b.author))));
const cba = JSON.parse(JSON.stringify(library.sort((b, a) => a.author.localeCompare(b.author))));
const nbs = JSON.parse(JSON.stringify(library.sort((a, b) => (a.libraryID > b.libraryID) ? 1 : -1)));
const sbn = JSON.parse(JSON.stringify(library.sort((a, b) => (a.libraryID < b.libraryID) ? 1 : -1)));


console.log('---Sort alphabetically----');
console.log(abc);
console.log('---Reverse Sort Alphabetically----');
console.log(cba);
console.log('---Sort by numbers (libraryID)----');
console.log(nbs);
console.log('---Reverse sort by numbers (libraryID)----');
console.log(sbn);
