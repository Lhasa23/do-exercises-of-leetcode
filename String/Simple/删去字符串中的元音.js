/**
 *给你一个字符串 S，请你删去其中的所有元音字母（ 'a'，'e'，'i'，'o'，'u'），并返回这个新字符串。
 */

/**
 * 输入："leetcodeisacommunityforcoders"
 * 输出："ltcdscmmntyfrcdrs"
 *
 * 输入："aeiou"
 * 输出：""
 */

/**
 * @param {string} S
 * @return {string}
 */
var removeVowels = function (S) {
  return S.replace(/[aeiou]+/g, '')
}
