class person {
    constructor (name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
    talking (){
        console.log("talks");
        
    }
}
let md = new person ("mouadh", 19, "student")
let mh = new person ("mohammed", 24, "doctor")
let fa = new person ("fatima", 22, "student")
let t = [md, mh, fa];
// const f = t.filter(p => p.age < 23)
// const m = t.map(p => p.age)
let c = 'hello world!!'
let k = c.split('!')
console.log(k);

 

