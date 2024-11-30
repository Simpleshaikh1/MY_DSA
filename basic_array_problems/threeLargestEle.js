function threeLargestElement(arr, n){
    let first, second, third;

    if(n < 3){
        return;
    }

    third = first = second = Number.MIN_VALUE;

    for(let i = 0; i < n; i++){
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i]
        }else if(arr[i] > second){
            third = second;
            second = arr[i];
        }else if (arr[i] > third){
            third = arr[i]
        }
    }

    console.log("Three largest elements are " + first + " " + second + " " + third); 
}

let array = [12, 13, 1, 10, 34, 9]
threeLargestElement(array, array.length)