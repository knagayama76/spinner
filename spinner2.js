"use strict";
// process.stdout.write("hello from spinner1.js... \rheyyy\n");

const spinPosition = ["|", "/", "-", "\\", "|", "/", "-", "|"];

let time = 100;
for (const position of spinPosition) {
  setTimeout(() => {
    process.stdout.write(`\r${position}   `);
  }, time);
  time += 200;
}
