import { Character } from "./character";

export class Enemy extends Character {
  readonly maxHp: number; //基本はreadonlyで定義することで、外部からの変更を防ぐことができる

  constructor(name: string, hp: number) {
    super(name, hp);
    this.maxHp = hp;
  }
  //プロパティの初期化
  getHpRatio(): number {
    return this.hp / this.maxHp;
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
