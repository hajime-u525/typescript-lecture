import { Character } from "./character";

export interface Healable {
  heal(target: Character): void;
}
