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
   console.log(stack(el,arr))
 }
 function stack(el,arr)
 {
  // console.log(el,arr)
   var str="";
   let stackTop=[];
   for(let i=el-1;i>=0;i--)
   {
     if(stackTop.length===0)
     {
       str+=("1-")+" ";
       stackTop.push(arr[i])  
      // console.log(stackTop)
       continue; 
     }
     for(var j=stackTop.length-1;j>=0;j--)
     {
       if(stackTop[j]>arr[i])
       {
         str+=stackTop[j]+" "
         break
       }
       stackTop.pop()
     //  console.log(stackTop)
     
     }
     if(stackTop.length===0)
     {
       str+=("1-")+" ";
     }
     stackTop.push(arr[i])
     //console.log(stackTop)
  }
  var str1=""
  for(i=str.length-1;i>=0;i--)
  {
    str1+=str[i]
  }
  return str1


 }

  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`2
    4
    1 3 2 4
    6
    2 4 5 6 8 9`)
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