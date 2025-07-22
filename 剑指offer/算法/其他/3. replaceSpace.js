/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param s string字符串
 * @return string字符串
 *
 * 替换空格
 *
 * 输入："We Are Happy"
 * 返回值："We%20Are%20Happy"
 */

// 解法1：数组api
function replaceSpace(s) {
    // write code here
    return s.split(' ').join('%20')
}

// 解法2：正则
function replaceSpace1(s) {
    // write code here
    return s.replace(/\s/g, '%20')
}

// 解法3：遍历
function replaceSpace2(s) {
    // write code here
    let res = ''
    for (const c of s) {
        res += c === ' ' ? '%20' : c
    }
    return res
}
