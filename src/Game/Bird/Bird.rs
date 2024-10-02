use wasm_bindgen::prelude::*;
use web_sys::*;

// 编译为console.log()输出,可用与调试代码
// web_sys::console::log_1(
//     &format!(
//         "y:{},angle:{},gravity:{},speed:{},jump_up:{}",
//         self.y, self.angle, self.gravity, self.speed, self.jump_up
//     )
//     .into(),
// );

#[wasm_bindgen]
pub struct Bird {
    pub y: f64,       // 纵向位置
    pub angle: f64,   // 当前角度
    pub speed: f64,   // 当前速度
    pub gravity: f64, // 重力
    pub jump_up: f64, // 跳跃速度
}

#[wasm_bindgen]
impl Bird {
    #[wasm_bindgen(constructor)]
    pub fn new(y: f64, angle: f64, gravity: f64, speed: f64, jump_up: f64) -> Bird {
        Bird {
            y,
            angle,
            speed,
            gravity,
            jump_up,
        }
    }

    pub fn init(&mut self, y: f64, angle: f64, gravity: f64, speed: f64, jump_up: f64) -> Vec<f64> {
        self.y = y;
        self.angle = angle;
        self.speed = speed;
        self.gravity = gravity;
        self.jump_up = jump_up;
        vec![self.y, self.angle]
    }

    pub fn jump(&mut self) {
        self.angle -= 30.0; // 抬头
        self.speed = self.speed - self.jump_up;
    }

    fn falling(&mut self) {
        if self.speed < 100.0 {
            self.speed += self.gravity;
        }
        self.y += self.speed;
    }

    fn rotate(&mut self) {
        if self.angle < -33.0 {
            self.angle = -33.0;
        }
        if self.angle > 36.0 {
            self.angle = 36.0;
        }
        if self.speed > 0.0 {
            self.angle += 0.5; // 低头
        }
    }

    pub fn render(&mut self) -> Vec<f64> {
        self.rotate();
        self.falling();
        // 防止触顶过多
        if self.y < -10.0 {
            self.y = 1.0;
            self.speed = 0.0;
        }
        vec![self.y, self.angle]
    }
}
