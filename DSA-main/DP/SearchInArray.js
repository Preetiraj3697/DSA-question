function runProgram(input) {
    input = input.trim().split('\n')
  
    for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(' ').map(Number)
    }
    // console.log(input)
      const[el,target]=input[0]
      let arr=input[1]
      let high = el - 1
      let low = 0
      while (low <= high) {
        let mid=Math.floor((high + low)/2)
        let mid_val = arr[mid]
        let next = (mid + 1) % high
        let prev = (mid + high - 1) % high
        if (mid_val < arr[next] && mid_val < arr[prev]) {
          if(mid_val<=target && arr[el-1]>=target)
          {
              for(i=mid;i<el;i++)
              {
                  if(arr[i]==target)
                  {
                      console.log(i)
                  }
                  else
                  {
                      console.log(-1)
                  }
              }

          }
         else if(arr[0]<=target && arr[mid-1]>=target)
          {
              for(i=0;i<mid;i++)
              {
                  if(arr[i]==target)
                  {
                      console.log(i)
                  }
                  else
                  {
                      console.log(-1)
                  }
              }

          }
        }
        if (mid_val > arr[low]) {
          low = mid + 1
        } else if (mid_val < arr[high]) {
          high = mid - 1
        }
      }

  }

  
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`10 -1
    4 6 7 9 10 -1 0 1 2 3`)
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
  