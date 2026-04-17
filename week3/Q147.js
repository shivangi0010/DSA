// move all negative Elementon to one side of the array

function moveNegatives(nums) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        if (nums[i] < 0) {
            i++;
        } else if (nums[j] >= 0) {
            j--;
        } else {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    return nums;
}
console.log(moveNegatives([-1,2,-3,4,-5,6]))