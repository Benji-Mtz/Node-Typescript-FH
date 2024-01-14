// Archivos de barril y debe ser siempre un index
const httpClientPlugin = require("./http-client.plugin");
const buildLogger = require("./logger.plugin");
const { getAge } = require("./get-age.plugin");
const { getId } = require("./get-id.plugin");


module.exports = {
    getId,
    getAge,
    http: httpClientPlugin,
    buildLogger
}