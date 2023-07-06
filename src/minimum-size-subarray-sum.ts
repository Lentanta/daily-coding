// https://leetcode.com/problems/minimum-size-subarray-sum/

function minSubArrayLen(target: number, nums: number[]): number {
  let minimum = Infinity;
  let sum = 0;

  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === target) return 1;
    sum += nums[right];

    while (sum >= target) {
      minimum = Math.min(right - left + 1, minimum)
      sum -= nums[left]
      left++
    };
  }

  return minimum === Infinity ? 0 : minimum;
};
