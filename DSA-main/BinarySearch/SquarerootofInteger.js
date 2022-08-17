function runProgram(input) {
    input = input.trim().split('\n')
     for(let i=0;i<input.length;i++)
     {
         input[i]=+input[i].trim()
     }
     //console.log(input)
     let test=input[0]
     let line=1;
     for(let i=0;i<test;i++)
     {
         let x=input[line++]
        // console.log(Math.floor(Math.sqrt(x)))
        SqNum(low=1,high=x,x)
     }
  }
  function SqNum(low, high,key) {
    let mid = low + Math.floor((high - low) / 2)
    if (high < low) {
      console.log(mid)
       return
     }
    
    if (mid*mid === key) {
      console.log(mid)
    } else if (mid*mid < key) {
      SqNum( mid + 1, high, key)
    } else {
      SqNum(low, mid - 1, key)
    }
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`2
    4
    8`)
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
  