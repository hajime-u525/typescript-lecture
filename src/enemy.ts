import { Character } from "./character";

export class Enemy extends Character {
  maxHp: number;

  constructor(name: string, hp: number) {
    super(name, hp);
    this.maxHp = hp;
  }

  getHpRatio(): number {
    return this.hp / this.maxHp;
  }

  takeDamage(damage: number): void {
    this.hp -= damage;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  attack(): void {
    if (this.getHpRatio() <= 0.3) {
      console.log(`${this.name}は必死に抵抗している！`);
    } else {
      console.log(`${this.name}は攻撃してきた！`);
    }
  }
}
