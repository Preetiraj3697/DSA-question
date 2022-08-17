// function runProgram(input) {
//     input = input.trim().split('\n')
    
//     for (let i = 0; i < input.length; i++) {
//       input[i] = input[i].trim().split(' ').map(Number)
//     }
//     let test=input[0]
//     let line=1
//     for(j=0;j<test;j++)
//     {
//         let [el, target] = input[line++]
//         let arr = input[line++]
//         let RemainSum=0
//         for(let i=0;i<el;i++)
//         {
//             RemainSum+=arr[i]
//         }
//         let CurrentSum=0;
//         var x=0
//         let ans=Solve(arr,x,CurrentSum,RemainSum,target)
//         if(ans===true)
//         {
//             console.log(1)
//         }
//         else
//         {
//             console.log(-1)
//         }
//     }
   
//   }
//  function Solve(arr,i,c,r,k)
//  {
//      if(c===k) 
//      {
//          return true
//      }
//      if(c>k)
//      {
//          return false
//      }
//      if((c+r)<k)
//      {
//          return false
//      }
//      if(i===arr.length)
//      {
//          return false
//      }
//      return Solve(arr,i+1,c+arr[i],r-arr[i],k) || Solve(arr,i+1,c,r-arr[i],k)
//  }
 function runProgram(input) {
  var input = input.trim().split("\n")
  for (let i = 0; i < input.length; i++) {
      input[i] = input[i].trim().split(" ").map(Number)
  }
  let test=input[0]
 
  let line = 1
  for (let j = 0; j < test; j++) {
      let [el, sum] = input[line++]
      let arr = input[line++]
      newArr = arr.sort((a, b) => a - b)
      let i = 0
      if (el == 1) {
          console.log(-1)
      } else {
          while (i + 1 < el) {
              if (newArr[i] + newArr[el - 1] == sum) {
                  console.log(1)
                  break;
              }
              if (newArr[i] + newArr[el - 1] > sum) {
                  el--
              } else if (newArr[i] + newArr[el - 1] < sum) {
                  i++
              }
              if (i + 1 == el) {
                  console.log(-1)
                  break
              }
          }
      }
  }

}
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`10
    3 -9
    -1 3 -1
    10 -13
    -7 -6 4 10 -5 0 -3 1 -6 5
    4 -9
    -2 2 0 -4
    2 3
    0 0
    8 2
    5 -6 7 6 0 3 -4 8
    1 -7
    0
    8 -6
    4 7 4 -1 5 4 -6 -8
    6 4
    6 -1 -5 -5 2 -5
    4 -4
    0 -1 3 -2
    1 3
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
  