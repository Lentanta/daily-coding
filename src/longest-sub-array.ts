function longestSubarray(nums: number[]): number {
  let sliderA = 0;
  let sliderB = 0;
  let hasZero = false;

  let longest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      sliderB += 1;
    } else {
      hasZero = true;
      longest = longest > (sliderB + sliderA)
        ? longest
        : sliderB + sliderA

      sliderA = sliderB;
      sliderB = 0;
    };
  };

  longest = longest > (sliderB - sliderA)
    ? longest
    : sliderB + sliderA

  return hasZero ? longest : nums.length - 1;
};

// function longestSubarray(nums: number[]): number {
//   let longest = 0;
//   let count = 1;

//   let sliderA = 0;
//   let sliderB = 1;

//   let haveZero = false;
//   let meetZero = false;

//   let call = 0;

//   for (let i = 0; i < nums.length; i++) {
//     const valueA = nums[sliderA];
//     const valueB = nums[sliderB];

//     if (valueA === 0) {
//       sliderA += 1;
//       sliderB = sliderA + 1;
//       continue;
//     };

//     if (valueA === 1 && valueB === 1) {
//       call += 1;
//       sliderB += 1;
//       count += 1;
//       continue;
//     };

//     if (valueA === 1 && valueB === 0) {
//       if (meetZero) {
//         longest = count;
//         sliderA = i;
//         sliderB = i + 1;

//         count = 1;
//         meetZero = false;
//         continue;
//       }

//       haveZero = true;
//       meetZero = true;
//       sliderB += 1;
//       continue;
//     };
//   }

//   if (call === 1) {
//     count += 1;
//   }

//   const longestResult = longest < count ? count : longest;
//   if (!haveZero) {
//     return longestResult - 1;
//   }
//   return longestResult;
// };