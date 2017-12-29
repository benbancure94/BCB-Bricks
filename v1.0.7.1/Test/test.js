var WindowKeys = new function() {
	var availableKeys = {
		enter: "enter",
		space: " ",
		up: "up",
		down: "down",
		left: "left",
		right: "right",
		s: "s",
		default: "default"
	};

	var availableKeyNames = Object.keys(availableKeys);

	var keyfunctions = {};

	for (var k = 0; k < availableKeyNames.length; k++) {
		keyfunctions[availableKeyNames[k]] = {
			altName: availableKeys[availableKeyNames[k]],
			onkeydown: { test: "default key down", allowRepeat: true, enabled: true, func: function() {} },
			onkeyup: { test: "default key up", func: function() {} },
			onkeypress: {},
		};

		this[availableKeyNames[k]] = {
			onkeydown: {
				func: (function() {
					var availableKeyName = availableKeyNames[k];
					return function(func) {
						keyfunctions[availableKeyName].onkeydown.func = func == undefined ? function() {}: func;
					};
				})(),
				allowRepeat: (function() {
					var availableKeyName = availableKeyNames[k];
					return function(allowRepeat) {
						keyfunctions[availableKeyName].onkeydown.allowRepeat = allowRepeat == undefined ? true: allowRepeat;
					};
				})(),
				setEnabled: (function() {
					var availableKeyName = availableKeyNames[k];
					return function(enabled) {
						keyfunctions[availableKeyName].onkeydown.enabled = enabled == undefined ? true: enabled;
					};
				})(),
				test: (function() {
					var availableKeyName = availableKeyNames[k];
					return function(test) {
						keyfunctions[availableKeyName].onkeydown.test = test == undefined ? "test key down": test;
					};
				})(),
			},
			onkeyup: {
				func: (function() {
					var availableKeyName = availableKeyNames[k];
					return function(func) {
						keyfunctions[availableKeyName].onkeyup.func = func == undefined ? function() {}: func;
					};
				})(),
				test: (function() {
					var availableKeyName = availableKeyNames[k];
					return function(test) {
						keyfunctions[availableKeyName].onkeyup.test = test == undefined ? "test key up": test;
					};
				})(),
			}
		};
	}

	this.all = {
		onkeydown: {
			func: function(func) {
				for (var k = 0; k < availableKeyNames.length; k++) {
					keyfunctions[availableKeyNames[k]].onkeydown.func = func == undefined ? function() {}: func;
				}
			},
			allowRepeat: function(allowRepeat) {
				for (var k = 0; k < availableKeyNames.length; k++) {
					keyfunctions[availableKeyNames[k]].onkeydown.allowRepeat = allowRepeat == undefined ? true: allowRepeat;
				}
			},
			setEnabled: function(enabled) {
				for (var k = 0; k < availableKeyNames.length; k++) {
					keyfunctions[availableKeyNames[k]].onkeydown.enabled = enabled == undefined ? true: enabled;
				}
			},
			test: function(test) {
				for (var k = 0; k < availableKeyNames.length; k++) {
					keyfunctions[availableKeyNames[k]].onkeydown.test = test == undefined ? "test key down": test;
				}
			},
			clear: clearKeyDown
		},
		onkeyup: {
			func: function(func) {
				for (var k = 0; k < availableKeyNames.length; k++) {
					keyfunctions[availableKeyNames[k]].onkeyup.func = func == undefined ? function() {}: func;
				}
			},
			test: function(test) {
				for (var k = 0; k < availableKeyNames.length; k++) {
					keyfunctions[availableKeyNames[k]].onkeyup.test = test == undefined ? "test key up": test;
				}
			},
			clear: clearKeyUp
		},
		clear: function() {
			clearKeyDown(); clearKeyUp();
		}
	};
	

	this.onkeydown = function(event) {
		var altName = event.key.toLowerCase();
		var availableKey = Object.keys(availableKeys).filter(function(ak) { return availableKeys[ak] == altName })[0];
		if (availableKey == undefined) availableKey = "default";
		var keydownfunction = keyfunctions[availableKey].onkeydown;
		if((keydownfunction.allowRepeat || 
			!event.repeat) &&
			keydownfunction.enabled) console.log(keyfunctions[availableKey].onkeydown.test);
	};
	this.onkeyup = function(event) {
		var altName = event.key.toLowerCase();
		var availableKey = Object.keys(availableKeys).filter(function(ak) { return availableKeys[ak] == altName })[0];
		if (availableKey == undefined) availableKey = "default";
		console.log(keyfunctions[availableKey].onkeyup.test);
	};

	this.getObject = function() {
		console.log(keyfunctions);
	};

	function clearKeyDown() {
		for (var k = 0; k < availableKeyNames.length; k++) {
			keyfunctions[availableKeyNames[k]].onkeydown = {
				func: function() {}, allowRepeat: true, enabled: true, test: "key down cleared"
			}
		}
	}
	function clearKeyUp() {
		for (var k = 0; k < availableKeyNames.length; k++) {
			keyfunctions[availableKeyNames[k]].onkeyup = {
				func: function() {}, test: "key up cleared"
			}
		}
	}
}

window.onkeydown = function() {
	WindowKeys.onkeydown(event);
}
window.onkeyup = function() {
	WindowKeys.onkeyup(event);
}