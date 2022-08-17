// TC=o[n*m]
function runProgram(input) {

    //ab+c-def-*g/+hij/*+
      input=input.trim().split("")
      const stack=[];
      for(let i=0;i<input.length;i++)
      {
          if(AlfaNumeric(input[i]))
          {
              stack.push(input[i])
             // console.log(stack)
          }
         
          else
          {
              var x=stack[stack.length-1]
              var y=stack[stack.length-2]
              stack.pop();
              stack.pop();
             // console.log(x,y)
              var z=x+input[i]+y
              stack.push(`)${z}(`)
          }
      }
      //console.log(stack)
      let str=stack[0].trim().split("")
       str=str.reverse()
      console.log(str.join(""))
     }
  
     function AlfaNumeric(a)
     {
       let string=a.toString();
       let result=string.charCodeAt(0);
       if(result>=48&&result<=57||result>=65&&result<=90||result>=97&&result<=122)
       {
         return true
       }
       else
       {
         return false
       }
     }

     if (process.env.USER === "kaustubhmendhe") {
       runProgram(`ab+c-def-*g/+hij/*+`);
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