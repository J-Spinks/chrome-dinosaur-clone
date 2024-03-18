import { incrementCustomProperty } from "./updateCustomProperty.js";

const SPEED = 0.05;
const groundElems = document.querySelectorAll("[data-ground]");

export function updatedGround(delta) {
  groundElems.forEach(ground => {
    incrementCustomProperty(ground, "--left", delta * SPEED * -1)

  });

}
