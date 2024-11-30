function ternarySearch(l, r, key, arr){
    if(r >= l){
        let mid1 = l + parseInt((r - l) / 3, 10);
        let mid2 = r - parseInt((r - l) / 3, 10);

        if(arr[mid1] == key){
            return mid1;
        }

        if(arr[mid2] == key){
            return mid2;
        }

        if(key < arr[mid1]){
            return ternarySearch(l, mid1 - 1, key, arr);
        }else if(key > arr[mid2]){
            return ternarySearch(mid2 + 1, r, key, arr);
        }else{
            return ternarySearch(mid1 + 1, mid2 - 1, key, arr);
        }
    }

    return -1;
}


let l, r, p, key;
 
// Get the array
// Sort the array if not sorted
let ar = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

// Starting index
l = 0;

// end element index
r = 9;

// Checking for 5

// Key to be searched in the array
key = 5;

// Search the key using ternarySearch
p = ternarySearch(l, r, key, ar);

// Print the result
console.log("Index of " + key + " is " + p + " ");

// Checking for 50

// Key to be searched in the array
key = 50;

// Search the key using ternarySearch
p = ternarySearch(l, r, key, ar);

// Print the result
console.log("Index of " + key + " is " + p);