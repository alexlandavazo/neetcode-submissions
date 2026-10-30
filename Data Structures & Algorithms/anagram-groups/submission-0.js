class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashmap = new Map();
        const response =[];
        for(const string of strs){
            const sortedString = string.split("").sort().join("");

            if(hashmap.has(sortedString)){
                console.log(response);
                console.log(hashmap)
                response[hashmap.get(sortedString)].push(string);
            }else {
                response.push([string]);
                hashmap.set(sortedString, response.length -1);
            }
        }
        return response;
    }
}
