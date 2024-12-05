// Find number of Employees Under every Manager

// { "A", "C" },
// { "B", "C" },
// { "C", "F" },
// { "D", "E" },
// { "E", "F" },
// { "F", "F" } 

// In this example C is manager of A, 
// C is also manager of B, F is manager 
// of C and so on.

// A - 0  
// B - 0
// C - 2
// D - 0
// E - 1
// F - 5 
let result = new Map();

// Driver function
function main() {
    let dataSet = new Map();
    dataSet.set("A", "C");
    dataSet.set("B", "C");
    dataSet.set("C", "F");
    dataSet.set("D", "E");
    dataSet.set("E", "F");
    dataSet.set("F", "F");
 
    populateResult(dataSet);
    // console.log('here')
    console.log("result = ", result);
}

function populateResult(dataset){
    let mngrEmpMap = new Map();
    for(let [emp , mngr] of dataset){
        if(emp !== mngr){
            let directReportList = mngrEmpMap.get(mngr)
            if(directReportList === undefined){
                directReportList = [];
                mngrEmpMap.set(mngr, directReportList)
            }
            directReportList.push(emp)
        }
    }
    
    for(let mngr of dataset.keys()){
        populateResultUtil(mngr, mngrEmpMap)
    }
}

function populateResultUtil(mngr, mngrEmpMap){
    let count = 0;
    if(!mngrEmpMap.has(mngr)){
        result.set(mngr, 0);
        
        return 0;
    }else if(result.has(mngr)){
        count = result.get(mngr)
    }else{
        let directReportEmpList = mngrEmpMap.get(mngr)
        count = directReportEmpList.length;
        for(let directReportEmp of directReportEmpList){
            count += populateResultUtil(directReportEmp, mngrEmpMap)
        }
        result.set(mngr, count)
    }
    return count
}

main();