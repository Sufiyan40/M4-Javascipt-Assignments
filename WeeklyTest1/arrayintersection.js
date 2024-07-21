function arrayIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
  }
  const array1 = [1, 2, 3, 4, 5, 8];
  const array2 = [2, 4, 6, 8];
  const finalresult = arrayIntersection(array1, array2);
  console.log(finalresult); 
  