function arrayFilter(arr, callback) {    
  const filterArr = [];  
  for(let i=0;i<arr.length;i++) {        
    const result = callback(arr[i], i, arr);        
    if(result) filterArr.push(arr[i]);     
  }    
  return filterArr;
}

export default arrayFilter;