#!/usr/bin/node
// script reverses a list
exports.esrever = function (input) {
  const ret = new Array;
  for (let i = input.length - 1; i >= 0; i--) {
    ret.push(input[i]);
  }
  return ret;
};
