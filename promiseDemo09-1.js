// 同时获得2个Promise结果[把变量提升下作用域]
var user;

getUserByName('nolan').then(result => {
	user = result;
	return getUserAccountById(user.age);
})
.then(userAgeInfo => {
	// okay, I have both the "user" and the "userAgeInfo"
	console.table(user);
	console.table(userAgeInfo);
});

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