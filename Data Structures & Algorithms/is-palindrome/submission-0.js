class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        const cleanS = []
        for(let i = 0; i < s.length; i++){
            if(s[i].charCodeAt(0)-97 < 26 && s[i].charCodeAt(0)-97 >= 0 ){
                cleanS.push(s[i].toLowerCase())   
            }
        }
        s = cleanS.join(" ")
        return s === s.split(" ").reverse().join(" ")
    }
}
