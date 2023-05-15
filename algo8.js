/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
// const expected5 = "ba"

// console.log(str5.slice(0,str5.length-i-1)+str5.slice(3))
/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    // For loop to build a hash map
    let count = {}
    let newString = ""
    for(let i=str.length-1; i>=0; i--){
        if(!count[str[i]]){
          count[str[i]]=1
          // Adding str[i] to the beginning of newString
          newString=str[i]+newString
        }
      }
    // If item already exists in map, slice it, otherwise add it to the hash map
    console.log(count)
    console.log(newString)
    return newString
}

// function stringDedupe(str){
//   let newString=""
//   for(let i = str.length-1; i>=1; i--){
//     for(let j=i-1; j>=0; j--){
//       if(str[i]!==str[j]){
//        newString += str[j]
//       }
//     }
//     console.log(newString)
//   }
//   return newString
// }

// console.log()
console.log(stringDedupe(str1));
// console.log(stringDedupe(str2));
// console.log(stringDedupe(str3));
// console.log(stringDedupe(str4));
// console.log(stringDedupe(str5));
