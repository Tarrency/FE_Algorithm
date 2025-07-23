/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param array int整型一维数组
 * @return int整型一维数组
 *
 * 调整数组顺序使奇数位于偶数前面(一)
 *
 * 输入：[1,2,3,4]
 * 返回值：[1,3,2,4]
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(n)
 * 进阶：时间复杂度 O(n^2)，空间复杂度 O(1)
 */

// 解法1：es6写法
function reOrderArray(array) {
    // write code here
    const oddArr = array.filter(item => item % 2 !== 0)
    const evenArr = array.filter(item => item % 2 === 0)
    const res = [...oddArr, ...evenArr]
    return res
    // return arr1.concat(arr2)
    // return [...array.filter(i => i%2 === 1),...array.filter(i => i%2 === 0)]
    // return array.sort((a, b) => a % 2 === 0 ? 1 : -1)
}
// 时间复杂度 O(n)，空间复杂度 O(n)

// 解法2：遍历写法
function reOrderArray1(array) {
    const odd = []
    const even = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 1) {
            odd.push(array[i])
        } else {
            even.push(array[i])
        }
    }
    const res = [...odd, ...even]
    return res
}

// 解法3：插入排序，找到第一个偶数，第一个奇数，奇数放到偶数位置，中间的后移动
function reOrderArray2(array) {
    if (!array || array.length === 0) return array

    let i = 0
    while (i < array.length) {
        // 找到第一个偶数
        while (i < array.length && array[i] % 2 !== 0) {
            i++
        }

        if (i >= array.length) break

        let j = i + 1
        // 在偶数后面找第一个奇数
        while (j < array.length && array[j] % 2 === 0) {
            j++
        }

        if (j >= array.length) break

        // 保存奇数
        const temp = array[j]
        // 将i到j-1的元素后移一位
        for (let k = j; k > i; k--) {
            array[k] = array[k - 1]
        }
        // 将奇数放到i位置
        array[i] = temp

        i++
    }

    return array
}
// 时间复杂度 O(n2)，空间复杂度 O(1)
