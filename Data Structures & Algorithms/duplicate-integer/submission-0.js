class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let sorted = nums.sort();
       let result = false;

       for(let x = 1; x <= nums.length; x ++ ){
        result = sorted[x-1] === sorted[x];
        if(result){
            break;
        }
       }
       return result;
    }
}
