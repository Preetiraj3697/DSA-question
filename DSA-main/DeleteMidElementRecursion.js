function runProgram(input) {
    var input = input.trim().split(" ").map(Number)
    if(input.length==0)
    {
       console.log(input)
    }
    else
    {
       let mid=Math.floor((input.length)/2)+1
       sortArr(input,mid)
       console.log(input)
    }

  }
  function sortArr(arr,mid)
  {

      if(mid==1)
      {
          arr.pop()
          return
      }
      let temp=arr[arr.length-1] 
      arr.pop()
      sortArr(arr,mid-1)
      arr.push(temp)
      return
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`1 2 3 4 5`)
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
  