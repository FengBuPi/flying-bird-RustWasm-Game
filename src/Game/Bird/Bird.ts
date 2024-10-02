import { Bird as Bird_Rust } from '../../../pkg/flappybird_Rust.js';
export interface BirdOptions {
  y: number; // 鸟的初始高度
  angle: number; // 鸟的初始角度
  gravity: number; // 重力加速度
  speed: number; // 鸟的初始速度
  jumpUp: number; // 鸟一次跳跃的高度
}

export default class Bird extends Bird_Rust {
  bird: HTMLElement;
  birdOptions: BirdOptions = {
    y: 0,
    angle: 0,
    gravity: 0.1,
    speed: 0,
    jumpUp: 1
  }
  constructor(bird: HTMLElement, birdOptions: BirdOptions) {
    const { y, angle, gravity, speed, jumpUp } = birdOptions
    super(y, angle, gravity, speed, jumpUp);
    this.bird = bird;
    this.birdOptions = birdOptions || this.birdOptions;
    this.initState(y, angle, gravity, speed, jumpUp)
  }

  public initState(y: number, angle: number, gravity: number, speed: number, jumpUp: number) {
    const [translateY, ranslateAngle] = super.init(y, angle, gravity, speed, jumpUp);
    this.bird.style.transform = `translate(0,${translateY}px) rotate(${ranslateAngle}deg)`;
  }

  public renderBrid() {
    const [y, angle] = super.render();
    // 离开视口触发事件
    if (y > window.innerHeight) {
      this.onOutOfViewport()
    }
    this.bird.style.transform = `translate(0,${y}px) rotate(${angle}deg)`;
  }

  // 离开视口事件
  public onOutOfViewport() { }

  // 检查鸟是否离开屏幕
  public isbirdOutOfView() {
    return Number(window.innerHeight) < Number(this.y)
  }

  public unMounted() {
    console.log(this.y, this.angle, this.gravity, this.speed, this.jump_up)
    const { y, angle, gravity, speed, jumpUp } = this.birdOptions
    this.initState(y, angle, gravity, speed, jumpUp)
  }
}