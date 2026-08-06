class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // using O(1) space, 2 pointer
        s = s.toLowerCase().replace(/[^a-z0-9]/g, "")
        for(let l = 0, r = s.length-1; l < r; l++, r--){
            if(s[l] != s[r]){
                return false;
            }
        }
        return true;
    }
}
