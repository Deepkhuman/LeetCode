
var removeDuplicates = function(nums) {
 

    let unique = 0;

    for(var i = 1; i < nums.length; i++) {
      if(nums[i] != nums[unique]){
        unique++;
        nums[unique] = nums[i];
      }
    }

    return unique +1;
};
var nums = [1,1,2,4,4,6,7,8,8]

let expectedNums = [1,2,4,6,7,8]

let k = removeDuplicates(nums);

console.assert(k === expectedNums.length, `Expected length ${expectedNums.length}, but got ${k}`);

for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i], `Expected nums[${i}] to be ${expectedNums[i]}, but got ${nums[i]}`);
}

console.log("Tests passed successfully.");

