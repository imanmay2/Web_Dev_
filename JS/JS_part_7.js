let student={
    name:"Anwesha",
    comp:98,
    math:99,
    chem:100,
    getAvg(){
        console.log(`${this.name} got an average marks of ${(this.chem+this.math+this.comp)/3}`);
    }
}