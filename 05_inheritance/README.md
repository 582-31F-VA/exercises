# Exercise: Inheritance

Create an `Employee` class with `name`, `id` and `taxRate` properties.
The `id` of an employee corresponds to the total number of employees
plus 1. The value of `taxRate` must be between 0.1 and 0.4 (inclusive).

Then, create two subclasses of `Employee`:

- `HourlyEmployee`, which has an `hourlyRate` property; and
- `SalariedEmployee`, which has an `annualSalary` property.

For both subclasses, define a `weeklyPay` getter that returns the
employee's wages for a 35-hours week, after applying their `taxRate`.
