/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串
 * @return string字符串一维数组
 *
 * 字符串的排列
 * 输入："abc"
 * 返回值：["abc","acb","bac","bca","cab","cba"]
 */

// 解法1：递归+回溯+记录
function Permutation(str) {
    // write code here
    const res = []
    const visited = new Array(str.length).fill(false)
    backTrack('', visited)
    return res
    function backTrack(path, visited) {
        if (path.length === str.length) {
            res.push(path)
            return
        }
        for (let i = 0; i < str.length; i++) {
            if (!visited[i]) {
                visited[i] = true // 标记使用
                backTrack(path + str[i], visited)
                visited[i] = false // 回溯
            }
        }
    }
}

// 解法2：递归+回溯+交换
var permutation = function(S) {
    var temp = S.split('') // 字符串转为数组
    len = temp.length// 长度
    var res = [] // 结果
    dfs(0)
    return res
    function dfs(k) {
        if (k === len) { // 结束条件
            res.push(temp.join('')) // 加入结果
            return
        }
        for (let i = k; i < len; i++) {
            [temp[i], temp[k]] = [temp[k], temp[i]] // 交换位置
            dfs(k + 1); // 递归
            [temp[i], temp[k]] = [temp[k], temp[i]] // 回溯
        }
    }
}
/**
 * 交换：让不同字符“坐”到 temp[k] 的位置。
 * 递归：处理 k+1 的位置。
 * 回溯：恢复交换，让后面的递归不受影响。
 * 结束条件：当 k == len，说明已经生成一个完整排列。
 */

// 时间复杂度：O(n × n!)，空间复杂度：O(n)
