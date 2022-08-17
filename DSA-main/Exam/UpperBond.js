//Enter code here
function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    // console.log(input)
    let line=0
    let el =input[line++]
    let arr=input[line++]
    arr.sort((a,b)=>a-b)
    let test=input[line++]
    for(let i=0;i<test;i++)
    {
        let target=input[line++]
        let low=0;
        let high=el-1;
        let ans=-1
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2)
            if(high<=low)
            {
                console.log(mid+1)
            }
           if (arr[mid] === target) {
              ans = mid
              console.log(ans)
              break
            } else if (arr[mid] > target) high = mid - 1
            else low=mid+1
          }
    }
 
  }

  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`5
    1 4 10 5 6
    4
    2
    3
    5
    11`)
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
  