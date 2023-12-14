console.log(process.env.PORT || 3000);

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [, , batman,] = characters;

console.log(batman); // 'Green Lantern'