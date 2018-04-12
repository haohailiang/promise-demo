# 视频来源
[Promise 入门](https://www.imooc.com/learn/949)
# Promise概念
* 可以将异步操作队列化,按照期望的顺序进行,符合预期的逻辑
* 可以在对象之间传递和操作Promise,帮助我们处理队列
## 基本结构
1. Promise只是一个代理对象,和原先进行的操作并无关系
2. 通过引入一个回调来避免更多的回调
```
new Promise(
	/* 一个执行器execute */
	(resolve, reject) => {
		// doSomething...
		resolve();  //数据处理完成
		reject();   //数据处理结束[这2个只能返回一个]
	}
)
.then(
	() => {},  //成功,下一步
	() => {}   //失败,做相应处理
);
```
## Promise的状态
1. pengding [待定]原始状态
2. fulfilled [履行,实现]操作成功
3. rejected [被否决]操作失败
## 状态切换
* Promise一旦状态发生变化,就会触发.then()里的响应函数处理后续步骤
* Promise里的状态一旦发生改变就不能再改变,承若一旦履行就不会反悔
# .then()
* .then()接收2个函数作为参数,分别代表fulfilled和rejected
* .then()返回一个新的Promise实例,所以可以链式调用
## Promise.all()
* Promise.all([p1, p2, p3])用于将多个Promise实例包装成一个Promise实例
* 数组里可以是Promise实例,也可以是别的值,只有Promise会等待状态的改变
* 所有子Promise完成,该Promise才完成,返回的值是全部值的数组
* 有任何一个失败,该Promise失败,返回的是第一个失败的Promise的值
[We have a problem with promises](https://div.io/topic/1095)

deferred-05是Promise的好方法[隐式调用]