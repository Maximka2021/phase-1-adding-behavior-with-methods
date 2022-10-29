class Cat{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`;
    }
}

const cat = new Cat('Max', 'female');
cat.speak();

class Dog{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;  
    }
    speak(){
        return `${this.name} says woof!`;
    }
}

const dog = new Dog('Basya', 'male');
dog.speak();

class Bird{
    constructor(name, sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        if(this.sex === 'male'){
            return `It's me! ${this.name}, the parrot!`;
        }else{
            return `${this.name} says squawk!`;
        }
    }
}

const bird1 = new Bird('Jack', 'male');
const bird2 = new Bird('Alex', 'female');
bird1.speak();
bird2.speak()