// Find Itinerary from a given list of tickets

// Input:
// "Chennai" -> "Banglore"
// "Bombay" -> "Delhi"
// "Goa"    -> "Chennai"
// "Delhi"  -> "Goa"

// Output: 
// Bombay->Delhi, Delhi->Goa, Goa->Chennai, Chennai->Banglore,

// We can use Topological sorting of DFS, but also we can use hashing to avoid building graph
//1. Create a Hashmap of given pair of tickets, dataset Entry  is of the form "from->to"
//2. Find the starting point of itenary. 
// a. create reverseMap of form "to->from"
// b) Traverse 'dataset'.  For every key of dataset, check if it
// is there in 'reverseMap'.  If a key is not present, then we 
// found the starting point. In the above example, "Bombay" is
// starting point.
// 3) Start from above found starting point and traverse the 'dataset' 
//    to print itinerary.

function printItinerary(dataset){
    let reverseMap = new Map();

    for(const[key, value] of dataSet){
        reverseMap.set(value, key);
    }

    let start = "";

    for(let key of dataSet.keys()){
        if(!reverseMap.has(key)){
            start = key;
            break
        }
    }

    if(start.length == 0){
        console.log('Invalid Input')
        return;
    }

    let it = start;
    while(dataSet.has(it)){
        console.log(it + "->" + dataSet.get(it))
        it = dataSet.get(it)
    }
}

// driver code 
  
let dataSet = new Map(); 
dataSet.set("Chennai","Banglore"); 
dataSet.set("Bombay","Delhi"); 
dataSet.set("Goa","Chennai"); 
dataSet.set("Delhi","Goa"); 
printItinerary(dataSet); 