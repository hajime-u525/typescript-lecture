import { Mage } from "./mage";
import { Warrior } from "./warrior";

// const character = new Character("太郎", 200); // abstract class はインスタンス化出来ないのでエラーが出る

const warrior = new Warrior("アーサー", 100, "エクスカリバー");
warrior.showStatus();
warrior.attack();

const mage = new Mage("メディア", 80);
mage.showStatus();
mage.attack();
