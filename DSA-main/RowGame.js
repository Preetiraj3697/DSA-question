function runProgram(input) {
    input = input.trim().split(/[\r\n]+/)
    var arr = []
    for (var i = 0; i < input.length; i++) {
      arr.push(input[i].trim().split(" ").map(Number))
    }
    //console.log(arr)
    var [test] = arr[0]
    arr.shift()
  
    for (var i = 0; i < test; i++) {
      var [row, col] = arr[0]
      arr.shift()
      var main = {}
      var count = 0;
      for (var j = 0; j < row; j++) {
        var str = {}
        for (var k = 0; k < col; k++) {
          // str=str+arr[j][k]+" "
          var num = arr[j][k]
          if (str[num] === undefined) {
            str[num] = 1
          }
        }
        for (let key in str) {
          if (main[key] == undefined) {
            main[key] = 1
          }
          else {
            main[key]++
          }
          if (main[key] == row) {
            count++
          }
        }
      }
      //  console.log(main)
  
      console.log(count)
      for (var j = 0; j < row; j++) {
        arr.shift()
      }
  
  
    }
  
  
  }
  
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
      3 3
      1 2 2
      1 3 1
      1 2 1
      3 3
      1 2 3
      1 1 3
      1 2 3`);
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