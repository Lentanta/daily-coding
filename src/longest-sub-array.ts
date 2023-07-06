// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element

const getMax = (a, b) => a > b ? a : b;
function longestSubarray(nums: number[]): number {
  let sliderA = 0;
  let sliderB = 0;
  let hasZero = false;

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      sliderB += 1;
    }
    if (nums[i] === 0) {
      longest = getMax(longest, sliderA + sliderB);
      sliderA = sliderB;
      sliderB = 0;

      hasZero = true;
    }
  };

  longest = getMax(longest, sliderA + sliderB);
  return hasZero ? longest : nums.length - 1;
};