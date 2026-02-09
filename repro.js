const fs = require('fs');
const { TypeScriptGenerator } = require('./lib/cjs/index.js');

async function run() {
  const doc = fs.readFileSync('./repro-circular-array.yaml', 'utf8');
  const generator = new TypeScriptGenerator();
  await generator.generate(doc);
}

run().catch(err => {
  console.error(' Crash reproduced:\n');
  console.error(err);
});
