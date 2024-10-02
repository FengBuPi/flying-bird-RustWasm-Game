import Game, { GameOptions } from "./Game/Game.js";
import Router, { RouterOption } from "./Router/Router.js";
import init from "../pkg/flappybird_Rust.js"

document.addEventListener("DOMContentLoaded", async () => {
  await init()

  const parser = new DOMParser(); // 解析html字符串为dom对象
  const gethomePage = fetch('./Components/home-game-page.html').then(response => response.text());
  const getgamePage = fetch('./Components/start-game-page.html').then(response => response.text());
  const [homePageRes, getgamePageRes] = await Promise.all([gethomePage, getgamePage])
  const homePage = parser.parseFromString(homePageRes, 'text/html');
  const gamePage = parser.parseFromString(getgamePageRes, 'text/html');

  const routerOptins: RouterOption[] = [
    {
      name: '游戏首页',
      url: '/home',
      template: homePage.getElementById('home-game-page') as HTMLTemplateElement, // 页面组件
    },
    {
      name: '游戏中',
      url: '/start',
      template: gamePage.getElementById('start-game-page') as HTMLTemplateElement,
    }
  ]

  const router = new Router(routerOptins, document.getElementById('app')!)
  router.push('/home', () => {
    document.getElementById('start-btn')!.addEventListener('click', () => {
      router.push('/start', () => {
        // 该配置项无法提出当前作用域,是否有优化的空间?(因为离开当前作用域后document.getElementById('bird-box')为null)
        const gameOptions: GameOptions = {
          bird: document.getElementById("bird-box")!, // 鸟盒子
          obstacle: document.getElementById("obstacle-box")!, // 障碍物盒子
          height: window.innerHeight, // 屏幕高度
          width: window.innerWidth, // 屏幕宽度
          obstacleSpace: 188, // 两柱子之间出现的间距(px)
          obstacleOptions: {
            speed: 37.5 // 柱子移动速度(px/s)
          },
          birdOptions: {
            y: 0, // 鸟的初始高度 
            angle: 0, // 鸟的初始角度
            gravity: 0.01, // 重力加速度
            speed: 0, // 鸟的初始速度
            jumpUp: 1 // 鸟一次跳跃的高度
          }
        }
        const game = new Game(gameOptions);
        game.start()
        game.onEnd = () => {
          console.log("游戏结束")
          if (confirm("游戏结束")) {
            game.start()
          }
        }
      })
    })
  })
});

