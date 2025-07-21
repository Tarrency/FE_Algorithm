/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix int整型二维数组
 * @return int整型二维数组
 *
 * 顺时针打印矩阵
 * 输入：[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
 * 返回值：true
 */
// function printMatrix(matrix) {
//     // write code here

// }
var spiralOrder = function(matrix) {
    let top = 0; let bottom = matrix.length - 1; let left = 0; let right = matrix[0].length - 1
    const res = []
    while (top < bottom && left < right) {
        for (let i = left; i < right; i++)res.push(matrix[top][i])
        for (let i = top; i < bottom; i++)res.push(matrix[i][right])
        for (let i = right; i > left; i--)res.push(matrix[bottom][i])
        for (let i = bottom; i > top; i--)res.push(matrix[i][left])
        left++
        right--
        top++
        bottom--
    }
    if (top === bottom) {
        for (let i = left; i <= right; i++)res.push(matrix[top][i])
    } else if (left === right) {
        for (let i = top; i <= bottom; i++)res.push(matrix[i][left])
    }
    return res
}
