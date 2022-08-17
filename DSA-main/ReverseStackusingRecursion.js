function runProgram(input) {
    input = input.trim().split("\n");
   for(let i=0;i<input.length;i++)
   {
       input[i]=+input[i].trim()
   }
   //console.log(input)
   reverseStack(input)
   //console.log(arr)
   for(let i=0;i<arr.length;i++)
   {
       if(arr[i]!==-1)
       {
           console.log(arr[i])
       }

   }
}
let arr=[]
function reverseStack(input)
{
    if(input.length===0) return
    let x=input.pop()
    //console.log(x)
    arr.push(x)
    reverseStack(input)
}

  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`1
    2
    3
    4
    -1`)
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
  