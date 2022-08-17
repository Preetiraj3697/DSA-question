function countUniqueValues(arr){
    let i = 0;
    let j = i+1;
  while(j<arr.length){
      if(arr[i] === arr[j]){
          j++;
      }
      else{
          i = i + 1;
          arr[i] = arr[j];
      }
  }
  
  if(i === 0){
      return 0;
  }
  else{
      return i+1;
  }
}