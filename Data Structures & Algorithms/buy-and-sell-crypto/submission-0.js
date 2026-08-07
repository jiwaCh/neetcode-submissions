class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = prices.length - 1
        let lowest = prices[0], highest = prices[prices.length-1]
        while(l < r){
            lowest = Math.min(lowest, prices[l])
            highest = Math.max(highest, prices[r])
            l++
            r--
        }
        return (highest - lowest) < 0 ? 0 : (highest - lowest)
    }
}
