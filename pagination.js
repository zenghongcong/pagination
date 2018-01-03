;(function(win){
	'use strict';
	
	//生成元素并设置属性
	function createElem(ele, option){
		var elem = document.createElement(ele);
		for(var k in option){
			elem.setAttribute(k, option[k]);
		}
		return elem;
	}
	
	//删除class
	function removeClass(el, className){
		if (el.classList){
  			el.classList.remove(className);
  		}else{
  			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
  	}
	
	//添加class
	function addClass(el, className){
		if (el.classList){
			el.classList.add(className);
		}else{
			el.className += ' ' + className;
		}
	}
	
	function Pagination(options){
		if(!(this instanceof Pagination)){
			return new Pagination();
		}
		
		this.ver = '1.0.0';
		this.elem = document.querySelector(options.elem);
		this.options = this.extend({
			curr: 1,
			total: 1
		}, options);
		
		//初始化
		this.init();
	}
	
	Pagination.prototype = {
		constructor: Pagination,
		init: function(){
			this.renderPage();
		},
		renderPage: function(){
			var total = this.options.total,
				curr = this.options.curr,
				html = '';
			
			for(var i = 1; curr-i > 0; i++){
				html = '<a href="javascript:;">'+ (curr-i) +'</a>' + html;
				if(curr > 4 && i > 1 && total-(curr-i) > 3){
					break;
				}
			}
			
			html += '<a class="active" href="javascript:;">'+ curr +'</a>';
			
			for(var j = 1; curr+j <= total; j++){
				html += '<a href="javascript:;">'+ (curr+j) +'</a>';
				if((total - curr > 3 && j > 1 && curr > 3) || i+j > 4){
					break;
				}
			}
			
			this.elem.innerHTML = '<a href="javascript:;">上一页</a>' + html + '<a href="javascript:;">下一页</a>';
		},
		bindEvent: function(){
			
		},
		extend: function(opt1, opt2){
			for(var k in opt2){
				opt1[k] = opt2[k];
			}
			return opt1;
		}
	}
	
	win.Pagination = Pagination;
	
})(window);
