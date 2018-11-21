# listen-physical-key
监听物理返回按键

做移动端项目时，有时需要监听物理或浏览器返回按键。例如在某个路由下，点击返回按钮直接退出App。

使用：
```javascript
import listenHistoryBack from './history-back'

if(location.pathname.indexOf('home') > -1) {
  listenHistoryBack(() => {
    // 监听到之后的操作
    app.quit()
  })
}
```