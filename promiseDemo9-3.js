// 将函数抽离到一个命名函数中
function onGetUserAndUserAccount(user, userAccount) {
	return doSomething(user, userAccount);
}

function onGetUser(user) {
	return getUserAccountById(user.age).then(userAccount => {
		return onGetUserAndUserAccount(user, userAccount);
	});
}

getUserByName('nolan')
	.then(onGetUser)
	.then(function () {
		// at this point, doSomething() is done, and we are back to indentation 0
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

function doSomething(user, userAccount) {
	console.table(user);
	console.table(userAccount);
}