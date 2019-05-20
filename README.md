# vue-simple
一个外行学习vue时的笔记

## vue的指令  
v-bind 简写 ：  
属性绑定  
class绑定  
style绑定  

v-html

v-on   
事件绑定   简写 @  

v-if  
也有v-else,v-else-if  

v-show  
v-if的值为false时，整个div是不存在的，不只是隐藏掉   
v-show的话，只是给元素加了display:none的css属性。隐藏掉。这是二者的区别  

## watch 监听器  
异步场景  

前端的一种调试方法，给vue实例声明一个变量，  
在浏览器控制台通过这个变量查看vue实例的情况  



## 计算属性
该属性值是根据其他属性值计算而来的  
数据联动  



## 其他
在浏览器的console中，直接回车就是执行了    
要想不执行，用shift+回车  


## nvm
安装nvm：注意windows需要先把之前安装的node卸载干净  
去nvm的github主页：https://github.com/coreybutler/nvm-windows/releases  
下载最新版nvm-setup.zip  
解压，一路下一步即可  


### 优化
加速：配置淘宝镜像源
打开nvm安装的根目录（我的是C:\Users\hello\AppData\Roaming\nvm）下“settings.txt”文件，在最后面追加下面两行：  
node_mirror: https://npm.taobao.org/mirrors/node/  
npm_mirror: https://npm.taobao.org/mirrors/npm/  

nvm list : 查看本地安装的node版本列表  
nvm list available :可查看远端可安装的列表  
nvm install 8.16.0 安装8.16.0版本的node    
nvm use 8.16.0 安装时候还需要使用    
 
之后可以使用node --version和npm --version检查安装是否成功  

## cnpm
npm install -g cnpm --registry=https://registry.npm.taobao.org

## 安装vue-cli
npm install -g @vue/cli

## vue-cli创建项目
1. vue create xx-xx
2. vue ui : 通过ui界面创建项目

## vue-router
路由管理  
router-link 连接到 router.js  
在router.js中指向真正的页面  

## vuex
单向数据流：view --> actions --> state -->view  
vuex用来集中管理组件状态  

store.js  
state:状态   
mutations：唯一能改变状态的方法集  

### vuex的使用 
在store.js的state中定义要在组件间共享的变量。在mutations中定义方法  
// 引入store组件，@表示的就是src目录  
import store from '@/store'   
通过store.commit('xx方法') 改变状态  
通过store.state.xxx得到状态  








