/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // ( () () )
const expected1 = true;

const str2 = "N(0(p)3"; // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


//If will be valid if:
// A) We have an equal number of opening and closing parenthesis 
// B) We ever have more closing tags than opening as we iterate forward


function parensValid(str) {
    let opening = 0
    let closing = 0
    for(let i=0; i<str.length; i++){
        if(str[i] === "("){
            opening++
        }
        else if(str[i] === ")"){
            closing++
        }
        //If we ever have more closing parenthesis than opening parenthesis
        if(closing > opening){
            return false;
        }
    }
    //If we have an unequal number of opening and closing parenthesis.
    if(opening !== closing){
        return false
    }
    return true
}


// console.log(parensValid(str1)) // expected: true
// console.log(parensValid(str2)) // expected: false
// console.log(parensValid(str3)) // expected: false