import { Character } from "./character";
import { Enemy } from "./enemy";
import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Priest } from "./priest";
import type { Healable } from "./healable";

const enemy = new Enemy("ドラゴン", 200);
const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const mage = new Mage("メディア", 80);

// 回復役
const healer: Healable = new Priest("アリス", 100);

// 味方パーティを「共通の型」の配列でまとめる
const party: Character[] = [warrior, mage];

warrior.showStatus();
mage.showStatus();
enemy.showStatus();

while (true) {
  // 味方の攻撃
  for (const member of party) {
    if (!member.isDead()) {
      member.attack(enemy);
    }
  }

  // 敵が倒れたら終了
  if (enemy.isDead()) {
    console.log("ドラゴンを倒した！");
    break;
  }

  // 敵の反撃（生きている最初の味方を攻撃）
  const target = party.find((member) => !member.isDead());

  if (target) {
    enemy.attack(target);
  }

  // 味方が全滅したら終了
  if (party.every((member) => member.isDead())) {
    console.log("パーティは全滅した...");
    break;
  }

  // 回復
  const healTarget = party.find((member) => !member.isDead());

  if (healTarget) {
    healer.heal(healTarget);
  }

  // 全員のHP表示
  enemy.showStatus();

  for (const member of party) {
    member.showStatus();
  }
}
