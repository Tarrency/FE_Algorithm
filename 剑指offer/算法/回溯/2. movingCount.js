/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param threshold int整数型，不能进入行坐标和列坐标的数位之和大于 threshold 的格子
 * @param rows int整数型
 * @param cols int整数型
 * @return bool布尔型
 *
 * 机器人的运动范围
 * 输入：1,2,3
 * 返回值：3
 */
function movingCount(threshold, rows, cols) {
    // write code here
    const dirs = [
        [0, 1],
        [0, -1],
        [-1, 0],
        [1, 0]
    ]
    const visited = []
    const check = (n) => {
        let sum = 0
        while (n >= 1) {
            sum += (n % 10)
            n /= 10
        }
        return Math.floor(sum)
    }
    for (let i = 0; i < rows; i++) {
        visited[i] = []
    }
    const isValid = (i, j) => {
        return (i >= 0 && i < rows && j >= 0 && j < cols && check(i) + check(j) <= threshold && !visited[i][j])
    }
    let count = 0
    const dfs = (i, j) => {
        if (!isValid(i, j)) {
            return
        }
        count++
        visited[i][j] = true
        for (const dir of dirs) {
            const [offsetY, offsetX] = dir
            dfs(i + offsetY, j + offsetX)
        }
    }
    dfs(0, 0)
    return count
}
// 空间复杂度 O(nm) ，时间复杂度 O(nm)
