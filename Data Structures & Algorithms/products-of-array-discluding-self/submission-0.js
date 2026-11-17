class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const rightPresum = new Array(nums.length).fill(0)

        for(let i = nums.length - 1; i >= 0; i--){
            rightPresum[i] = nums[i] * (i+1 < nums.length ? rightPresum[i+1] : 1 )
        }

        let leftPresum = 1;

        for(let i = 0; i < nums.length; i++){
            rightPresum[i] = leftPresum * (i+1 < nums.length ? rightPresum[i+1] : 1)
            leftPresum *= nums[i]
        }


        return rightPresum
    }
}
