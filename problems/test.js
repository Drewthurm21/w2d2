const rec_sum = (n) => {
  console.log(`Pushing stack where n = ${n}`);
  if (n <= 1) {
    console.log("Base case reached. Starting Stack 'popping'");
    console.log(`Popping stack where n = ${n} result: 1`);
    return 1;
  }
  // console.log("I'm recursing!");
  let result = rec_sum(n - 1);
  console.log(`Popping stack where n = ${n} result: ${n} + ${result} = ${n + result}`);
  return n + result;
};
console.log(`Final result:`, rec_sum(20));