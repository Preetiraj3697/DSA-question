function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
   let el=input[0]
   let arr=input[1];
   
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`9
    10 22 9 33 21 50 41 60 80`)
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
  