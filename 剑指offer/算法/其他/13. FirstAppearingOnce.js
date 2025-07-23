/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param str string字符串型
 * @param n int整型
 * @return string字符串型
 *
 * 左旋转字符串
 *
 * 如果当前字符流没有存在出现一次的字符，返回#字符。
 * 输入："google"
 * 输出："ggg#ll"
 *
 * 要求：时间复杂度 O(n)，空间复杂度 O(n)
 */

let map
function Init() {
    // write code here
    map = new Map()
}
// Insert one char from stringstream
function Insert(s) {
    // write code here
    map.set(s, (map.get(s) || 0) + 1)
}
// return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    // write code here
    for (const s of map.keys()) {
        if (map.get(s) === 1) { return s }
    }
    return '#'
}
