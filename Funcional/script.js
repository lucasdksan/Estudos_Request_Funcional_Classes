const createPerson = (name, lastName, age)=>{
    return {
        name,
        lastName,
        age,
        getFullName: function(){
            return `${this.name} ${this.lastName}`;
        }
    }
}

let person = createPerson("Lucas", "Silva", 25);

console.log(person.getFullName());