function runProgram(input) {
    input = input.trim().split('\n')
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(' ').map(Number)
      }
   let [row,col]=input[0]
   let target=+input[row+1].toString()
   input.shift()
  // console.log(row,col,target)
  for(let i=0;i<row;i++)
  {
      for(let j=0;j<col;j++)
      {
          if(input[i][j]==target)
          {
              printD(i,j)
          }
      }
  }
  function printD(r,c)
  {
    let str=""
    for(let i=0;i<row;i++)
    {
        for(let j=0;j<col;j++)
        {
            if(i-j==r-c)
            {
              str+=input[i][j]+" "
            }
        }
    }
    console.log(str)
      str=""
      for(let i=0;i<row;i++)
      {
          for(let j=0;j<col;j++)
          {
              if(i+j==r+c)
              {
                str+=input[i][j]+" "
              }
          }
      }
      console.log(str)
  }
  }
 
 
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`3 3
    1 2 3
    4 5 6
    7 8 9
    6`)
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
  