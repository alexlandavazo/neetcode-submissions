class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = new Map();
        const freq = new Array(nums.length + 1).map(() => []);
        let response = [];
        for (const num of nums){
            if(!hashmap.has(num)){
                hashmap.set(num, 0);
            }
            hashmap.set(num, hashmap.get(num) + 1);
        }
        for (const [n, times] of hashmap.entries()){
            if(freq[times]){
                freq[times].push(n)
            }else{
                freq[times]= [n]
            }
        }
        for (let i = nums.length; i > 0; i --){
            if(!freq[i]) continue;
            for(const number of freq[i]){
                response.push(number);
                if(response.length === k){
                    return response;
                }
            }
        }
    }
    
}
