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
				html = '',
				pageHead = '',
				pageEnd = '',
				i = 1,
				j = 1;
			
			pageHead =  '<a class="prev'+ (curr == 1 ? ' disabled' : '') +'" href="javascript:;">上一页</a>'+
						(curr != 1 ? '<a class="btn" href="javascript:;">1</a>' : '')+
						(curr > 4 && total > 6 ? '<a href="javascript:;">...</a>' : '');
			
			pageEnd  =  ((total > 6 && total-curr > 3) || (total-curr >= 3 && total == 7) ? '<a href="javascript:;">...</a>' : '')+
						(total != curr ? ('<a class="btn" href="javascript:;">'+ total +'</a>') : '')+
						'<a class="next'+ (curr == total ? ' disabled' : '') +'" href="javascript:;">下一页</a>';
						
			
			while(i < 5){
				if(curr-i < 2 || (4 < curr && curr < total-1 && i > 2) || (curr == total-1 && i > 3)){
					break;
				}
				html = '<a class="btn" href="javascript:;">'+ (curr-i) +'</a>' + html;
				i++;
			}
			
			html += '<a class="active" href="javascript:;">'+ curr +'</a>';
			
			while(j < 5){
				if(curr+j >= total || (curr > 4 && j > 2) || (curr+j > 5 && curr < 5 )){
					break;
				}
				html += '<a class="btn" href="javascript:;">'+ (curr+j) +'</a>';
				j++;
			}
			
			this.elem.innerHTML =  pageHead + html + pageEnd;
			this.bindEvent();
		},
		bindEvent: function(){
			var _this = this,
				prev = _this.elem.querySelector('.prev'),
				next = _this.elem.querySelector('.next');
			
			Array.prototype.forEach.call(_this.elem.querySelectorAll('.btn'),function(item, index){
				item.addEventListener('click', function(){
					_this.options.curr = Number(item.textContent);
					_this.renderPage();
				});
			});
			
			(prev.getAttribute('class').indexOf('disabled') === -1) && prev.addEventListener('click', function(){
				_this.options.curr--;
				_this.renderPage();
			});
			
			(next.getAttribute('class').indexOf('disabled') === -1) && next.addEventListener('click', function(){
				_this.options.curr++;
				_this.renderPage();
			});
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
