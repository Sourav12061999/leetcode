// https://leetcode.com/problems/matchsticks-to-square/

// Provide reverse-sorted array in the params
function answer(matchsticks=[],len=0){
  let sum=matchsticks.reduce((a,b) => a+b);
  if(sum===0 || sum%4 !=0){
    return false;
  }
  let sides=[0,0,0,0];
  function calculate(index){
    if(index === len){
        if(sides[0] === sum/4 && sides[1] === sum/4 && sides[2] === sum/4 && sides[3] === sum/4){
            return true;
        }else{
            return false;
        }
    }
    for(let i=0;i<4;i++){
        if(sides[i] + matchsticks[index]<=sum/4){
            sides[i] = sides[i]+matchsticks[index];
            if(calculate(index+1)){
                return true;
            }
            sides[i] = sides[i]-matchsticks[index];
        }
    }
    return false;
  }
  return calculate(0);
}
console.log(answer([1,1,2,2,2],5));