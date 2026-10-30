class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
        const sSorted = s.split("").sort();
        const tSorted = t.split("").sort();

        console.log(sSorted);
        console.log(tSorted)

        for(const char in sSorted){
            if(tSorted[char] !== sSorted[char]){
                return false;
            }
        }
        
        return true
    }
}
