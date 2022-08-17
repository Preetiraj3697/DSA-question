function runProgram(input) {
    input = input.trim().split("\n")
    var el=+input[0].trim();
    var arr=input[1].trim().split(" ").map(Number)
  // console.log(el,arr)
  
   for(var i=0;i<el;i++)
   {
     var index=i;
     var  minimum=arr[i]
       // console.log(minimum)
     for(var j=i+1;j<el;j++)
     {
       if(arr[j]<minimum)
       {
         minimum=arr[j]
         index=j
       }  
     }
     var temp=minimum
     arr[index]=arr[i]
     arr[i]=temp
   }
  //console.log(arr)
   var str=""
   for(var i=0;i<arr.length;i++)
   {
       str=str+arr[i]+" "
   }
   console.log(str.trim())
  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`5
    3 5 0 9 8`);
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