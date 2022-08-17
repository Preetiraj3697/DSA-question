function runProgram(input) {
    input=input.trim().split("\n")
    let test=+input[0].trim()
    let line=1;
    let obj={}
    for(let i=0;i<test;i++)
    {
        let x=input[line++].trim()
        if(obj[x]===undefined)
        {
            obj[x]=1
        }
        else
        {
            obj[x]++
        }
    }
    keys = Object.keys(obj);
    let lenn = keys.length;
    keys.sort();
    for (let i = 0; i < lenn; i++) {
        k = keys[i];
        console.log(k + ' ' + obj[k]);
    }
  
}
  
  if (process.env.USER === 'kaustubhmendhe') {
    runProgram(`3
    masai
    school
    masai`)
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