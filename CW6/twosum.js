function twoSum(nums, target) {
    let numIndices = {};
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }
        numIndices[nums[i]] = i;
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9));  
console.log(twoSum([3, 2, 4], 6));      
console.log(twoSum([3, 3], 6));        
console.log(twoSum([1, 5, 9, 3], 12)); 
console.log(twoSum([8, 9, 0, 3], 11)); 