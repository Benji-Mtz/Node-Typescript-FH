# Primeros pasos

Primeras configuraciones para el desarrollo de nuestros proyectos en node.

```
npm init --yes
mkdir src
touch src/app.js
npm install -D nodemon
```

## Importaciones y exportaciones por default de node

```js
// 01-template.js
const emailTemplate = `
<div>
    <h1>Hi, {{ name }} </h1>
    <p>Thank you for your order.</p>
</div>
`;

module.exports = {
    emailTemplate
}
```
Las importaciones desde un archivo en node pueden ser de la siguiente manera

````js
// src/app.js
require('./js-foundation/01-template'); // ejectura el archivo perse
const miModulo = require('./js-foundation/01-template');
const { emailTemplate } = require('./js-foundation/01-template'); // destructura la variable

console.log(miModulo.emailTemplate);
console.log(emailTemplate);
```