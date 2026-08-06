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
        const countArray = new Array(26).fill(0)
        for (let i = 0; i < s.length; i++){
            const charToInt = s[i].charCodeAt(0)-97
            countArray[charToInt]++
        }
        for (let i = 0; i < t.length; i++){
            const charToInt = t[i].charCodeAt(0)-97
            countArray[charToInt]--
        }
        for (let i = 0; i < countArray.length; i++){
            if(countArray[i]!= 0){
                return false
            }
        }
        return true
    }
}
