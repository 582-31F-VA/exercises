class Ability {
    #score: number;

    constructor(score: number) {
        if (Ability.isScoreValid(score)) {
            this.#score = score;
        } else {
            this.#score = 0;
        }
    }

    get modifier(): number {
        return (this.#score - 10) / 2;
    }

    static isScoreValid(score: number): boolean {
        return 0 <= score && score <= 30;
    }
}

class Character {
    name: string;
    race: string;
    className: string;
    str: Ability;
    dex: Ability;
    // ...

    constructor(
        name: string,
        race: string,
        className: string,
        str: number,
        dex: number,
    ) {
        this.name = name;
        this.race = race;
        this.className = className;

        this.str = new Ability(str);
        this.dex = new Ability(dex);
        // ...
    }

    get armorClass(): number {
        return this.dex.modifier + 10;
    }

    static roll(): number {
        const max = 20;
        return Math.floor(Math.random() * max) + 1;
    }

    attack(type: "melee" | "ranged", target: Character): boolean {
        const modifier = type === "melee"
            ? this.str.modifier
            : this.dex.modifier;
        const attackRoll = Character.roll() + modifier;
        return attackRoll > target.armorClass;
    }

    toString(): string {
        return this.name;
    }
}

const bob = new Character("Bob", "Human", "Mage", 10, 15);
console.log(String(bob));
