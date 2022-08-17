function runProgram(input) {
    input = input.trim().split('\n')
    let test = +input[0].trim()

    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
   let line=1
    for(let i=0;i<test;i++)
    {
       let el=input[line++]
       let arr=input[line++]
       capacity(arr,el)
    }
  
  }
  function capacity(arr,el)
  {
     // console.log(arr,el)
     const stack=[]
     const index=[]
     for(let i=0;i<el;i++)
     {
        if(stack.length===0)
        {
            index.push(-1)
        }
        else if(stack.length>0 && stack[stack.length-1][0]>arr[i])
        {
            index.push(stack[stack.length-1][1])
        }
        else if(stack.length>0 && stack[stack.length-1][0]<=arr[i])
        {
           while(stack.length>0 && stack[stack.length-1][0]<=arr[i])
           {
               stack.pop()
           }
           if(stack.length===0)
           {
               index.push(-1)
           }
           else
           {
            index.push(stack[stack.length-1][1])
           }
        }
        stack.push([arr[i],i])
     }
    // console.log(index)
    let str=""
    for(let i=0;i<el;i++)
    {
        str+=Math.abs(index[i]-i)+" "
    }
    console.log(str)
  }

  
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`)
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
  