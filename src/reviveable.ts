import type { Character } from "./character.ts";

export interface Reviveable {
  revive(target: Character): void;
}
