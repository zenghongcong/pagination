# pagination
---
原生js分页组件
---
# 兼容性
ie9,ie9+,chrome,firefox,safari
---
## 使用

```js
var pagination = new Pagination({
		elem: '#test',
		curr: 1,
		total: 7
	});
```
## 参数

| Parameter       | Description     | Type     | Default      |
|-----------------|-----------------|----------|--------------|
| elem   		  | 容器元素         	    | String   | none         |
| curr   		  | 当前页                     | Number   | 1            |
| total  		  | 总页数                     | Number   | 1            |
