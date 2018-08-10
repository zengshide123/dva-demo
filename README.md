# dva 初次接触

## 已经内置的常用依赖

 - 内置`react` `react-dom` `react-router-dom` `propTypes`

## 与常用的react的开发比较

 - route文件夹中,放置的路由页面(在route.js)中引入配置,结构更加清晰
 - model的,使用namespace,state，reducers来类似原来的分离的reducer文件
 - dva的初始化,传入整个App的state,类似于原来在最上层传递store
 - 定义好model后,需要在入口,使用model()方法来注册一下
 - 在需要使用状态管理的地方,使用connect的方法,依旧是高阶组件的用法,能够进行属性和方法的过滤
 - 在组件中,手动dispatch个actions,来对状态进行管理

## 初次使用的体会

 - 代理和mock数据便利
 - 针对antd进行theme配置更简单
 - 组件、路由、数据模块结构更加明确
 - 内置Api丰富
 - 使用async action更易书写
 - 预置react全家桶
 - 调试起来方便

 ## 查看

 下载项目
 ```
    git clone https://github.com/zengshide123/dva-demo.git
 ```

 安装依赖

 ```
   npm i 
 ```

 启动项目

 ```
  npm start
 ```
 ## 项目内容

 1. router.js 进行路由配置
 2. model文件夹中定义各个model,并在index.js中进行配置
 3. routes 文件夹中开发各个路由页面
 4. `/products` 页面展示了路由的基本使用
 5.`/curd` 页面展示了异步action获取数据

