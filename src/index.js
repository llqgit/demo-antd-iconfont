import dva from 'dva';
import './index.css';


// import './common.less';
// 注意⚠️
// 在这里引入自定义字体的样式文件，**不能** 覆盖 ant 默认字体设置，因为可能在下面代码执行的时候才引入ant的css，导致覆盖
// 在这里引入自定义字体的样式文件，**不能** 覆盖 ant 默认字体设置，因为可能在下面代码执行的时候才引入ant的css，导致覆盖
// 在这里引入自定义字体的样式文件，**不能** 覆盖 ant 默认字体设置，因为可能在下面代码执行的时候才引入ant的css，导致覆盖

// 本文在 routes 组件中引入 less 文件，覆盖默认字体设置

// 随着 ant.design 的更新，可能会有其他更优的方法，覆盖默认样式，不在本文讨论范围内


// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
