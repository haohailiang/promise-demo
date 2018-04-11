// promises 穿透
// then中永远传递的是函数
Promise.resolve('foo')
	   .then(Promise.resolve('bar'))
	   .then(result => {
	   		console.log(result);
	   	});

// then传递的不是一个函数就会解析成null
Promise.resolve('foo')
	   .then(null)
	   .then(result => {
	   		console.log(result);
	   	});

// 正确做法
Promise.resolve('foo').then(() => {
	return Promise.resolve('bar');
}).then(result => {
	console.log(result);
});