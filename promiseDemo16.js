console.log('here we go');

Promise.all([1, 2, 3])
.then(
	result => {
		console.log(result); // 1 2 3
		return Promise.all([
			function() {
				console.log('ooxx');
			},
			'xxoo',
			false
		]);
	}
)
.then(
	result => {
		console.log(result);
		let p1 = new Promise(
			resolve => {
				setTimeout(() => {
					resolve('I\'m p1');
				}, 1500);
			}
		);
		let p2 = new Promise(
			(resolve, reject) => {
				setTimeout(() => {
					reject('I\'m p2');
				}, 1000);
			}
		);
		let p3 = new Promise(
			(resolve, reject) => {
				setTimeout(() => {
					reject('I\'m p3');
				}, 3000);
			}
		);

		return Promise.all([p1, p2, p3]);
	}
)
.then(
	result => console.log(result)
)
.catch(
	err => {
		console.log(err); //false
	}
)