let calculator = {
    a: 0,
    b: 0,

    read() {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter value for a: ', (inputA) => {
            this.a = parseFloat(inputA);
            rl.question('Enter value for b: ', (inputB) => {
                this.b = parseFloat(inputB);
                rl.close();

                console.log('Sum: ', this.sum());
                console.log('Product: ', this.mul());
            });
        });
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();