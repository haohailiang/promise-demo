console.log('here we go');

new Promise(
	(resolve, reject) => {
		setTimeout(() => {
			reject('bye');
		}, 2000);
	}
)
.then(
	value => console.log(value + 'world'),
	value => console.error(value + 'world')
);