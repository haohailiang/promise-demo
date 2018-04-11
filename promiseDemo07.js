console.log('nested promise');

new Promise(
	resolve => {
		console.log('step-1');
		setTimeout(() => resolve('step1 - value 100 - 最终将不显示在控制台上'), 2000);
	}
)
.then(
	value => {
		return new Promise(
			resolve => {
				console.log('step-1-1');
				setTimeout(() => resolve('step1-1 - value 200'), 2000);
			}
		)
	}
)
.then(
	value => {
		console.log('step-1-2');
		return value;
	}
)
.then(
	value => {
		console.log('step-1-3');
		return value;
	}
)
.then(
	value => {
		console.log('step2 ' + value);
	}
);
// 把嵌套的then发出来就可以了
