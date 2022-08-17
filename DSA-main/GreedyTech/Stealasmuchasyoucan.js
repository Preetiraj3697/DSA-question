function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let target=input[0]
    let el=input[1]
    let value=input[2]
    let weight=input[3]
    let arr=[]
    for(let i=0;i<el;i++)
    {
      
    }
  }
  
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`50 
    3
    60 100 120 
    10 20 30`)
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
  