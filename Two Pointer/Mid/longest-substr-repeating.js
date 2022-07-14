// https://leetcode.com/problems/longest-substring-without-repeating-characters/

function answer(str=""){
    let max=0;
    for(let i=0;i<str.length;i++){
        let subStr="";
        for(let j=i;j<str.length;j++){
            if(subStr.includes(str[j])){
                break;
            }else{
                subStr=subStr+str[j];
                if(max<subStr.length) max=subStr.length;
            }
        }
    }
    return max;
}
console.log(answer("abcabcbb"));