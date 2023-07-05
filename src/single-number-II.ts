// https://leetcode.com/problems/single-number-ii/description/

// My implementation

function singleNumber(nums: number[]): number {
  let map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {

    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
      continue;
    };

    if (map.has(nums[i])) {
      map.set(nums[i], (map.get(nums[i]) || NaN) + 1)
      continue;
    };
  };

  let result = NaN;
  for (const [key, value] of map) {
    if (value < 2) result = key;
  }

  return result;
};