function runProgram(input) {
    input = input.trim().split("\n");
    array=[]
    for(var i=0;i<input.length;i++)
    {
        array.push(input[i].trim().split(" "))
    }
  // console.log(array)
  var count=0;
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length-2;j++)
        {
            if(array[i][j]=="x"&&array[i][j+1]=="x"&&array[i][j+2]=="x")
            {
                if(count==0)
                {
                    console.log("x")
                    count++
                    break;
                }
               
            }
            else if(array[i][j]=="o"&&array[i][j+1]=="o"&&array[i][j+2]=="o")
            {
                if(count==0)
                {
                    console.log("o")
                    count++
                    break;

                }
               
            }
        
           
         }   
        //  break;       
    }
    if(count==0)
    {
        vertical()
    }
   
    function vertical()
    {
        for(var i=0;i<array.length-2;i++)
        {
            for(var j=0;j<array.length;j++)
            {
                if(array[i][j]=="x"&&array[i+1][j]=="x"&&array[i+2][j]=="x")
                {
                    if(count==0)
                    {
                        console.log("x")
                        count++
                        break;
                    }
                }
                else if(array[i][j]=="o"&&array[i+1][j]=="o"&&array[i+2][j]=="o")
                {
                    if(count==0)
                    {
                        console.log("o")
                        count++
                        break;
    
                    }
                }
               
             
            }
           //  break;
        }
       
    }
    if(count==0)
    {
        
            dai()   
    }

    function dai()
    {
        for(var i=0;i<array.length-2;i++)
        {
            for(var j=0;j<array.length-2;j++)
            {
                if(array[i][j]=="x"&&array[i+1][j+1]=="x"&&array[i+2][j+2]=="x")
                {
                    if(count==0)
                    {
                        console.log("x")
                        count++
                        break;
                    }
                }
                else if(array[i][j]=="o"&&array[i+1][j+2]=="o"&&array[i+2][j+2]=="o")
                {
                    if(count==0)
                {
                    console.log("o")
                    count++
                    break;

                }
                }
             
           
            }
         //   break;
          
        }
    }
    if(count==0)
    {
    
            antidai()
    
        
    }

    function antidai()
    {
        for(var i=array.length-1;i>1;i--)
        {
            for( j=0;j<array.length-2;j++)
            {
                if(array[i][j]=="x"&&array[i-1][j+1]=="x"&&array[i-2][j+2]=="x")
                {
                    if(count==0)
                    {
                        console.log("x")
                        count++
                        break;
                    }
                }
                else if(array[i][j]=="o"&&array[i-1][j+1]=="o"&&array[i-2][j+2]=="o")
                {
                    if(count==0)
                    {
                        console.log("o")
                        count++
                        break;
    
                    }
                }
            
                
            }
          //  break;
            
        }
    }
    if(count==0)
    {

            console.log("Tie")
        
    }

}
if (process.env.USER === "kaustubhmendhe") {
    runProgram(`x o x
    o x x
    o o o
`);
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