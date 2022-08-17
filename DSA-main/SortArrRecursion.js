function runProgram(input) {
    var input = input.trim().split(" ").map(Number)
   // console.log(input)
    sortArr(input)
   console.log(input)
  }
  function sortArr(arr)
  {
      //console.log(arr)
      if(arr.length===1)
      {
          return 
      }
      let temp=arr[arr.length-1] 
      arr.pop()
      sortArr(arr)
     // console.log(temp)
      insertArr(arr,temp) 
  }
  function insertArr(arr,temp)
  {
      if(arr.length===0 || arr[arr.length-1]<=temp)
      {
          arr.push(temp)
          return
      }
      let value=arr[arr.length-1]
      arr.pop()
      insertArr(arr,temp)
      arr.push(value)
      return
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`4 1 3 5 2 0`)
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
  