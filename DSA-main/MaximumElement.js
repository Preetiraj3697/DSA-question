// TC=o[n*m]
function runProgram(input) {
  input=input.trim().split("\n")
  for(let i=0;i<input.length;i++)
  {
      input[i]=input[i].trim().split(" ").map(Number)
  }
  //console.log(input)
  let test=input[0]
  input.shift()
  const stack=[]
  var max=[];
  
  for(let i=0;i<test;i++)
  {
      let x=input[i]
      var flag=false
       if(x[0]==1)
       {
           stack.push(x[1])
           if(max[max.length-1]<=x[1]||max[max.length-1]===undefined)
           {
               max.push(x[1])
           }
       }
       else if(x[0]==2)
       {  
           if(stack[stack.length-1]==max[max.length-1])
           {
              flag=true
           }
           stack.pop()
           if(flag===true)
           {
               max.pop()
           }
       }
      else if(x[0]==3)
      {
         console.log(max[max.length-1])  
      }
  } 
}


     if (process.env.USER === "kaustubhmendhe") {
       runProgram(`68
       1 1
       1 44
       3
       3
       2
       3
       3
       1 3
       1 37
       2
       3
       1 29
       3
       1 73
       1 51
       3
       3
       3
       1 70
       3
       1 8
       2
       1 49
       1 56
       1 81
       2
       1 59
       1 44
       2
       3
       3
       2
       3
       3
       1 4
       3
       1 89
       2
       1 37
       1 50
       1 64
       2
       1 49
       1 35
       1 85
       3
       1 41
       2
       3
       3
       1 86
       3
       1 60
       1 8
       3
       1 100
       3
       1 83
       3
       1 47
       2
       1 78
       2
       1 55
       1 97
       2
       3
       1 40`);
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