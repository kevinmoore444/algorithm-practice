/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/
// 0   1  2  3  4
const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;

const numsC = [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1]
const expectedC = 5

/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    //Your code here
    // Base case: if the length is 2 or less, return -1
    if(nums.length<=2){
        return -1
    }
    // METHOD 1: NESTED/MULTIPLE FOR LOOPS
        // For loop iterates over the array i=1 to i<=nums.length-2
        // Sum of left : for loop--> j=0 to j<i
        // Sum of right: for loop ---> k=i+1 to k<nums.length
        
    // METHOD 2: SLIDING WINDOW
        //iterate starting at nums[1]
        let sumLeft=nums[0];
        let sumRight=0;
        for(let j=2; j<nums.length; j++){
            sumRight += nums[j]
        }
        // [1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1]
        for(let i=1; i<nums.length-1; i++){
            console.log("sumLeft: ", sumLeft)
            console.log("sumRight: ", sumRight)
            if(sumLeft===sumRight){
                return i
            }
            else{
                sumLeft= sumLeft + nums[i]
                sumRight = sumRight - nums[i+1]
            }
        }
        //sum left = sum left + nums[i-1]
        //i=1 left = -2 and right = 10
        //i=2 left = 3 (-2+nums[i-1]) = (-2+5)
        // sum right = sum right - nums[i]
        // i=2 right= 3 (10-nums[i])-> 10-7 =3
        return -1
}


// console.log("the balance point is " + balanceIndex(numsA)) // 2
// console.log("the balance point is ", balanceIndex(numsB)) // -1
console.log("the balance point is ", balanceIndex(numsC)) // 5