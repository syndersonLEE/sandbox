class Human {
    constructor(type = 'human') {
        this.type = type;
    }

    static isHuman(human) {
        console.log(human instanceof Human);
        return human instanceof Human;
    }

    breathe() {
        console.log('ham');
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayName() {
        super.breathe();
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);