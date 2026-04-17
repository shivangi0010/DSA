// Find Pivot Index

function pivotIndex(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        let right = total - left - nums[i];

        if (left === right) {
            return i;
        }

        left += nums[i];
    }

    return -1;
}
console.log(pivotIndex([1,7,3,6,5,6]))