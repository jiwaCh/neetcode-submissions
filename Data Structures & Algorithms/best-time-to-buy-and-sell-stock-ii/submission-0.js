class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let ans = 0;
        let prev = prices[0]
        for(let curr of prices){
            if(prev < curr ){
                ans += curr - prev
            }
            prev = curr
        }

        return ans

    }
}
