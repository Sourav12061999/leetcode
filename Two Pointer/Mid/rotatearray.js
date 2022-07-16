// https://leetcode.com/problems/rotate-numsay/

function answer1(nums=[],k=0){
  if(k%nums.length===0){
    return nums;
  }
  let k2=k%nums.length
  let ans=[];
  for(let i=nums.length-k2;i<nums.length;i++){
    ans.push(nums[i]);
  }
  for(let i=0;i<nums.length-k2;i++){
    ans.push(nums[i]);
  }
  return ans;
}
console.log(answer1([1,2,3,4,5,6,7],3));