function runProgram(input) {
    var input = input.trim().split("\n")
    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].trim().split(" ").map(Number)
    }   
    let capacity=input[0]
    let el=input[1]
    let value=input[2]
    let weight=input[3]
    //console.log(capacity,value,weight)
    let ratio=[]

    for(i=0;i<el;i++)
    {
        ratio.push([value[i]/weight[i],i])
    }
     ratio.sort((a,b)=>(b[0]-a[0]))
     //console.log(ratio)
     let weightSum=0;
     let start=0;

     while(start<el && capacity>0)
     {
         let i=ratio[start][1]
        // console.log(weight[i])
         if(weight[i]<=capacity)
         {
             weightSum+=value[i]
             capacity-=weight[i]
            // console.log(weightSum,capacity)
         }
         else
         {
             let fraction=value[i]/weight[i]
             let ans=fraction*capacity;
             weightSum+=ans;
             capacity=0
         }
         start++
     }
     console.log(Math.round(weightSum))
    }

if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`201
    8
    96 23 12 7 58 100 32 2
    90 51 20 23 4 100 21 58`)
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
  