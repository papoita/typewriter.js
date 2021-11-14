/** @format */

const typewriter = function(sentence) {
  let time = 0;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, time);
    time = time + 100;
  }
  setTimeout(() => {
    console.log("\n");
  }, sentence.length * 100);
};

typewriter("hello there from lighthouse labs");
