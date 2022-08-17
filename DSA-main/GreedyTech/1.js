function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let bricks = input[1]
    let n = input[0]
    maxLevel(bricks, n)
  }
  function maxLevel(bricks, n) {
    bricks.sort((a,b)=>a-b)
    //console.log(bricks)
  
    let ans = 1
    let width = bricks[0]
    let count = 1
    let newCount = 0
    let newWidth = 0
    for (let i = 1; i < n; i++) {
      newWidth += bricks[i]
      newCount += 1.
      if (newWidth > width && newCount > count) {
    
        width = newWidth
        count = newCount
 
        newCount = 0
        newWidth = 0
        ans++
      }
    }
  
    console.log(ans)
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`4
    40 100 20 30`)
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
  