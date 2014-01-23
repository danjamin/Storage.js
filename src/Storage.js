// Storage.js

(function(localStorage, undefined) {

	Storage
		.Service('storage');

	function Storage() {
		if (typeof(Storage) === "undefined") {
			throw 'Local storage is not supported by your browser!';
		}

		this.get = function(key) {
			var value = localStorage[key];
			return value ? JSON.parse(value) : null;
		};

		this.set = function(key, value) {
			localStorage[key] = value ? JSON.stringify(value) : null;
		};
	}

})(localStorage);
