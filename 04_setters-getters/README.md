# Exercise: Getters and setters

Design and implement the classes needed to represent the domain
described below. When pertinent, use setters and getters.

> Characters in Dungeons & Dragons have a **name**, a **race** (such as
> Human, Elf, or Dwarf), a **class** (such as Barbarian, Cleric, or
> Druid), and a set of **ability scores**. The six ability scores are:
> **strength**, **dexterity**, **constitution**, **intelligence**,
> **wisdom**, and **charisma**. Each ability score ranges from 0 to 30
> (inclusive).
>
> In addition to these scores, a character also has an **armor class**
> (AC), which determines how difficult they are to hit in combat. By
> default, a character's AC is calculated by adding 10 to their
> **dexterity modifier**.
>
> To compute a character's dexterity modifier, subtract 10 from their
> dexterity score, divide the result by 2, and round down. Characters
> also have a **strength modifier**, which is calculated in the same
> way, but using their strength score instead.
>
> A character can make **melee** or **ranged attacks** against other
> characters. To determine whether the attack hits, roll a 20-sided die
> (i.e., pick a random number between 1 and 20). This roll is called an
> **attack roll**. Add the strength modifier if the attack is melee, or
> the dexterity modifier if it is ranged. If the total of the attack
> roll is greater than the target's armor class, the attack hits;
> otherwise, it misses.
