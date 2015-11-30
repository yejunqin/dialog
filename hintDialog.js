/**
 * Created by yejunqin on 2015/11/24
 */
define(function(require,module){
	require('../../css/common/hintDialog.css');

	var h = '<div id="dialog_page">'+
				'<div class="dialog_wrap">'+
						'<div class="dialog_child">'+	
							'<div class="dialog_div">'+
								'<div class="dialog_content_warp">'+
									'<div class="dialog_head">'+
										'<h3>温馨提示</h3>'+
										'<span class="dialog_close"></span>'+
									'</div>'+
									'<p class="content"></p>'+
									'<div class="button">'+
										'<button id="dialog_no" class="main_btn">取消</button>'+
										'<button id="dialog_yes" class="main_btn">确认</button>'+
									'</div>'+
								'</div>'+
							'</div>'+
						'</div>'+
					'</div>'+
				'</div>'+
			'</div>';
	$(h).appendTo($('body'));
	
	var $dialog = $('#dialog_page').hide();
	var $body = $dialog.find('.dialog_div').css('width','300px');
	var $content = $dialog.find('.content');
	var $yes = $dialog.find('#dialog_yes');
	var $no = $dialog.find('#dialog_no');
	var $title = $dialog.find('.dialog_head h3');

	$yes.click(function() {
		if(doFunction != '') {
			doFunction();
		}
		if(!module.validate){
			clear();
			$dialog.hide();
		}
	});
	$no.click(function() {
		clear();
		module.validate = false;
		$dialog.hide();
	});

	//显示提示框
	var showAlert = function(content, callback) {
		$yes.show();
		$no.hide();
		$dialog.show();

		if(typeof(content) != 'undefined') {
			$content.html(content);
		}
		else {
			$content.html('注意！危险！');
		}
		
		if(typeof(callback) != 'undefined' && callback != null && callback != '') {
			doFunction = callback;
		}
	};

	var showConfirm = function(message, callback) {
			$yes.show();
			$no.show();
			
			if(typeof(message) != 'undefined') {
				$content.html(message);
			}
			else {
				$content.html('注意！危险！');
			}
			
			if(typeof(callback) != 'undefined' && callback != null && callback != '') {
				doFunction = callback;
			}
			
			$dialog.show();
		}

	//显示选择对话框
	var showDialog = function(obj) {
		$yes.show();
		$no.show();

		if(obj.width){
			$body.css('width', obj.width + 'px');
		}

		if(obj.height){
			$body.css('height', obj.width+'px')
		}

		if(obj.validate){
			validate = obj.validate
		}

		if(obj.title){
			$title.html(obj.title);
		}
		
		if(obj.content) {
			$content.append(obj.content);
		}
		else {
			$content.html('注意！危险！');
		}
		
		if(obj.callback) {
			doFunction = obj.callback;
		}
		$dialog.show();
	}
	
	//确定按钮执行参数
	var doFunction = function() {
		//根据callback变化
	}

	var clear = function(){
		$content.html('');
		doFunction = '';
	}

	module.showAlert = showAlert;
	module.showConfirm = showConfirm;
	module.showDialog = showDialog;
	module.validate = false;
});