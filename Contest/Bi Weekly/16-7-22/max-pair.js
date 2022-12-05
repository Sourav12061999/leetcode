// https://leetcode.com/contest/weekly-contest-302/problems/maximum-number-of-pairs-in-array/

function answer(arr=[]){
    let obj={};
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]] === undefined){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]=obj[arr[i]]+1;
        }
    }

    let total=0;
    let remain=0;
    for(let key in obj){
        remain+=obj[key]%2;
        total+=Math.floor(obj[key]/2);

    }
    return [total,remain];
}
console.log(answer([1,3,2,1,3,2,2]));