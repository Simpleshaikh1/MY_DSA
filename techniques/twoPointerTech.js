// Given a sorted array arr (sorted in ascending order) and a target, 
// find if there exists any pair of elements (arr[i], arr[j]) such that their sum is equal to the target.

// Input: arr[] = {10, 20, 35, 50}, target =70
// Output:  Yes
// Explanation : There is a pair (20, 50) with given target.

//Naive method:

// function twoSum(arr, target){
//     let n = arr.length;

//     for(let i = 0; i < n; i++){
//         for(let j = i + 1; j < n; j++){
//             if(arr[i] + arr[j] === target){
//                 return true;
//             }
//         }
//     }

//     return false;
// }


//Two pointer technique : 0(n) 0(1)

// The idea of this technique is to begin with two corners of the given array. 
// We use two index variables left and right to traverse from both corners.

// Initialize: left = 0, right = n – 1

function twoSum(arr, target){
    let n = arr.length;
    
    arr.sort((a, b) => a - b);
    
    let left = 0, right = n - 1;
    
    while(left < right){
        let sum = arr[left] + arr[right];
        console.log(arr[left])
        
        if(Math.floor(sum) === target){
            return true
        }else if(sum < target){
            left++
        }else{
            right++
        }
    }

    return false;
}

let arr = [0, -1, 2, -3, 1];
let target = -2;

// Call the twoSum function and print the result
if (twoSum(arr, target))
    console.log("true");
else 
    console.log("false");