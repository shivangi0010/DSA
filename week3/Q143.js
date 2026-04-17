function maxSubArray(nums) {
    let current = nums[0];
    let max = nums[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > current + nums[i]) {
            current = nums[i];
            tempStart = i;
        } else {
            current = current + nums[i];
        }

        if (current > max) {
            max = current;
            start = tempStart;
            end = i;
        }
    }

    return {
        maxSum: max,
        subarray: nums.slice(start, end + 1)
    };
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))