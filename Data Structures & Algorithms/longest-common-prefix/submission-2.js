class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const check = strs[0]

        let ans = check.length

        for(const str of strs){
            const shorter = Math.min(str.length, check.length)
            for(let i = 0; i < shorter; i++){

                if(check[i] != str[i]){
                    ans = Math.min(i, ans)
                    break
                }
            }
            ans = Math.min(ans, shorter);
        }

        return check.substring(0,ans)

    }
}
