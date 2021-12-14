#!/usr/bin/node
const phrase = 'C is fun';
const num = process.argv[2];
let i = 0;
if (parseInt(num)) {
  while (i < num) {
    console.log(phrase);
    i++;
  }
} else {
  console.log('Missing number of occurrences');
}
