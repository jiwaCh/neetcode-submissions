class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const array = new Array(26).fill(0)

        for(const char of s){
            array[char.charCodeAt(0) - "a".charCodeAt(0)]++
        }

        for(const char of t){
            array[char.charCodeAt(0) - "a".charCodeAt(0)]--
        }

        return array.every((c)=> c === 0)
    }
}
