class HashNode{
    constructor(key, value){
        this.key = key;
        this.value = value;
    }
}

let capacity = 20;
let size = 0;

let arr = new Array(capacity);

let dummy = new HashNode(-1, -1);

function insert(key, value){
    let temp = new HashNode(key, value);
    let hash_index = key % capacity;

    while(arr[hash_index] !== undefined && arr[hash_index].key !== key && arr[hash_index] !== -1){
        hash_index ++;
        hash_index %= capacity;
    }

    if(arr[hash_index] === undefined && arr[hash_index].key === -1){
        size++;
    }

    arr[hash_index] += temp;
}

function delete_key(key) {
    let hash_index = key % capacity;
    while(arr[hash_index] !== undefined){
        if(arr[hash_index].key === key){
            arr[hash_index] = dummy;

            size--

            return 1;
        }

        hash_index++;
        hash_index %= capacity
    }

    return 0;
}

function find(key){
    let hash_index = key % capacity;
    let counter = 0;

    while(arr[hash_index] !== undefined){
        if(counter > capacity){
            break;
        }

        if(arr[hash_index].key === key){
            return arr[hash_index].value
        }

        hash_index++
        hash_index %= capacity;
        counter++
    }

    return -1;
}


insert(1, 5);
insert(2, 15);
insert(3, 20);
insert(4, 7);
 
if (find(4) !== -1) {
  console.log("Value of Key 4 = ", find(4));
} else {
  console.log("Key 4 does not exist");
}
 
if (delete_key(4)) {
  console.log("Node value of key 4 is deleted successfully");
} else {
  console.log("Key does not exist");
}
 
if (find(4) !== -1) {
  console.log("Value of Key 4 = ", find(4));
} else {
  console.log("Key 4 does not exist");
}