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

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param {number[]} nums
 * @return {number[][]}
 *
 * 全排列
 * 输入：nums = [1,2,3]
 * 返回值：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

// 解法1：递归+回溯+记录
function Permute(nums) {
    const res = []
    const visited = new Array(nums.length).fill(false)
    backTrack([], visited)
    return res

    function backTrack(path, visited) {
        if (path.length === nums.length) {
            res.push([...path]) // 注意这里要拷贝一份，因为path会被后续操作修改
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true // 标记使用
                path.push(nums[i]) // 加入当前数字
                backTrack(path, visited)
                path.pop() // 回溯
                visited[i] = false // 回溯
            }
        }
    }
}

// 解法2：递归+回溯+交换
function permute(nums) {
    const res = []
    dfs(0)
    return res

    function dfs(k) {
        if (k === nums.length) {
            res.push([...nums]) // 保存当前排列（拷贝数组）
            return
        }
        for (let i = k; i < nums.length; i++) {
            [nums[i], nums[k]] = [nums[k], nums[i]] // 交换
            dfs(k + 1); // 递归下一层
            [nums[i], nums[k]] = [nums[k], nums[i]] // 回溯
        }
    }
}
