/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world"; 
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    //Your code here
    let newString = ""
    let newWord = ""
    for(let i = 0; i<str.length; i++){
        if(i==str.length-1){
            newWord = str[i]+newWord
            newString= newString + newWord
            return newString
        }
        if(!str[i]==" "){
        newWord=str[i]+newWord
    } 
        if (str[i]==" "){
        newWord = newWord + str[i]
        newString= newString + newWord
        newWord = ""
    }
}
}
// 012345678910
// abc def ghi
// newWord=fed
// newString=fed cba 

// console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg