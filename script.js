import { setupGround, updateGround } from "./ground.js";

const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;
const SPEED_SCALE_INCREASE = 0.0002;

const worldElem = document.querySelector('[data-world]');
const scoreElem = document.querySelector('[data-score]');
const startScreenElem = document.querySelector('[data-start-screen]');

setPixelToWorldScale();
window.addEventListener("resize", setPixelToWorldScale);
document.addEventListener("keydown", handleStart, {once: true});



let lastTime = 0;
let speedScale = 0;
let score = 0;

function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  };
  const delta = time - lastTime;

  updateGround(delta, speedScale);
  updateSpeedScale(delta);
  updateScore(delta);

  lastTime = time;
  window.requestAnimationFrame(update);


};

function updateSpeedScale(delta) {
  speedScale += delta * SPEED_SCALE_INCREASE;

};

function updateScore(delta) {
  score += delta * 0.001;
  scoreElem.textContent = Math.floor(score)

}

function handleStart(params) {
  lastTime = null;
  speedScale = 1;
  score - 0;
  window.requestAnimationFrame(update);
  startScreenElem.classList.add("hide");
  setupGround();


}

function setPixelToWorldScale() {
  let worldToPixelScale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT)
  {
    worldToPixelScale = window.innerWidth / WORLD_WIDTH
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT
  }

  worldElem.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElem.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
};
