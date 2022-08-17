function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(' ').map(Number)
      }
    let [row,col]=input[0]
    input.shift()
    let str=""
    for(let i=col-1;i>=0;i--)
    {
       for(let j=0;j<row;j++)
       {
           str+=input[j][i]+" "
       }
    }
   console.log(str)
  }
 
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`4 3
    1 8 9
    2 7 10
    3 6 11
    4 5 12`)
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
  