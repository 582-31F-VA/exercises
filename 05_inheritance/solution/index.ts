class Employee {
    static count = 0;
    static hoursPerWeek = 35;

    name: string;
    id: number;
    #taxRate: number;

    constructor(name: string, taxRate: number) {
        this.name = name;

        if (!Employee.isTaxRateValid(taxRate)) this.#taxRate = 0;
        this.#taxRate = taxRate;

        this.id = ++Employee.count;
    }

    get taxRate(): number {
        return this.#taxRate;
    }

    set taxRate(value: number) {
        if (!Employee.isTaxRateValid(value)) this.#taxRate = 0;
        this.#taxRate = value;
    }

    static isTaxRateValid(rate: number): boolean {
        return rate >= 0.1 && rate <= 0.4;
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
