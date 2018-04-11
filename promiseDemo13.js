console.log('here we go');

new Promise(
	resolve => {
		setTimeout(() => {
			throw new Error('bye');
			// Promise里抛错,抓不到
		}, 2000);
	}
)
.then(
	value => console.log(value + 'world')
)
.catch(
	// 异常是抓不住的
	error => console.log('error: ' + error.message)
)