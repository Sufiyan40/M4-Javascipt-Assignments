function Sum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return [arr[i], arr[j]];
        }
      }
    }
    return false; 
  }
  console.log(Sum([5, 2, 3, 7], 10)); 
  console.log(Sum([1, 2, 3, 4], 8)); 