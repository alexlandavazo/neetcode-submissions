class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const hashmap = new Map();
        for (let i = 0; i < nums.length ; i++){
            if(hashmap.has(nums[i])){
                return [hashmap.get(nums[i]), i]
            }
            hashmap.set(target-nums[i], i);
        }
        return [];
    }
}
