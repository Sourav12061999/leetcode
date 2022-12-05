// https://leetcode.com/contest/weekly-contest-302/problems/max-sum-of-a-pair-with-equal-sum-of-digits/

function answer(arr = []) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let sum = digitSum(arr[i].toString());
    if(obj[sum] != undefined){
        obj[sum].push(arr[i]);
    }else{
        obj[sum] =[arr[i]];
    }
  }

  let max=0;
  for(let key in obj){
    let newArr=obj[key].sort((a,b) => a-b);
    if(newArr.length<=1){
        continue;
    }else{
        let sum=newArr[newArr.length-1]+newArr[newArr.length-2];
        if(max<sum) max=sum;
    }
  }
  return max;
}

function digitSum(str = "") {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += +str[i];
  }
  return sum;
}

console.log(answer([18, 43, 36, 13, 7]));
