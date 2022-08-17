function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/);
    for(var i =0; i<input.length; i++){
        input[i] = input[i].trim().split(" ").map(Number);
    }
    let [el,k]=input[0]
    let arr=input[1]
    isSubarray(el,k,arr)
   
  }
  function isSubarray(el,k,arr){
      let stack=[]
   for(let i=0;i<el;i++)
   {
       let sum=0
       let count=0
       for(let j=i+1;j<el;j++)
       {
            sum+=arr[j]
            count++
            if(sum%3>0)
            {
              stack.push([count,sum%3])
            }
       }
   }
   let max=stack[0][1]
   for(let i=0;i<stack.length;i++)
   {
        if(stack[i][1]<stack[i][1])
        {
            max=stack[i][0]
        }
   }
   console.log(max)
    
  }
  if (process.env.USER === "kaustubhmendhe") {
    runProgram(`4 3
    2 3 4 6`)
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