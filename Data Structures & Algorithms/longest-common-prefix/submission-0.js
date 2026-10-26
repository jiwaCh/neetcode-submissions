class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        let ans = ""
        for(let i = 0; i < strs[0].length; i++){
            for(const str of strs){
                if(str.length - 1 < i || strs[0][i] != str[i]){
                    return ans
                }
            }
            ans = ans + strs[0][i]
        }

        return ans

    }
}
