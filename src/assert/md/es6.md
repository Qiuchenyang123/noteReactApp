## ES6改进
1. 变量
2. 函数
3. 数组
4. 字符串
5. 面向对象
6. Promise
7. generator
8. 模块化

## 变量—— let 和 const

### var —— 预解析，let、const —— 不存在变量提升

### var 的缺陷
1. 可以重复声明
2. 无限限制修改
3. 没有块级作用域

### let 
1. 不能重复声明
2. 变量——可以修改
3. 块级作用域

### const
1. 不能重复声明
2. 常量——不能修改
3. 块级作用域

## 箭头函数—— () => {}
### 只有一个参数的 ()可以省
### 只有一个return {}可以省
### this 指向
### 没有 arguments

## 函数参数
### 收集参数
```js
function fn(a, b, ...args) {
	console.log(a);
	console.log(b);
	console.log(args);
}
fn(1, 2, 3, 4, 5, 6) 
// 1
// 2
// 3, 4, 5, 6
```
### 展开参数
```js
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];
let arr3 = [...arr1, ...arr2]; // [1, 2, 3, 3, 4, 5];
```
### 默认参数
```js
function show(a, b = 5, c = 12) {
	return a + b + c
}
console.log(show(11)); // 28
```

## 解构赋值
> 1.左右两边结构要相同
> 2.右边必须是个东西
> 3.声明和赋值不能分开(必须在一句话里完成)
```js
let [a, b, c] = [1, 2, 3]; // 相当于 let a = 1,b = 2,c = 3;
let {a, b, c} = {a: 1, b: 2, c: 3}; // 同上
```
## 数组——map 、reduce、filter、forEach
### map——映射——一个对一个
```js
const arr = [1, 2, 3];
const result = arr.map(function(item, index) {
	return item * 2
});
console.log(result); // [2, 4, 6]
```

### reduce——汇总——一堆出来一个
```js
let arr = [12, 32, 44, 54];
// tmp 是中间结果，如果是第一次就是初始值arr[0], item从arr[1]开始
// 求和
let result = arr.reduce(function(tmp, item, index) {
	return tmp + item
})
```

### filter——过滤——留一部分删一部分
```js
let arr = [12, 33, 43, 45];
// 能被3整除
let newArr = arr.filter(item => item % 3)
```

### forEach——循环（迭代）——
```js
[1, 2, 3, 4].forEach(item => console.log(item))
```

## 字符串
1. 多了两个新方法
2. 字符串模板

### startsWith——以。。。开头
```js
let str = 'fgydsaugf';
console.log(str.startsWith('fgy')); // true
```
### endsWith
```js
let str = '1.txt';
console.log(str.endsWith('.txt')); // true
```

### 反引号``——可以换行、可以直接放变量拼凑${}
```js
let str = `fhdkjsahf
fdsfs${rxr}`;
```

## 面向对象
```js
// es5
function User(name, pass) {
	this.name = name;
	this.pass = pass;
}
User.prototype.showName = function() {
	console.log(this.name)
};
User.prototype.showPass = function() {
	console.log(this.pass)
}

// es6
class User {
	construtor(name, pass){
		this.name = name;
		this.pass = pass
	}
	showName = () => {
		console.log(this.name)
	}
	showPass = () => {
		console.log(this.pass)
	}
}
```
1. 多了 class 关键字，构造器和类分开
2. class 里面可以直接加方法

### 继承：
```js
// es5
function VipUser(name, pass, level) {
	User.call(this, name, pass);
	this.level = level
}
VipUser.prototype = new User();
VipUser.prototype.constructor = VipUser;
VipUser.prototype.showLevel = function() {
	console.log(this.level)
}
// es6
class VipUser extend User {
	constructor(name, pass, level) {
		super(name, pass);
		this.level = level
	}
	showLevel() {
		console.log(this.level)
	}
}
```

## 面向对象——应用react
> react
> 

## JSON
1. JSON对象
2. 简写——名字一样、方法

### JSON对象
```js
let json = {a: 1, b: 2};
let str = JSON.stringify(json)
let obj = JSON.parse(str)
```
### JSON的标准写法：
1. 只能用双引号
2. 所有的 key 值必须用双引号包起来


## Promise——承诺
> 异步操作，操作之间没有关系，同时进行多个操作
> 同步操作，同时只做一件事情
> 
> 异步，代码复杂
> 同步，代码简单
> 

### Promise——消除异步操作——用同步一样的方式来书写异步代码

### Promise 到底怎么用
```js
let p = new Promise((resolve, reject) => {
	// 异步代码
	// resolve 成功了
	// reject 失败了
})
// 例子
let p = new Promise((resolve, reject) => {
	$.ajax({
		url: 'xxx',
		data: params,
		dataType: 'JSON',
		type: 'GET',
		success: function(res) {
			resolve(res)
		},
		error: function(err) {
			reject(err)
		}
	})
});
p.then(res => console.log(res), err => console.log(err));
// Promise.all([]) —— 所有请求都通过才调用 resolve 不然就调用 reject

let p2 = new Promise((resolve, reject) => {
	$.ajax({
		url: 'xxx2',
		data: params,
		dataType: 'JSON',
		type: 'GET',
		success: function(res) {
			resolve(res)
		},
		error: function(err) {
			reject(err)
		}
	})
});

Promise.all([p, p2]).then(res => console.log(res), err => console.log(err))

```
## generator——生成器 generate——生成
> 普通函数——一路到底
> generator函数——中间能停
> 

```js
function *show(a, b) {
	console.log(a);
	
	yield; // 停止执行
	
	console.log(b)
}

let genObj = show(1, 2);
genObj.next() // 1
genObj.next() // 2

```
### yield——可以传参
```js
function *show(a, b) {
	console.log(a);
	
	let a = yield; // 停止执行
	
	console.log(b);
	console.log(a)
}

let genObj = show(1, 2);
genObj.next(12) // 1
genObj.next(5) // 5
```
*第一个next传入的参数忽略
### yield 返回
```js
function *show() {
	console.log(1);
	
	yield 12;
	
	console.log(2)
}

let gen = show();
let res1 = gen.next();
console.log(res1); // {value : 12, done: false}
let res2 = gen.next();
console.log(res2) // {value: undefined, done: true}

```

 ![img](file:///C:\Users\Administrator\AppData\Roaming\Tencent\Users\617994150\QQ\WinTemp\RichOle\J9K%69SNW%AS@B{6{ZVU%@M.png) 

## es7
1. 数组 includes——数组是否包含某个东西

2. 数组 keys/values/entries

    |          | 数组      | json      |
    | -------- | --------- | --------- |
    | for...in | 下标(key) | key       |
    | for...of | 值(value) | x(不能用) |

    keys——所有的 key 拿出来

    values——所有的 value 拿出来

    entries——所有的 key-value 拿出来，entry——实体

3. 幂 **——2的3次方 =》

    2**3

4. 字符串 padStart/padEnd——在前面/后面补xxx

    '5641'.padStart(10, 0) // 0000005641

    '5641'.padEnd(10, 0) // 5641000000

5. async await

    优点：1、不依赖于外部的runner，性能更好

    ​			2、可以使用箭头函数

6. 








```

```