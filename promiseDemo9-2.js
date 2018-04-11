// 拥抱金字塔 | 回调地狱
getUserByName('nolan').then(result => {
	return getUserAccountById(result.age).then(userAgeInfo => {
		// okay, I have both the "user" and the "userAgeInfo"
		console.table(result);
		console.table(userAgeInfo);
	});
})

function getUserByName(username) {
	return new Promise(
		resolve => resolve({
			name: username,
			age: 34
		})
	);
}

function getUserAccountById(userage) {
	return new Promise(
		resolve => resolve({
			age: userage,
			birthday: '1995-12-25'
		})
	);
}