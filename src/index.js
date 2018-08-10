import dva from 'dva';
import './index.css';


// 1. Initialize
// const app = dva();


const app = dva({
      initialState: {
        products: [
          {
            name: 'dva',
            id: 1,
            key:1
        },{
            name: 'antd',
            id: 2,
            key:2
    }],
    users:{
         list: [],
         total: null
    }
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');


// 最简的dva
// import dva from 'dva';
// const App = () => <div> Hello dva </div>;

// 创建应用
// const app = dva();
// 注册视图
// app.router(() => < App/> );
// 启动应用
// app.start('#root');
