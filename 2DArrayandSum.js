function runProgram(input)
{
  input=input.trim().split(/[\r\n]+/)
  var array=[]
  for(var i=0;i<input.length;i++)
  {
      array.push(input[i].split(" ").map(Number))
  }
  var count=0;
  for(var i=1;i<=array[0][0];i++)
  {
      var sum=0;
      for(var j=0;j<array[0][1];j++)
      {
          sum=sum+array[i][j]
          
       //  console.log(array[i][j])
      }
    //   console.log(sum)
    //   console.log()
      if(sum==array[0][2])
      {
          count++
      }
  }
  for(var i=0;i<array[0][1];i++)
  {
      var sum=0
      for(var j=1;j<=array[0][0];j++)
      {
          sum=sum+array[j][i]
         // console.log(array[j][i])
      }
      if(sum==array[0][2])
      {
          count++
      }
  }
   
  var sum=0;
  for(var i=1;i<=array[0][0];i++)
  {
      
      for(var j=0;j<array[0][1];j++)
      {
          if(i-1==j)
          {
           // console.log(array[i][j])
            sum=sum+array[i][j]
           
          }    
      }
    //  console.log(sum)
    //   console.log()
      if(sum==array[0][2])
      {
          count++
      }
  }
var count1=0;
var sum=0;
for(var i=1;i<=array[0][0];i++)
  {
      
      for(var j=array[0][1]-1;j>=0;j--)
      {
           if(count1==i-1)
           {
           // console.log(array[i][j])
            sum=sum+array[i][j]
            break;
           }
            
      }
      count1++
    //  console.log(sum)
    //   console.log()
      if(sum==array[0][2])
      {
          count++
      }
  }


  console.log(count)

}


process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});


// 4 4 11
// 1 2 1 8
// 2 2 8 6
// 8 1 2 5
// 2 5 8 6    === 7

// 5 5 10
// 3 2 5 3 2
// 5 2 5 5 3
// 2 2 2 4 5
// 3 3 4 7 3
// 5 2 5 3 2  ====17



// 8 8 8
// 4 4 2 2 4 1 4 4
// 3 4 1 1 1 3 4 5
// 3 3 5 1 3 1 5 1
// 2 3 1 4 3 4 4 5
// 2 3 1 5 1 1 5 5
// 2 2 2 1 4 2 3 2
// 1 2 4 3 5 3 1 5
// 2 5 2 5 3 3 2 4   =====22