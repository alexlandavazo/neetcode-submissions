class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sSorted = s.split('').sort();
        const tSorted = t.split('').sort();

        return sSorted.join() === tSorted.join()

    }
}
