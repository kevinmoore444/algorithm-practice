/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 
If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

const str1 = "aaaabbcdddaaa";
const expected1 = "a4b2cd3a3";
const expected1b = "a4bbcd3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "ccbb";
const expected4 = "ccbb";

const str5 = "abbbbbbbbbbbbbbbbb"
const expected5 = "ab17"

//Need an output variable which we will concatenate to 
//Need to iterate over the string
//Need a variable to track how many times we've seen a letter


function encodeStr(str) {
    let output = "";
    let count = 1;
    for(let i=0; i<str.length; i++){
        if(str[i] !== str[i+1]){
            count > 1 ? output += str[i] + count : output += str[i]
            count = 1
        }

        else if(str[i] == str[i+1]){
            count++
        }
    }
    if(output.length >= str.length){
        return str;
    }
    else{
        return output
    }
}

// console.log(encodeStr(str1)) // Expected: "a4b2cd3a3" or "a4bbcd3a3";
// console.log(encodeStr(str2)) // Expected: ""
// console.log(encodeStr(str3)) // Expected: a
// console.log(encodeStr(str4)) // Expected: ccbb
// console.log(encodeStr(str5)) // Expected: ab17



const strA = "a3b2c1d3";
const expectedA = "aaabbcddd";

const strB = "a3b2c12d10";
const expectedB = "aaabbccccccccccccdddddddddd";

const strC = "a20b50c100d5";


//Variable to track output
//Loop through the string
//Can use parse int to turn string into number
//Is Nan



function decodeStr(str) {
    output = ""
    currentLetter = ""
    count = ""
    for(let i=0; i<str.length; i++){
        //If it's a letter
        if(isNaN(str[i])){
            currentLetter = str[i]
        }
        //If it's a number
        else{
            count += str[i]
            //If the next character is a letter then our number is complete
            if(isNaN(str[i+1])){
                output += currentLetter.repeat(parseInt(count))
                count = ""
            }
        }
    }
    return output
}


console.log(decodeStr(strA)) // Expected: aaabbcddd
console.log(decodeStr(strB)) // Expected: aaabbccccccccccccdddddddddd
console.log(decodeStr(strC))