// TC=o[n*m]
function runProgram(input) {
    input=input.trim().split("\n")
    const test=+input[0]
   // console.log(test)
    var line=1
    for(let i=0;i<test;i++)
    {
       var el=+input[line++]
       var str=input[line++].trim().split("")
       var target=input[line++].trim()
       var count=0;
       //console.log(el,target,str)
       for(let j=0;j<el;j++)
       {
           if(str[j]===target)
           {
              count=count+el-j
              // console.log(count)
           }
       }
       console.log(count)
    }
   }
   if (process.env.USER === "kaustubhmendhe") {
     runProgram(`1
     4
     aman
     a`);
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