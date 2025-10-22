class InvalidTaxRateError extends Error {}

class Employee {
    static count = 0;
    static hoursPerWeek = 35;

    name: string;
    id: number;
    #taxRate: number;

    constructor(name: string, taxRate: number) {
        this.name = name;
        Employee.validateTaxRate(taxRate);
        this.#taxRate = taxRate;

        this.id = ++Employee.count;
    }

    get taxRate(): number {
        return this.#taxRate;
    }

    set taxRate(value: number) {
        Employee.validateTaxRate(value);
        this.#taxRate = value;
    }

    static isTaxRateValid(rate: number): boolean {
        return rate >= 0.1 && rate <= 0.4;
    }

    static validateTaxRate(rate: number): void {
        if (!Employee.isTaxRateValid(rate)) {
            throw new InvalidTaxRateError(
                `tax rate ${rate} must be between 0.1 and 0.4 (inclusive)`,
            );
        }
    }

    deductTaxes(salary: number): number {
        return salary * (1 - this.taxRate);
    }
}

class HourlyEmployee extends Employee {
    hourlyRate: number;

    constructor(name: string, taxRate: number, hourlyRate: number) {
        super(name, taxRate);
        this.hourlyRate = hourlyRate;
    }

    get weeklyPay(): number {
        const pay = this.hourlyRate * Employee.hoursPerWeek;
        return this.deductTaxes(pay);
    }
}

class SalariedEmployee extends Employee {
    annualSalary: number;

    constructor(name: string, taxRate: number, annualSalary: number) {
        super(name, taxRate);
        this.annualSalary = annualSalary;
    }

    get weeklyPay(): number {
        const pay = this.annualSalary / Employee.hoursPerWeek;
        return this.deductTaxes(pay);
    }
}

function main(): void {
    const name = prompt("Name:") || "";
    const rate = Number(prompt("Tax rate:"));

    try {
        const employee = new Employee(name, rate);
        console.log(employee);
    } catch (error) {
        if (error instanceof InvalidTaxRateError) {
            console.log("Error while creating employee.");
        }
    }
}

main();
