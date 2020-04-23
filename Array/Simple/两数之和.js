/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

/**
 * 输入: nums = [2, 7, 11, 15], target = 9
 * 输出: [0, 1]
 */

/**
 * 使用ES6新特性Map()，记录下出现过的数字，当下次出现和为target的数字时，找到之前元素的下标，同当前元素一起返回
 * 总体来说十分简单
 * 进阶题目：三数之和 —— /Array/Medium/Double Pointer
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let myMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (myMap.has(nums[i])) {
      return [myMap.get(nums[i]), i]
    }
    myMap.set(target - nums[i], i)
  }
}
