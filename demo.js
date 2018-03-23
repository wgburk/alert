$(function(){
	//Custom Alert
	var wgAlert = new Alert();

	$('body>ul>li:eq(0)').click(function(){
		var dom = $(this);
		wgAlert.show('', dom.text(), function(){
			console.log('点击了确定按钮');
		});
	});
	$('body>ul>li:eq(1)').click(function(){
		var dom = $(this);
		wgAlert.showError('', dom.text(), function(){
			console.log('点击了确定按钮');
		});
	});
	$('body>ul>li:eq(2)').click(function(){
		var dom = $(this);
		wgAlert.showConfirm('', dom.text(), function(){
			console.log('点击了确定按钮');
		}, function(){
			console.log('点击了取消按钮');
		});
	});
});