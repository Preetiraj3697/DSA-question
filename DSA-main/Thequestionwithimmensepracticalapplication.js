function runProgram(input) {
    input = input.trim().split('\n')
    let test=+input[0].trim()
    let line=1;
    for(let i=0;i<test;i++)
    {
        let give=input[line++].trim()
        let out=input[line++].trim()
        let x=edit(give,out,give.length,out.length)
        console.log(x)
    }
  }
  function edit(str1,str2,n1,n2)
  {
    if(n1==0) return n2
    if(n2==0) return n1
      //console.log(str1,str2,n1,n2)
      if(str1[n1-1]===str2[n2-1])
      {
          return edit(str1,str2,n1-1,n2-1)
      }
      
      else
      {
          return 1+Math.min(edit(str1,str2,n1,n2-1),edit(str1,str2,n1-1,n2),
          edit(str1,str2,n1-1,n2-1))
      }
  }
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde`)
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
  