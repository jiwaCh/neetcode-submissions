class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {

        for(let i = 0; i < strs[0].length; i++){
            for(const str of strs){
                if(str.length - 1 < i || strs[0][i] != str[i]){
                    return strs[0].slice(0, i)
                }
            }
        }
        return strs[0]
    }
}
