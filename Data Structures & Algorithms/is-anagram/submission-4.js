class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false
        }
        
        const array = new Array(26).fill(0)

        for(let i = 0; i < s.length; i++){
            const char = s[i].charCodeAt(0) - 97
            array[char] = array[char] + 1
        }

        for(let i = 0; i < t.length; i++){
            const char = t[i].charCodeAt(0) - 97
            array[char] = array[char] - 1
        }

        for(let i = 0; i < array.length; i++){
            if(array[i] != 0){
                return false
            }
        }

        return true

    }
}
