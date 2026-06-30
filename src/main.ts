import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const mage = new Mage("メディア", 80);
const slime = new Enemy("スライム", 50);

// =========================
// ① これまでのテスト（残すだけ）
// =========================
console.log("=== テストバトル（単発） ===");

warrior.showStatus();
mage.showStatus();
slime.showStatus();

warrior.attack(slime);
mage.attack(slime);

slime.showStatus();

slime.attack(warrior);

warrior.showStatus();

// =========================
// ② 課題：whileバトル
// =========================

console.log("=== 本番バトル（ループ） ===");

// もう一回キャラ作る（状態リセット）
const warrior2 = new Warrior("アーサー", 100, "エクスカリバー");
const slime2 = new Enemy("スライム", 50);

warrior2.showStatus();
slime2.showStatus();

while (!warrior2.isDead() && !slime2.isDead()) {
  warrior2.attack(slime2);
  slime2.showStatus();

  if (slime2.isDead()) break;

  slime2.attack(warrior2);
  warrior2.showStatus();

  if (warrior2.isDead()) break;
}
