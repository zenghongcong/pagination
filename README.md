# pagination.js
原生js分页组件
# 兼容性
IE9+
# 使用
<link rel="stylesheet" href="src/pagination.css" />
<div class="pagination" id="test"></div>
<script src="src/pagination.js"></script>
<script>
var pagination = new Pagination(option);
</script>
## option
elem   <string>     初始化容器             e.g '#test'    
curr   <number>     当前页                 e.g 1    
total  <number>    总页数                  e.g 7    
