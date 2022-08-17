function runProgram(input) {
  input = input.trim().split('\n');
  const size = Number(input[0]);
  const arr = input[1].trim().split(' ').map(Number);
  const stack = [];
  let str = '';
  for (let i = 0; i < size; i++) {
    if (stack.length === 0) {
      str += '-1' + ' ';
      stack.push(arr[i]);
      continue;
    }
    for (let j = stack.length - 1; j >= 0; j--) {
      if (stack[j] < arr[i]) {
        str += stack[j] + ' ';
        break;
      }
      stack.pop();
    }
    if (stack.length === 0) {
      str += '-1' + ' ';
    }
    stack.push(arr[i]);
  }
  console.log(str);
}
 
 if (process.env.USER === "kaustubhmendhe") {
   runProgram(`8
   39 27 11 4 24 32 32 1`);
 } else {
   process.stdin.resume();
   process.stdin.setEncoding("ascii");
   let read = "";
   process.stdin.on("data", function (input) {
     read += input;
   });
   process.stdin.on("end", function () {
     read = read.replace(/\n$/, "");
     read = read.replace(/\n$/, "");
     runProgram(read);
   });
   process.on("SIGINT", function () {
     read = read.replace(/\n$/, "");
     runProgram(read);
     process.exit(0);
   });
 }