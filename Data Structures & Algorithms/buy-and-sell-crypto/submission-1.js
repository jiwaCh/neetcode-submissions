class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let lowest = prices[0];
        let profit = 0;

        for(let i = 0; i < prices.length - 1 ; i++){
            const current = prices[i]
            if(current < lowest){
                lowest = current;
            }

            profit = Math.max(profit, current - lowest)

        }

        return profit



    }
}
