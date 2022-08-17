function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for (var i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    let test=input[0]
    let line=1;
    for(let i=0;i<test;i++)
    {
      let [el,target]=input[line++]
      let arr=input[line++]
      arr.sort((a,b)=>b-a)
      let count=0
      for(let j=0;j<target;j++)
      {
        count++
      }
      for(let j=target;j<el;j++)
      {
        if(arr[j]===arr[target])
        {
          count++
        }
      }
      console.log(count)
    }
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`1
    5 3
    2 2 2 2 1`)
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
  