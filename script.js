class Atm {
    constructor (type) {
        this.type = type
        this.money = 0
        this.transactionHistory = []
    }
    withdraw (amount) {
        this.money -= amount
        this.transactionHistory.push(-amount + '=' + this.money)
    }
    deposit (amount) {
        this.money += amount
        this.transactionHistory.push('+' + amount + '=' + this.money)
    }
    showBalance () {
        console.log(this.money)
    }

}


//////

var ryanAcc = new Atm('checking')

var ryanSavings = new Atm('savings')

/////

// animal classes

class Animal {
    constructor (color, name, domesticated, flies = false) {
        this.color = color
        this.name = name
        this.flies = flies
        
    }
    fetch () {
        console.log("I'm sorry Dave, I'm afraid I can't do that.")
    }
    eat () {
        console.log('omnomnom')
    }
    fly () {
        if (this.flies) console.log('wooosh')
    }

}

/// EXTENDER

class Dog extends Animal {
    constructor (color, name, flies, breed, goodBoy, domesticated) {
        //  SUPER calls ( superimposes ) the original constructor that it's as EXTENSION of. 
        super(color, name, domesticated, flies)
        this.breed = breed
        this.goodBoy = goodBoy
        this.domesticated = domesticated
    }
}

// EXTEND - CAT

class Cat extends Animal {
    constructor (color, name, flies, breed, clawed, indoor, domesticated) {
        //  SUPER calls ( superimposes ) the original constructor that it's as EXTENSION of. 
        super(color, name, domesticated, flies)
        this.breed = breed
        this.clawed = clawed
        this.indoor = indoor
        this.goodBoy = goodBoy
        this.domesticated = domesticated
    }
}


var greyCat = new Cat ('russian blue', 'grey', true, 'Oliver', true, false)

