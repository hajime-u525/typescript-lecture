import { Character } from "./character";
import type { Healable } from "./healable";

export class Priest extends Character implements Healable {
  constructor(name: string, hp: number) {
    super(name, hp);
  }

  attack(): void {
    console.log("プリーストは攻撃できない！");
  }

  heal(target: Character): void {
    console.log("アリスは回復魔法を唱えた！");
    target.takeHeal(15);
  }
}
