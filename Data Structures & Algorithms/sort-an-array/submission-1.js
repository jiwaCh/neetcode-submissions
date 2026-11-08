class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        // bubble sort, bad time, but just learning. 
        for(let i = nums.length; i > 0; i--){
            for(let x = 0; x < i - 1; x++){
                if(nums[x] > nums[x+1]){
                    // swap
                    const temp = nums[x]
                    nums[x] = nums[x+1]
                    nums[x+1] = temp
                }
            }
        }

        return nums
    }
}
