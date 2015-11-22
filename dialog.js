var hintDialog = {
	init: function() {
		var h = '<div id="dialog_page">'+
					'<div class="dialog_div">'+
						'<p class="content"></p>'+
						'<div class="button">'+
							'<button id="dialog_yes" class="main_btn btn_blue">确认</button>'+
							'<button id="dialog_no" class="main_btn btn_red">取消</button>'+
						'</div>'+
					'</div>'+
				'</div>';
		$(h).appendTo($('body'));
		

		this.$dialog = $('#dialog_page').hide();
		this.$content = $('#dialog_page .content');
		this.$yes = $('#dialog_yes');
		this.$no = $('#dialog_no');

		var self = this;
		this.$yes.click(function() {
			if(self.doFunction != '') {
				self.doFunction();
			}
			self.hide();
		});
		this.$no.click(function() {
			self.hide();
		});
	},

	//显示提示框
	showAlert: function(message, callback) {
		this.$yes.show();
		this.$no.hide();
		this.$dialog.show();

		if(typeof(message) != 'undefined') {
			this.$content.html(message);
		}
		else {
			this.$content.html('注意！危险！');
		}
		
		if(typeof(callback) != 'undefined' && callback != null && callback != '') {
			this.doFunction = callback;
		}
	},

	//显示选择对话框
	showConfirm: function(message, callback) {
		this.$yes.show();
		this.$no.show();
		
		if(typeof(message) != 'undefined') {
			this.$content.html(message);
		}
		else {
			this.$content.html('注意！危险！');
		}
		
		if(typeof(callback) != 'undefined' && callback != null && callback != '') {
			this.doFunction = callback;
		}
		
		this.$dialog.show();
	},
	
	//确定按钮执行参数
	doFunction: function() {
		//根据callback变化
	},

	//隐藏
	hide: function() {
		this.$dialog.fadeOut('300', function() {
			hintDialog.$content.html('');
			hintDialog.doFunction = '';
		});
	}
}