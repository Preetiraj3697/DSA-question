function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    //console.log(input)
    let [target,el] = input[0]
    let arr = input[1]
    //console.log(target,el,arr)
  // console.log(coin(arr,el,target,{}))
  console.log(coin(arr,el,target))
  }
   function coin(arr,el,sum)
   {
     let Min=arr[0]
    for(let i = 1 ;i<sum;i++ )
    {
      for(let j=0; j<el-1;j++)
      {
        if(Min[i+j] > Min[i] + 1)
        {
          Min[i+j] = Min[i] + 1
        }
      }
    } 
       return Min[sum]
   }


    // function coin(arr, len, total, obj) {
    //     if (len <= 0 && total >= 1) return 0;
    //     if (total == 0) return 1;
    //     // if (obj[total]) return obj[total];
    //     if (total < 0) return 0;
    //     return coin(arr, len - 1, total, obj) + coin(arr, len, total - arr[len - 1], obj);
    // }


    /////---------------------------
  // function coin(arr,n,target)
  // {
  //   let i, j;
  //   let dp=[];
  //   for(let i=0;i<=n;i++)
  //   {
  //       let x=[]
  //     for(let j=0;j<=target;j++)
  //     {
  //       x.push(1)
  //     }
  //     dp.push(x)
  //   }
  //   for (i = 0; i <= n; i++)
  //   {
  //       for (j = 0; j <= target; j++)
  //       {
  //           if (j==0 && i==0)
  //               dp[i][j] = 0;
  //           else if (i>0 && j==0)
  //               dp[i][j]=1    
  //           else if (arr[i-1] <= j)
  //                 dp[i][j] =dp[i][j-arr[i-1]] + dp[i-1][j];
  //           else
  //                 dp[i][j] = dp[i-1][j];
  //       }
  //   }
  //   console.log(dp)
  //   return dp[n][target];
  // }
  
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`4 3
    1 2 3`)
  } else {
    process.stdin.resume()
    process.stdin.setEncoding('ascii')
    let read = ''
    process.stdin.on('data', function (input) {
      read += input
    })
    process.stdin.on('end', function () {
      read = read.replace(/\n$/, '')
      read = read.replace(/\n$/, '')
      runProgram(read)
    })
    process.on('SIGINT', function () {
      read = read.replace(/\n$/, '')
      runProgram(read)
      process.exit(0)
    })
  }