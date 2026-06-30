export abstract class Character {
  protected name: string; // サブクラス（Warrior、Mageなど）からアクセスできる名前
  protected hp: number; // サブクラスからアクセスできるHP

  constructor(name: string, hp: number) {
    this.name = name; // 名前を初期化
    this.hp = hp; // HPを初期化
  }

  showStatus() {
    // 現在のHPを表示
    console.log(`${this.name}: HP ${this.hp}`);
  }

  takeDamage(damage: number): void {
    // ダメージ分だけHPを減らす
    this.hp -= damage;

    // HPが0未満にならないようにする
    if (this.hp < 0) {
      this.hp = 0;
    }
  }

  isDead(): boolean {
    // HPが0以下なら倒れている(true)を返す
    return this.hp <= 0;
  }

  // 抽象メソッド
  // Characterでは処理を書かず、継承したクラスで必ず実装する
  abstract attack(opponent: Character): void;
}
