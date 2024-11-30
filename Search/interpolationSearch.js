function interpolationSearch(arr, target){
    let low = 0
    let high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]){
        let pos = low + Math.floor((target - arr[low] * (high - low)) / (arr[high] - arr[low]))

        if(arr[pos] == target){
            return pos;
        }

        if(arr[pos] > target){
            high = pos - 1
        }else{
            low = pos + 1;
        }
    }

    return -1
}