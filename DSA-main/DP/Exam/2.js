function runProgram(input) {
    input = input.trim().split(/[\r+\n]+/)
    for(let i=0;i<input.length;i++)
    {
        input[i]=input[i].trim().split(" ").map(Number)
    }
    let test=input[0]
    input.shift()
    for(let i=0;i<test;i++)
    {
        let [row,col]=input[0]
        let target=+input[row+1].toString()
        let flag=false
        input.shift()
        //console.log(row,col,target)
        for(let j=0;j<row;j++)
        {
            for(let k=0;k<col;k++)
            {
               // console.log(input[j][k])
                if(input[j][k]===target)
                {
                    console.log(true)
                    flag=true
                    break;
                }
            }
            if(flag==true)
            {
                break;
            }
        }
        if(flag==false)
        {
            console.log(false)
        }
       // console.log(row,col,target)
        for(let j=0;j<row+1;j++)
        {
            input.shift()
        }
    }

}
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`2
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    13
    4 4
    1 2 3 4
    5 6 7 8
    9 10 11 12
    13 14 15 16 
    17`)
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