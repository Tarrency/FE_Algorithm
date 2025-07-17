/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组，都是正数
 * @return int整型
 *
 * 数组中重复的数字
 * 0-n
 *
 * 输入：[2,3,1,0,2,5,3]
 * 返回值：2
 * 要求：时间复杂度O(n) ，空间复杂度O(1)
 */

// 解法1：set
function duplicate(numbers) {
    // write code here
    const set = new Set()
    for (let i = 0; i < numbers.length; i++) {
        if (set.has(numbers[i])) {
            return numbers[i]
        } else {
            set.add(numbers[i])
        }
    }
    return -1
}
// 时间复杂度O(n) ，空间复杂度O(n)

// 解法2：排序
function duplication(numbers) {
    let i = 0
    const n = numbers.length
    while (i < n) {
        if (numbers[i] === i) { // 如果已经在正确位置，直接检查下一个
            i++
        } else {
            if (numbers[i] === numbers[numbers[i]]) { // 发现重复
                return numbers[i]
            } else {
                // 交换，让 numbers[i] 归位
                [numbers[i], numbers[numbers[i]]] = [numbers[numbers[i]], numbers[i]]
            }
        }
    }
    return -1 // 无重复
}
// 时间复杂度O(n) ，空间复杂度O(1)

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param numbers int整型一维数组，都是正数
 * @return int整型
 *
 * 数组中重复的数据
 * 1-n
 *
 * 输入：[4,3,2,7,8,2,3,1]
 * 返回值：[2,3]
 * 要求：时间复杂度O(n) ，空间复杂度O(1)
 */

// 解法1：标记为负法
var findDuplicates = function(nums) {
    const n = nums.length
    const res = []
    for (let i = 0; i < n; ++i) {
        const x = Math.abs(nums[i]) // ums[i] 本身可能已经为负数，因此在将 nums[i] 作为下标或者放入答案时，需要取绝对值
        if (nums[x - 1] > 0) {
            nums[x - 1] = -nums[x - 1]
        } else {
            res.push(x) // nums[nums[i]−1] 是负数，说明 nums[i] 已经出现过一次
        }
    }
    return res
}

// 解法2：交换到固定位置
var findDuplications = function(nums) {
    const swap = (nums, index1, index2) => {
        const temp = nums[index1]
        nums[index1] = nums[index2]
        nums[index2] = temp
    }
    const n = nums.length
    for (let i = 0; i < n; ++i) {
        while (nums[i] !== nums[nums[i] - 1]) {
            swap(nums, i, nums[i] - 1)
        }
    }
    const ans = []
    for (let i = 0; i < n; ++i) {
        if (nums[i] - 1 !== i) {
            ans.push(nums[i])
        }
    }
    return ans
}
