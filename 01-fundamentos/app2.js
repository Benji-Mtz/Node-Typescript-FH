const fs = require('fs');

// Contando palabras
const content = fs.readFileSync('README.md', 'utf-8');
const reactWordCount = content.match(/react/gi ?? []).length;

console.log(`La palabra "react" se repite: ${reactWordCount} veces`);
