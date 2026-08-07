class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++){
            if(!map.has(nums[i])){
                map.set(nums[i], [])
            }
            map.get(nums[i]).push(i)
        }
        for(const [key, value] of map){
            if(value.length > 0 && Math.abs((value)[0] - (value)[1]) <= k){
                return true;
            }
        }
        return false;
    }
}
