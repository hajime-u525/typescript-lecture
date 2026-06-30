import { Character } from "./character";

export class Archer extends Character {
  private arrows: number;

  constructor(name: string, hp: number, arrows: number) {
    super(name, hp);
    this.arrows = arrows;
  }

  override attack(opponent: Character): void {
    if (this.arrows <= 0) {
      console.log(`${this.name}は矢がない!`);
      return;
    }

    this.arrows--;
    console.log(`${this.name}は矢を放った!`);
    opponent.takeDamage(20);
  }
}
