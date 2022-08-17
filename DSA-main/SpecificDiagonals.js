function runProgram(input) {
    input= input.trim().split("\n")
  
    for(var i=0;i<input.length;i++)
    {
        input[i]=input[i].trim().split(" ").map(Number)
    }
    // console.log(input)
    const [row,col]=input[0]
    input.shift()
    const target=input[row]
    //console.log(row,col,target)

    for(var i=0;i<row;i++)
    {
        for(var j=0;j<col;j++)
        {
            if(input[i][j]==target)
            {
               // console.log(i,j)
                callD(i,j)
                callD2(i,j)
            }
        }
    }
  
   
    function callD(r,c) {
        var str=""
        for(var i=0;i<row;i++)
        {
            for(var j=0;j<col;j++)
            {
                if(i-j==r-c)
                {
                 str=str+input[i][j]+" "
                }
            }
        }
        console.log(str)
    }
    function callD2(r,c) {
        var str=""
        for(var i=0;i<row;i++)
        {
            for(var j=0;j<col;j++)
            {
                if(i+j==r+c)
                {
                 str=str+input[i][j]+" "
                }
            }
        }
        console.log(str)
    }


}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`);
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