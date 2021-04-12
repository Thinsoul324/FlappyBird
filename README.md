## FlappyBird

## 源码目录介绍
```
./js
├── base                                   // 存放基本工具类
│   ├── Resources.js                       // 资源文件
│   ├── ResourceLoader.js                  // 资源文件加载器：确保canvas在图片资源加载完成后才进行渲染
│   ├── DataStore.js                       // 变量缓存器：方便我们在不同的类中访问和修改变量
|   └── Sprite.js                          // 精灵的基类：负责初始化精灵加载的资源和大小以及位置
├── player                                 // 存放用户交互类
│   ├── Birds.js                           // 小鸟类
│   └── Score.js                           // 计分器类
│   └── StarButton.js                      // 开始按钮类
├── runtime
│   ├── BackGround.js                      // 背景类
│   ├── Land.js                            // 陆地类：不断移动的陆地
│   ├── UpPencil.js                        // 上半部分铅笔
│   └── DownPencil.js                      // 下半部分铅笔
├── Driector.js                            // 导演类：控制游戏的逻辑
└── Main.js                                // 初始化整个游戏的精灵：作为游戏开始的入口

```