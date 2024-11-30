class Hash {
  constructor(v){
    this.BUCKET = v;
    this.table = new Array(v);

    for(let i = 0; i < this.BUCKET; i++){
        this.table[i] = new Array()
    }
  }

  insertItem(x){
    const index = this.hashFunction(x);
    this.table[index].push(x)
  }

  deleteItem(key){
    const index = this.hashFunction(key);

    const i = this.table[index].indexOf(key);

    if(i !== -1){
        this.table[index].splice(i, 1);
    }
  }

  displayHash(){
    for(let i = 0; i < this.BUCKET; i++){
        let str = `${i}`;
        for(let j = 0; j < this.table[i].length; j++){
            str += `----> ${this.table[i][j]}`
        }
        console.log(str)
    }
  }

  //Hash function
  hashFunction(x){
    return x % this.BUCKET;
  }
}

const a = [15, 11, 27, 8, 12];
const n = a.length;

// insert the keys into the hash table
const h = new Hash(7);   // 7 is count of buckets in hash table
for (let i = 0; i < n; i++) {
    h.insertItem(a[i]);
}

// delete 12 from hash table
// h.deleteItem(12);

// display the Hash table
h.displayHash();