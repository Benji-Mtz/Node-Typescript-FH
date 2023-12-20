
// const { getId, getAge } = require('../plugins');

// Esta es una Factory Function
const buildMakePerson = ({ getId, getAge }) => {
    return ({ name, birthdate }) => {
        return {
            id: getId(),
            name: name,
            birthdate, birthdate,
            age: getAge(birthdate),
        }
    }
}

/*
const objeto = { name: 'John', birthdate: '1987-03-04' };
const john = buildPerson(objeto);
console.log(john)
*/

module.exports = {
    buildMakePerson,
}