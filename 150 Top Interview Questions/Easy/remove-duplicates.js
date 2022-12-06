// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums=[]) {
    
    let cont = nums[0];

    for(let i=1;i<nums.length;i++){
        if(nums[i] === cont){
            nums[i] = null;
        }else{
            cont = nums[i];
        }
    }
    nums = nums.filter((el) => el != null);
    console.log(nums);
    return nums.length;
};

console.log(removeDuplicates([1,1,2]));