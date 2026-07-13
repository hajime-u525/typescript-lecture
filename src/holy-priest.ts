import { Character } from "./character";
import type { Healable } from "./healable";
import type { Reviveable } from "./reviveable";

export class HolyPriest extends Character implements Healable, Reviveable {
  constructor(name: string, hp: number) {
    super(name, hp);
  }

  attack() {
    console.log("ホーリープリーストは攻撃できない！");
  }

  heal(target: Character) {
    target.takeHeal(15);
  }

  revive(target: Character) {
    if (target.isDead()) {
      target.takeHeal(50);
    } else {
      console.log("まだ倒れていない");
    }
  }
}
