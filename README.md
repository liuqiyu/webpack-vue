# webpack入门

## webpack-dev-server: 开发环境，代码发生变化时自动编译

```
npm install --save-dev webpack-dev-server

+   devServer: {
+     contentBase: './dist'
+   },

+     "start": "webpack-dev-server --open",
```

## 模块热加载 HRM

> HRM 不适用于生产环境，这意味着他只能在开发环境使用。

