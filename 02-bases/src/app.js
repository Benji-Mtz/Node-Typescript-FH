// const { getId, getAge } = require('./plugins');


// Esto ejecuta el archivo
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// require('./js-foundation/05-factory');
// const { buildMakePerson } = require("./js-foundation/05-factory");
const getPokemonById = require("./js-foundation/06-promesas");


/*
const id = 2;
getUserById(id, (error, user) => {
    if (error) throw new Error(error);

    console.log(user);
})
*/

/* // ! Referncia a la parte de las factory functions
const makePerson = buildMakePerson({ getId, getAge })
const objeto = { name: 'John', birthdate: '1987-03-04' };
const john = makePerson(objeto);
console.log(john);
*/

getPokemonById(4);
