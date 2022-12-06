// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function(n) {

    const cache = {

    };
    function no_of_ways(n) {
        if(n===0) return 1;
        if(n<0) return 0;

        if(cache[n] === undefined){
            cache[n] = no_of_ways(n-1) + no_of_ways(n-2)
        }

        return cache[n];
    }
    return no_of_ways(n);
};

console.log(climbStairs(10));