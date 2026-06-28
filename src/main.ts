import { Mage } from "./mage";
import { Warrior } from "./warrior";
import { Enemy } from "./enemy";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
const mage = new Mage("メディア", 80);
const slime = new Enemy("スライム", 50);

warrior.showStatus();
mage.showStatus();
slime.showStatus();

warrior.attack(slime);
mage.attack(slime);

slime.showStatus();

slime.attack(warrior);

warrior.showStatus();
