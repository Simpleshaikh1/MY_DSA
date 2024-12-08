class MyStructure{
    constructor(){
        this.arr = [];
        this.map = new Map();
    }

    insert(x){
        if(!this.map.has(x)){
            let index = this.arr.length;
            this.arr.push(x);
            this.map.set(x, index)
        }
    }

    remove(x){
        if(this.map.has(x)){
            let index = this.map.get(x);
            this.map.delete(x);
            if(index !== this.arr.length - 1){
                let last = this.arr.length - 1;
                this.arr[index] = this.arr[last];
                if(last !== index){
                    this.map.set(this.arr[index], index)
                }
            }
            this.arr.pop();
        }
    }

    search(x){
        return this.map.has(x) ? this.map.get(x) : -1;
    }

    getRandom(){
        let randomIndex = Math.floor(Math.random() * this.arr.length);
        return this.arr[randomIndex]
    }
}

let ds = new MyStructure();
ds.insert(10);
ds.insert(20);
ds.insert(30);
ds.insert(40);
console.log(ds.search(30));
ds.remove(40);
ds.insert(50);
console.log(ds.search(20));
console.log(ds.getRandom());