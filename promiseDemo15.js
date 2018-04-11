console.log('here we go');

new Promise(
	resolve => {
		setTimeout(() => resolve(), 2000);
	}
)
.then(
	() => {
		console.log('start');
		throw new Error('test error');
		// then里边抛错可以抓到
	}
)
.catch(
	err => {
		console.log('err: ' + err.message);
		// 下面这一行注释会影响程序的不同走向
		// throw new Error('another error');
		// catch处理也是一个Promise实例,没有返回错误就是一个
		// fulfill的处理
	}
)
.then(
	() => console.log('arrival here')
)
.then(
	() => console.log('.... and here')
)
.catch(
	err => console.log('another err: ' + err.message)
)