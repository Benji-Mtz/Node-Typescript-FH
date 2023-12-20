// Archivos de barril y debe ser siempre un index

const { getAge } = require("./get-age.plugin");
const { getId } = require("./get-id.plugin");


module.exports = {
    getId,
    getAge,
}