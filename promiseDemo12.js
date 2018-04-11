var loopCount = 1e9; // 根据浏览器的性能来设置延迟的时间

function doSomething() {
	return Promise.resolve('doSomething');
}

function doSomethingElse() {
	return Promise.resolve('doSomethingElse');
}

function finalHandler(res) {
	console.log(res);
	return Promise.resolve('finalHandler');
}

// doSomething()
// .then(() => {
// 	return doSomethingElse();
// })
// .then(finalHandler);

// doSomething()
// .then(() => {
//   doSomethingElse();
// })
// .then(finalHandler);

// doSomething()
// .then(doSomethingElse())
// .then(finalHandler);
// 会发生穿透现象

doSomething()
.then(doSomethingElse)
.then(finalHandler);
// 不会发生穿透现象