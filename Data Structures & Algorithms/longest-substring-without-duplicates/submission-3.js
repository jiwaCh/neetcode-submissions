class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    lengthOfLongestSubstring(s) {
        s = s.toLowerCase()
        if(s.length === 1 || s.length === 0) return s.length;

        let l = 0, r = 1, ans = 1
        const map = new Map();
        map.set(s[l])

        let _ans = 1
        while(r < s.length){
            while(!map.has(s[r]) && r < s.length){
                map.set(s[r])
                r++
                _ans++
            }
            map.delete(s[l])
            l++
            ans = Math.max(ans, _ans)
            _ans--
        }

        return ans

    }
}
