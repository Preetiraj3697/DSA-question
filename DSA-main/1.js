//Enter code here
function runProgram(input) {
  input = input.trim().split('\n')

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(' ').map(Number)
  }
  // console.log(input)
  let line = 0
  let el = input[line++]
  let arr = input[line++]
  let test = input[line++]
  arr.sort((a, b) => a - b)
  for (let i = 0; i < test; i++) {
    //console.log(input[line++])
    let x = input[line++]
    let low = 0
    let high = el - 1
    let key = x[1]
    let val = x[0]
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2)
      let mid_val = arr[mid]
      if (high <= low) {
         console.log(0)
         break
      }
      if (mid_val === key) {
        if (val === 0) {
          console.log(mid)
          break
        }
        if (val === 1) {
          console.log(mid-1)
          break
        }
      } else if (mid_val < key) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
}
//   function BinarySearch(arr, low, high, key,val) {
//     let mid = low + Math.floor((high - low) / 2)
//     let mid_val = arr[mid]
//     if (high <= low) {
//       console.log(0)
//       return
//     }
//     if (mid_val === key) {

//       if (val === 0) {
//          console.log(mid)
//           return
//         }
//         if (val === 1) {
//           console.log(mid-1)
//           return
//         }
//     } else if (mid_val < key) {
//       BinarySearch(arr, mid + 1, high, key,val)
//     } else {
//       BinarySearch(arr, low, mid - 1, key,val)
//     }
//   }
if (process.env.USER === 'kaustubhmendhe') {
  runProgram(`4
          1 2 3 4
          3
          0 5
          1 3
          0 3`)
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
