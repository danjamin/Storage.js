# NOT MAINTAINED

Store.js
==========

lightweight local storage service (using Container.js)

```javascript
MyClass.Service('my_app.my_class', [
	'store'
]);

function MyClass(store) {
	this.doSomething = function() {
		var myData = 'some really cool data';
		store.set('key', myData);

		console.log(store.get('key') === myData);
	};
}
```
