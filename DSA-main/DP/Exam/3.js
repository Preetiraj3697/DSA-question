function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    let el=+input[0].trim()
    let arr=input[1].trim().split(" ").map(Number)
    let target=+input[2].trim()
    let flag=false
    for(let i=0;i<el;i++)
    {
        let obj={}
        sum=arr[i]
        if(obj[arr[i]]==undefined)
        {
            obj[arr[i]]=1
        }
      for(let j=i+1;j<el;j++)
      {
        if(obj[arr[j]]==undefined)
        {
            obj[arr[j]]=1
        }
        else
        {
            obj[arr[j]]++
        }
          if(obj[arr[i]]==1)
          {
              sum+=arr[j]
              if(sum%2===1)
              {
                  console.log("True")
                  flag=true
                  break;
              }
          }
      }
      if(flag===true)
      {
          break
      }
    }
    if(flag==false)
    {
        console.log("False")
    }
 
}

  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`3
    2 2 2
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