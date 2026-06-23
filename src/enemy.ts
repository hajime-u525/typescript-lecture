import { Character } from "./character";

export class Enemy extends Character {
  maxHp: number;

  constructor(name: string, hp: number) {
    super(name, hp);
    this.maxHp = hp;
  }
  //プロパティの初期化
  getHpRatio(): number {
    return this.hp / this.maxHp;
  }
  //ダメージを受ける
  takeDamage(damage: number): void {
    this.hp -= damage;

    if (this.hp < 0) {
      this.hp = 0;
    }
  }
  //通常時：name +"は攻撃してきた！"、HPが30%以下の時：name + "は必死に抵抗している！"
  attack(): void {
    if (this.getHpRatio() <= 0.3) {
      console.log(`${this.name}は必死に抵抗している！`);
    } else {
      console.log(`${this.name}は攻撃してきた！`);
    }
  }
}
