import { Character } from "./character.ts";

export class Mage extends Character {
  override attack(opponent: Character): void {
    console.log(`${this.name}は魔法を唱えた！`);
    opponent.takeDamage(25);
  }
}
