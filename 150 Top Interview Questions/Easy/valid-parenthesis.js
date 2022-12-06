// https://leetcode.com/problems/valid-parentheses/

var isValidParenthesis = function(s="") {
    const starting = ["(","{","["];
    const ending = [")","}","]"];
    const maping = {
        "(": ")",
        "{": "}",
        "[": "]"
    }
    const stack = [];

    for(let i=0;i<s.length;i++){
        if(starting.includes(s[i])){
            stack.push(s[i]);
        }

        if(ending.includes(s[i])){
            if(maping[stack[stack.length-1]] === s[i]){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValidParenthesis("())[]{}"));