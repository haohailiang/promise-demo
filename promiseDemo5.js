console.log('here we go');

new Promise(
	resolve => {
		console.log('1. 第一步执行完成');
		setTimeout(() => resolve('1. hello'), 2000);
	}
)
.then(
	value => {
		console.log("2. " + value);
		(function(){
			return new Promise(
				resolve => {
					console.log('3. 第一步执行完成');
					setTimeout(() => resolve('5. 永远不显示'), 2000);
				}
			)
		})();
		return false; //不论返回true or false都会往下执行
	}
)
.then(
	value => console.log('4. ' + value)
);
