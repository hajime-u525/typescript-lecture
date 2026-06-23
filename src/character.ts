export abstract class Character {
  protected name: string;
  protected hp: number;

  constructor(name: string, hp: number) {
    this.name = name;
    this.hp = hp;
  }

  showStatus() {
    console.log(`${this.name}: HP ${this.hp}`);
  }

  takeDamage(damage: number): void {
    this.hp -= damage;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  isDead(): boolean {
    return this.hp <= 0;
  }

  abstract attack(opponent: Character): void;
}
