var dtd = $.Deferred();
// dtd全局对象有问题,如意被外界改变

var wait = (dtd) => {
	var tasks = () => {
		alert("执行完毕！");
		dtd.resolve();
	};

	setTimeout(tasks,5000);

	return dtd.promise(); // 返回promise对象
	// 屏蔽了与执行状态有关的方法
	// resolve()方法和reject()方法
};

var d = wait(dtd);

$.when(d)
.done(function(){ console.log("哈哈，成功了！"); })
.fail(function(){ console.error("出错啦！"); });