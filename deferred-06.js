var dtd = $.Deferred(); // 生成Deferred对象

var wait = function(dtd){
	var tasks = function(){
		alert("执行完毕！");
		dtd.resolve(); // 改变Deferred对象的执行状态
	};

	setTimeout(tasks,5000);
};

dtd.promise(wait);

wait
.done(function(){ alert("哈哈，成功了！"); })
.fail(function(){ alert("出错啦！"); });

wait(dtd);