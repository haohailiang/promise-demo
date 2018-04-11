console.log('here we go');

new Promise(
	(resolve, reject) => {
		setTimeout(() => resolve('hello'), 2000);
	}
)
.then(
	value => console.log(value + ' world'),  //成功,下一步
	() => {}   //失败,做相应处理
);
