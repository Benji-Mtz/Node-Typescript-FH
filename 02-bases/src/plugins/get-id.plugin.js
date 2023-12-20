const { v4: uuidv4 } = require('uuid');

const getId = () => {
    // return new Date().getTime();
    return uuidv4();
}

module.exports = {
    getId,
}