var strings = [];
class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let response = '';
        for (let str of strs){
            response +=  str.length + "#" + str ;
        }
        return response;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let response = [], i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#"){
                j++;
            }
            let length = parseInt(str.substring(i, j));
            i = j + 1;
            j = i + length;
            response.push(str.substring(i,j));
            i = j;
        }
        return response;
    }
}
