// https://leetcode.com/problems/merge-sorted-array/description/

var merge = function(nums1=[], m, nums2=[], n) {
    while(m > 0 && n > 0) {
        if(nums1[m-1] > nums2[n-1]){
            nums1[m+n-1] = nums1[m-1];
        }
    }
};