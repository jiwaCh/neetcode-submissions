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
            if(value.length > 0){
                for(let l = 0; l < value.length; l++){
                    if(Math.abs((value)[l] - (value)[l+1]) <= k){
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
