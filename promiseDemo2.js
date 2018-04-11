console.log('here we go');

new Promise(
	(resolve, reject) => {
		setTimeout(() => resolve('hello'), 2000);
	}
)
.then(
	value => {
		console.log(value + ' world');

		new Promise(
			(resolve, reject) => {
				setTimeout(() => resolve('world'), 2000);
			}
		)
		.then(
			value => {
				console.log(value + ' world')
			}  //成功,下一步
		);
	}  //成功,下一步
);
// demo1嵌套一下行程的结构
