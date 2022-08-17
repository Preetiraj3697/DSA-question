function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(' ').map(Number)
      }
    let [row,col]=input[0]
    input.shift()
    let str=""
    for(let i=0;i<row;i++)
    {
        if(i%2==0)
        {
            for(let j=col-1;j>=0;j--)
            {
                str+=input[i][j]+" "
            }
        }
        else
        {
            for(let j=0;j<col;j++)
            {
                str+=input[i][j]+" "
            }
        }
    }
   console.log(str)
  }
 
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`5 5
    4 7 1 1 7
    8 9 9 6 1
    6 4 9 5 1
    7 7 4 7 7
    8 6 2 5 5`)
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
  