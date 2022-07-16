// https://leetcode.com/problems/3sum/
function answer(arr = []) {
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (i === j) continue;
      for (let k = j + 1; k < arr.length; k++) {
        if (i === k || j === k) continue;
        if (arr[i] + arr[j] + arr[k] === 0) {
          let posAns = [arr[i], arr[j], arr[k]];
          isAnswer(posAns, ans);
        }
      }
    }
  }
  return accAns(ans);
}// My Brute force accepted

function answer2(arr = []) {
  arr.sort((a, b) => a - b);
  let ans = {};
  for (let k = 0; k < arr.length; k++) {
    let target = arr[k]*(-1);
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        if(left ===k){
            left++;
            continue;
        }
        if(right===k){
            right--;
            continue;
        }
      if ((arr[left] + arr[right]) > target) {
        right--;
      } else if (arr[left] + arr[right] < target) {
        left++;
      } else if(arr[left]+arr[right] === target) {
        let posAns = [arr[left], arr[right], arr[k]];
        isAnswer(posAns, ans);
        break;
      }
    }
  }
  return accAns(ans);
}// My Opt not accepted

function accAns(obj = {}) {
  let arr = [];
  for (let key in obj) {
    arr.push(key.split(" ").map(Number));
  }
  return arr;
}
function isAnswer(arr = [], obj = {}) {
  arr.sort((a, b) => a - b);
  let str = arr.join(" ");
  obj[str] = 1;
}
console.log(answer2([-1,0,1,2,-1,-4,-2,-3,3,0,4]));

// Solution
function Solution(nums){
nums.sort((a,b) => a-b);
	const result=[]
	if(nums.length < 3) return result

	for(let i=0; i< nums.length; i++){
		let left = i+1
		let right = nums.length-1
		if(i > 0 && nums[i] === nums[i-1]) continue
		while(left < right){
			let sum = nums[i] + nums[left] + nums[right]

			if(sum===0){
				let arr=[nums[i], nums[left], nums[right]]
				result.push(arr)
				left++
				while(nums[left] === nums[left-1] && left < right) left++
			}else if(sum > 0){
				right--
			}else{
				left++
			}
		}
	}

	return result;
}