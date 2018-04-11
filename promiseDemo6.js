console.log('nested promise');

new Promise(
	resolve => {
		console.log('step-1');
		setTimeout(() => resolve('step1 - value 100 - 最终将不显示在控制台上'), 2000);
	}
)
.then(
	value => {
		// console.log(value);  step1 - value 100 - 最终将不显示在控制台上 讲显示在这里
		return new Promise(
			resolve => {
				console.log('step-1-1');
				setTimeout(() => resolve('step1-1 - value 200'), 2000);
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
	}
)
.then(
	value => {
		console.log('step2 ' + value);
	}
);
