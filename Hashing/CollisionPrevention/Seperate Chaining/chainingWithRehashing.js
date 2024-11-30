class HashRehashin{

    constructor(b){
        this.BUCKET = b;
        this.numOfElement = 0;
        this.table = Array.from({length: this.BUCKET}, () => [])
    }

    //hashFunction;
    hashFunction(x){
        return x % this.BUCKET;
    }

    //current load factor
    loadFactor(){
        return this.numOfElement / this.BUCKET;
    }

    reHashing(){
        const oldBucket = this.BUCKET;
        this.BUCKET = 2 * this.BUCKET;
        const oldTable = this.table;

        this.table = Array.from({length: this.BUCKET}, () => []);
        this.numOfElement = 0;

        for(let i = 0; i < oldBucket; i++){
            for(const key of oldTable[i]){
                this.insertItem(key)
            }
        }
    }

    insertItem(x){

        while(this.loadFactor() > 0.8){
            this.reHashing();
        }
        const index = this.hashFunction(x)
        this.table[index].push(x);
        this.numOfElement++;
    }

    deleteItem(key){
        const index = this.hashFunction(key);
        const bucket = this.table[index];
        const itemIndex = bucket.indexOf(key);
        if(itemIndex !== -1){
            bucket.splice(itemIndex, 1);
            this.numOfElement--
        }
    }

    displayHash(){
        for(let i = 0; i < this.BUCKET; i++){
            console.log(i + "--->" + this.table[i].join("--->"))
        }
    }
}

// Driver program
const h = new HashRehashin(7);
const keys = [15, 11, 27, 8, 12];

// Insert keys into hash table
for (const key of keys) {
    h.insertItem(key);
}

// Delete 12 from hash table
h.deleteItem(12);

// Display hash table
h.displayHash();

// Insert more items to trigger rehashing
h.insertItem(33);
h.insertItem(45);
h.insertItem(19);

// Display hash table after rehashing
console.log("\nAfter rehashing:");
h.displayHash();