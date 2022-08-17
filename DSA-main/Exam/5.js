//Enter code here
function runProgram(input) {
    input = input.trim().split('\n')
     let el=+input[0].trim()
     let str=input[1].trim()
     maxSub(el,str)
  }
function maxSub(el,str)
{
    let char="a";
    let arr=[];

    for(let i=0;i<el;i++)
    {
        if(str[i]>=char)
        {
            char=str[i]
            arr.push(i)
        }
    }

    let maxAns="";
    for(let i=0;i<arr.length;i++)
    {
        if(str.substring(arr[i],el)>maxAns)
        {
            maxAns=str.substring(arr[i],el)
        }
    }
    console.log(maxAns)
}
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`6
    ababaa`)
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
  