console.log('here we go');

let promise = new Promise(
	resolve => {
		console.log('the promise fulfilled');
		setTimeout(() => resolve('hello, world'), 1000); // 结束的早
	}
);

setTimeout(() => {
	promise.then(value => {
		console.log(value);
	})
}, 3000);  // 结束的晚
// 结束的早晚都可以正常执行
