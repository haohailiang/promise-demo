// 传统用法
new Promise(
	resolve => resolve(1)
).then(
	value => console.log(value)
);

// 更简洁的用法
Promise.resolve(1)
.then(
	value => console.log(value)
);