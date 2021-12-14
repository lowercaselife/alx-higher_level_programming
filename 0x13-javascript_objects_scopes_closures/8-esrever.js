#!/usr/bin/node
// script reverses a list
exports.esrever = function (list) {
  return list.map((item, idx) => list[list.length - 1 - idx]);
};
