var wait = function(dtd){

	var tasks = function(){
		alert("执行完毕！");
		dtd.resolve(); // 改变Deferred对象的执行状态
	};

	setTimeout(tasks,5000);

	return dtd.promise();
};

$.Deferred(wait)
.done(function(){ alert("哈哈，成功了！"); })
.fail(function(){ alert("出错啦！"); });

// jQuery规定，$.Deferred()可以接受一个函数名（注意，是函数名）作为参数，$.Deferred()所生成的deferred对象将作为这个函数的默认参数。