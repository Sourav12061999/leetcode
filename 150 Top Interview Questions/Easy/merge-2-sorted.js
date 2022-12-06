// Question was for linkedlist but here it is for array

var mergeTwoLists = function(list1=[], list2=[]) {
    let merged = [];

    while(list1.length && list2.length){
        if(list1[0]<list2[0]){
            merged.push(list1.shift());
        }else {
            merged.push(list2.shift());
        }
    }

    for(let i=0;i<list1.length;i++) merged.push(list1[i]);
    for(let i=0;i<list2.length;i++) merged.push(list2[i]);
    return merged;
};

console.log(mergeTwoLists([1,2,4],[1,3,4]));