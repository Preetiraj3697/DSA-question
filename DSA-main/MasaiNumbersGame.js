function runProgram(input) {
  input = input.trim().split('\n')
  let test = +input[0].trim()
  input.shift()
  for (let i = 0; i < input.length; i++) {
    input[i] = +input[i].trim()
  }
   //console.log(input)
  let stack = []
  let ans=[];
  for(let i=test-1;i>=0;i--)
  {
      if(stack.length===0)
      {
          ans.push(-1)
      }
      else if(stack.length>0 && stack[stack.length-1]>input[i])
      {
        // console.log(input[i],stack[stack.length-1])
        ans.push(stack[stack.length-1])
      }
      else if(stack.length>0 && stack[stack.length-1]<=input[i])
      {
          while(stack.length>0 && stack[stack.length-1]<=input[i])
          {
              stack.pop()
          }
          if(stack.length==0)
          {
              ans.push(-1)
          }
          else
          {
            ans.push(stack[stack.length-1])
          }
      }
      stack.push(input[i])
  }
  console.log(ans.reverse())
}

if (process.env.USER === 'kaustubhmendhe') {
  runProgram(`8
    3
    7
    1
    7
    8
    4
    5
    2`)
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
