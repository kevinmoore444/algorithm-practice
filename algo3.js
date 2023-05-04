/* 
  String: Rotate String
  Create a standalone function that accepts a string and an integer,
  and rotates the characters in the string to the right by that given
  integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13; 
const expected5 = "ldHello Wor";






//take the current letter and add it to the beginnign of the output


function rotateStr(str, amnt) {
    //If str.length = rotatel amount, return string
    if(amnt % str.length == 0 || amnt == 0){
        return str;
    }
    //If rotate amount is greater than str.length, set rotate amount to str.lenght % rotate amount
    let rotate_amount = amnt%str.length

    //Instantiate a variable to track output
    let output = ""
    //Add the beginning of the string to the output: number of iterations will equal the string length minus the rotate amount. 
    for(let i=0; i<str.length-rotate_amount; i++){
        output = output + str[i]
    }
    //Iterate from end of string backwards for # of iterations equal to the rotate amount
    for(let i=str.length-1; i>=str.length-rotate_amount; i--){
        output = str[i] + output
    }
    return output;
}

console.log(rotateStr(str, rotateAmnt1)); // expected: "Hello World"
console.log(rotateStr(str, rotateAmnt2)); // expected: "dHello Worl"
console.log(rotateStr(str, rotateAmnt3)); // expected: "ldHello Wor"
console.log(rotateStr(str, rotateAmnt4)); // expected: "orldHello W"
console.log(rotateStr(str, rotateAmnt5)); // expected: "ldHello Wor"
