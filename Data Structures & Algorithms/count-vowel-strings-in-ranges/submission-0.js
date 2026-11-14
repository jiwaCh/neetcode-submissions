/*
 * @lc app=leetcode id=2559 lang=javascript
 *
 * [2559] Count Vowel Strings in Ranges
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {

    const presum = [0]
    const set = new Set(["a", "e", "i", "o", "u"])

    for(let i = 0; i < words.length; i++){
        const word = words[i]
        if(set.has(word[0]) && set.has(word[word.length-1])){
            presum.push(presum[i]+1)
        }else{
            presum.push(presum[i])
        }
    }

    const ans = []

    for(const query of queries){
        const i = query[0] // start
        const j = query[1]+1 // end 

        ans.push(presum[j]-presum[i])

    }


    return ans

    // space is presum (word lerngth) + ans (query length), so 0(n+q)
    // time is presum (word lerngth) + ans (query length), so 0(n+q)
};
// @lc code=end

