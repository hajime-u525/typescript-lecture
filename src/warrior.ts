import { Character } from "./character.ts";

export class Warrior extends Character {
  private weapon: string;

  constructor(name: string, hp: number, weapon: string) {
    super(name, hp); // super() <- 継承元 (character) の constructor
    this.weapon = weapon;
  }

  attack(opponent: Character): void {
    console.log(`${this.name}は${this.weapon}で攻撃した！`);
    opponent.takeDamage(30);
  }
}
