
function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }
    let test=input[0]
    let line = 1
    for (let j = 0; j < test; j++) {
        let el = input[line++]
        let arr = input[line++]
        let i = 0
        let count=0
        for(let i=0;i<el;i++)
        {
            for(let j=i+1;j<el;j++)
            {
                let sum=0;
                sum+=arr[i]+arr[j]
                if(Isprime(sum))
                {
                    count++
                }
            }
        }
        console.log(count)
    }
    function Isprime(num)
    {
        for(let i=2;i<num;i++)
        {
           if(num%i==0)
           {
              return false
           }
           
        }
        return true
    }
  
  }
    if (process.env.USER === 'kaustubhmendhe') {
      runProgram(`2
      3
      1 2 3
      5
      2 2 2 2 1`)
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
    