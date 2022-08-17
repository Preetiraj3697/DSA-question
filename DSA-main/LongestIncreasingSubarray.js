function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for(let i =0; i<input.length; i++){
        input[i] = input[i].trim().split(" ").map(Number);
    }
 //  console.log(input)
 const test=input[0]
 let line=1;
 for(let i=0;i<test;i++)
 {
   let el=input[line++]
   let arr=input[line++]
 console.log(LongLenght(el,arr))
 }
 function LongLenght(el,arr)
{
   //console.log(el,arr)
   const obj = {};
  
   for (let i = 0; i < el; i++) {
    var sum=0
     if (obj[arr[i]] === undefined) {
       obj[target - arr[i]] = 0;
     } else {
       return '1';
     }
   }
   return '-1';
}

  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
    2
    1 1
    6
    1 2 1 2 3 1`)
  }
  else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "")
        runProgram(read);
        process.exit(0);
    });
  }