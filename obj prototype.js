function person(){
    this.name='john',
    this.age=25
}
let person1=new person();
let person2=new person();
person.prototype.gender="male";
console.log(person1.gender);