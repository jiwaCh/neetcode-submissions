class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        const stack = []
        const ans = []

        for(let i = temperatures.length-1; i >= 0; i--){
            const current = temperatures[i]

            if(stack.length > 0 && current <  stack[stack.length-1][0] ){
                ans.push(stack[stack.length-1][1] - i)

            }else{
                while(stack.length > 0 && stack[stack.length-1][0] <= current){
                    stack.pop()
                }
                if(stack.length > 0 && current <  stack[stack.length-1][0]){
                    ans.push(stack[stack.length-1][1] - i)
                }else{
                    ans.push(0)
                }
                
            }
            stack.push([current, i])
        }

        return ans.reverse()
    }
}
