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
            array[s[i].charCodeAt(0) - 97]++
            array[t[i].charCodeAt(0) - 97]--
        }

        return array.every((item)=> item === 0)

    }
}
