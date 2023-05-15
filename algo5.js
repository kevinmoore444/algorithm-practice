/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,
return whether or not there is at least 6 feet separating every person.
Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    //Your code here
    // BASE CASE: if empty return true
    if(queue.length===0){
        return true
    }
    // Each 1 is followed by at least 6 zeroes
    let flag = 6;
    // Flag --> set to 6 to start with ---> reset when you hit a 1
    for(let i=0; i<queue.length; i++){
        if(queue[i]===0){
            flag++
        }
        else{
            console.log(flag)
            // flag<6 ? false : flag=0;
            if(flag<6){
                return false
            }
            else{
                flag=0;
            }
        }
    }
    return true
    // count 0's ---> when hitting the next 1, if count is 6 or more continue iterating
    // If you go through the entire loop without returning false, return true
    // If less than 6 zeroes then return false
}

console.log(socialDistancingEnforcer(queue1)) // false
// console.log(socialDistancingEnforcer(queue2)) // true
// console.log(socialDistancingEnforcer(queue3)) // true
// console.log(socialDistancingEnforcer(queue4)) // true