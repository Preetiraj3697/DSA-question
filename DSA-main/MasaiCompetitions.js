// TC=o[n*m]
function runProgram(input) {
  input = input.trim().split('\n');
  const operations = +input[0];
  let queue = [];
  for (let i = 1; i <= operations; i++) {
    const arr = input[i].trim().split(' ');
    if (arr[0] === 'D') {
      console.log(queue[0][0][0] + ' ' + queue[0][0][1]);
      queue[0].shift();
      for (let j = 0; j < queue.length; j++) {
        let other = [];
        if (queue[j].length === 0) {
          for (let k = 0; k < queue.length; k++) {
            if (k === j) {
              continue;
            }
            other.push(queue[k]);
          }
          queue = other;
        }
      }
    } else if (arr[0] === 'E') {
      if (queue.length === 0) {
        queue.push([[arr[1], arr[2]]]);
      } else {
        let flag = 0;
        for (let j = 0; j < queue.length; j++) {
          if (queue[j][0][0][0] === arr[1]) {
            flag = 1;
            queue[j].push([arr[1], arr[2]]);
          }
        }
        if (!flag) {
          queue.push([[arr[1], arr[2]]]);
        }
      }
    }
  }
   }
   if (process.env.USER === "kaustubhmendhe") {
     runProgram(`24
     E 3 1
     D
     E 3 1
     E 3 2
     E 2 1
     D
     D
     E 1 1
     E 1 2
     E 4 1
     D
     E 4 2
     E 1 3
     E 2 1
     D
     D
     D
     D
     E 2 2
     E 2 3
     E 2 4
     E 4 1
     E 1 1
     D`);
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