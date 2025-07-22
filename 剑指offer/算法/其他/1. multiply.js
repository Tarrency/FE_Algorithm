/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param A int整型一维数组
 * @return int整型一维数组
 *
 * 构建乘积数组
 *
 *  B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]（除 A[i] 以外的全部元素的的乘积）
 * 分为两部分，A[i]左和A[i]右
 *
 * 输入：[1,2,3,4,5]
 * 返回值：[120,60,40,30,24]
 */

// 解法1：
function multiply(a) {
    if (!a || a.length === 0) return []

    const n = a.length
    const b = new Array(n).fill(1)

    // 计算左边乘积
    for (let i = 1; i < n; i++) {
        b[i] = b[i - 1] * a[i - 1]
    }

    // 计算右边乘积并乘到左边乘积上
    let temp = 1
    for (let i = n - 2; i >= 0; i--) {
        temp *= a[i + 1]
        b[i] *= temp
    }

    return b
}
// 时间复杂度：O(n)，空间复杂度O(n)

// 解法2：暴力法
function multiplyA(A) {
    const resArr = []
    for (let i = 0; i < array.length; i++) {
        const tempArr = [...array] // 创建数组副本
        let num = 1
        tempArr.splice(i, 1) // 移除当前元素
        for (let j = 0; j < tempArr.length; j++) {
            num *= tempArr[j] // 计算剩余元素的乘积
        }
        resArr.push(num)
    }
    return resArr
}
// 时间复杂度：O(n²)，空间复杂度O(n)
