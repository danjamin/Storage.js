Storage.js
==========

lightweight local storage service (using Container.js)

	```javascript
	MyClass.Service('my_app.my_class', [
		'storage'
	]);

	function MyClass(storage) {
		this.doSomething = function() {
			var myData = 'some really cool data';
			storage.set('key', myData);

			console.log(storage.get('key') === myData);
		};
	}
	```