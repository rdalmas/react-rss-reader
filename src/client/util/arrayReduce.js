function arrayReduce(arr, callback, initialValue) {    
  let accumulator = initialValue === undefined ? 0 : initialValue            
  for(let i=0;i<arr.length;i++) {
    accumulator = callback(accumulator, arr[i], i, arr); 
  }
  return accumulator;
}

export default arrayReduce;