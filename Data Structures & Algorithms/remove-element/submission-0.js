class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let l = 0;
        let r = nums.length - 1 

        while(l<=r){
            if(nums[l] !== val){
                l++
            }else if(nums[r] === val){
                r--
            }else{
                nums[l] = nums[r]
                l++
                r--
            }
            
        }

        return l
    }
}
