function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    let el=+input[0]
    let arr=input[1].trim().split(' ').map(Number)
    let target=+input[2]
   // console.log(el,arr,target)
    let high=el-1;
    let low=0;
    let LowerCount=-1;
    let UpperCount=-1;
    while(low<=high)
    {
        let mid=low+Math.floor((high-low)/2)
        let mid_val=arr[mid]
        if(mid_val===target)
        {
            LowerCount=mid
            high=mid-1;
        }
        else if(target<mid_val)
        {
            high=mid-1
        }
        else
        {
            low=mid+1
        }
    }
    //console.log("Hi")
    high=el-1;
    low=0
    while(low<=high)
    {
        let mid=low+Math.floor((high-low)/2)
        //console.log("Hi")
        let mid_val=arr[mid]
        if(mid_val===target)
        {
            UpperCount=mid
           // console.log(UpperCount)
            low=mid+1;
        }
        else if(target<mid_val)
        {
            high=mid-1
        }
        else
        {
            low=mid+1
        }
    }
    console.log(LowerCount,UpperCount,UpperCount+1-LowerCount)

  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`6
    1 1 1 2 2 2	
    1`)
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
  