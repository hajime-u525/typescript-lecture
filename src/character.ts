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

  abstract attack(): void;
}
