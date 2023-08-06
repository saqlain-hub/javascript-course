const library = [
  {
    title: "Catchers in the rye",
    author: "Saqlain Javed",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Catchers in the rye",
    author: "Saqlain Javed",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Making of Modern Sindh",
    author: "Hamida Khuhro",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Capital Tripoli of Libya",
    author: "Muamar Gaddafi",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
library[3].status.read = true;

const { title: firstBook } = library[0];

console.log(firstBook);

const jsonstr = JSON.stringify(library);

console.log(jsonstr);
