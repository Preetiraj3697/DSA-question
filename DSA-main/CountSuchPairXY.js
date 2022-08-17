function runProgram(input) {
    input = input.trim().split(' ').map(Number)
    let [n,m]=input
    let count=0
    for(let i=0;i<=n;i++)
    {
        for(let j=0;j<=m;j++)
        {
            if((i**2+j==n)&&(j**2+i==m))
            {
              //  console.log(i,j)
                count++
            }
        }
    }
    console.log(count)
  }
 
 
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`1 1`)
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
  