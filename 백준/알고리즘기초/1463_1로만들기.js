const solution = (line) => {
  let arr = [];
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i <= line; i++) {
    arr[i] = arr[i - 1] + 1;
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 3] + 1)
    }
    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i], arr[i / 2] + 1)
    }
  }
  return arr[line]
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', function (line) {
  console.log(solution(+line));
  rl.close();
}).on('close', function () {
  process.exit();
});