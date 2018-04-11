var loopCount = 1e9; // 根据浏览器的性能来设置延迟的时间

function doSomething() {
	for(var i=0; i<loopCount; i++){}
	console.table({doSomething:+new Date});
	return Promise.resolve('doSomething');
}

function doSomethingElse() {
	for(var i=0; i<loopCount; i++){}
	console.table({doSomethingElse:+new Date});
	return Promise.resolve('doSomethingElse');
}

function finalHandler() {
	for(var i=0; i<loopCount; i++){}
	console.table({finalHandler:+new Date});
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

doSomething()
.then(doSomethingElse)
.then(finalHandler);