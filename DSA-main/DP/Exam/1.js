function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for(let i=0;i<input.length;i++)
    {
        input[i]=input[i].trim().split(" ").map(Number)
    }
    //console.log(input)
    let test=input[0]
    let line=1;
    for(let i=0;i<test;i++)
    {
        let el=input[line++]
        let arr=input[line++]
      let x =  minCost(arr,el)
      console.log(x)

    }
}
function minCost(arr,el)
{
    if(el<=1)
    {
        return 0
    }
    if(arr[0]==0)
    {
        return 0
    }
    let cost=0;
    for(let i=1;i<el;i++)
    {
       if(arr[i]>1)
       {
           cost++
           i++
       }
       else if(arr[i]==1){
           cost++
       }
       else
       {
           return cost
       }
    }
    if(cost>0)
    {
        return cost
    }
    return 0
}
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`2
    4
    0 0 0 0
    10
    1 100 1 1 1 100 1 1 100 1`)
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