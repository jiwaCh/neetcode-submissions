class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums)

        let ans = 0;
        for(const num of nums){
            if(!set.has(num-1)){
                let count = 0;
                let target = num
                while(set.has(target)){
                    count++
                    ans = Math.max(count, ans)
                    target += 1
                }
            }
        }

        return ans
    }


}
