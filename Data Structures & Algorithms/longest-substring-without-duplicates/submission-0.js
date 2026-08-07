class Solution {
    /**
     * @param {string} s
     * @return {number}
     */

    lengthOfLongestSubstring(s) {
        s = s.toLowerCase()
        if(s.length === 1) return 1;

        let l = 0, r = 1, ans = 1
        const map = new Map();
        map.set(s[l])

        while(r < s.length){
            let _ans = 1
            while(!map.has(s[r])){
                map.set(s[r])
                r++
                _ans++
            }
            l = r
            r = l + 1
            ans = Math.max(ans, _ans)
        }

        return ans

    }
}
