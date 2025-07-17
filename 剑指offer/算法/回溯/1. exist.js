/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param matrix char字符型二维数组
 * @param word string字符串
 * @return bool布尔型
 *
 * 矩阵中的路径
 * 输入：[[a,b,c,e],[s,f,c,s],[a,d,e,e]],"abcced"
 * 返回值：true
 */
var exist = function(board, word) {
    const m = board.length; const n = board[0].length
    function dfs(i, j, k) {
        if (board[i][j] !== word[k]) {
            return false // 匹配失败
        }
        if (k + 1 === word.length) {
            return true // 匹配成功！
        }
        board[i][j] = 0 // 标记访问过
        for (const [x, y] of [[i, j - 1], [i, j + 1], [i - 1, j], [i + 1, j]]) { // 相邻格子
            if (x >= 0 && x < m && y >= 0 && y < n && dfs(x, y, k + 1)) {
                return true // 搜到了！
            }
        }
        board[i][j] = word[k] // 恢复现场
        return false // 没搜到
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) {
                return true // 搜到了！
            }
        }
    }
    return false // 没搜到
}
// 时间复杂度：O(MN⋅3L)
// 空间复杂度：O(MN)
