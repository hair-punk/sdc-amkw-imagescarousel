const writeCSV = require('../datageneration');
const dbsetup = require('./dbsetup');
const writedb = require('./writedb');

const seed = async (numRecords, iterations) => {
  console.time("Time seed");
  numRecords = numRecords || 5;
  iterations = iterations || 1;

  await dbsetup();
  for (let i = 0; i < iterations; i++) {
    await writeCSV(numRecords,i);
    await writedb();
  }
  console.timeEnd("Time seed");
};


seed(1e6,3);
