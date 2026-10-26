class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const set = new Set(
            nums.map((value, key)=>value)
        )

        return set.size !== nums.length

    }
}
