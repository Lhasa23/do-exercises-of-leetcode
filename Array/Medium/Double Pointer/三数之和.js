/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 */

/**
 * 输入: nums = [-1, 0, 1, 2, -1, -4]
 * 输出: [[-1, 0, 1], [-1, -1, 2]]
 */

/**
 * 首先对输入数组进行排序，设置一个基准点i，每次循环中将i和左右指针的值相加，根据三数相加的结果决定移动左右指针
 * 其中左指针为i+1，右指针为n-1，这样一来当 nums[i] > 0 时，三数之和必大于0
 * 三数之和大于0时，左移右指针；小于0时，右移左指针；等于0时，将三个数组成数组push结果数组；直到左右指针相遇，i++开始下一轮循环
 * 接下来考虑重复情况，因为是排序好的数组，i,left,right各自出现重复值时，都进行跳过
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  const n = nums.length
  if (n < 3 || nums == null) return res
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let left = i + 1,
      right = n - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]])
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      }
    }
  }
  return res
}
