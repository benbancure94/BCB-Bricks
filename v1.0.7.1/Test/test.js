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

// window.onkeydown = function() {
// 	WindowKeys.onkeydown(event);
// }
// window.onkeyup = function() {
// 	WindowKeys.onkeyup(event);
// }




var GameSound = new function() {
	// DECLARATIONS
	var currentVolume = 1;

	var music = {
		current: 0,
		audios: [
			new Audio("Sounds/opening.wav"),
			new Audio("Sounds/startgame.wav"),
			new Audio("Sounds/gameover.wav"),
			new Audio("Sounds/levelUp.wav"),
		]
	};
	var sound = {
		current: 0,
		audios: [
			new Audio("Sounds/move.wav"),
			new Audio("Sounds/hit.wav"),
			new Audio("Sounds/move2.wav"),
			new Audio("Sounds/fire.wav"),
			new Audio("Sounds/score.wav"),
			new Audio("Sounds/carsound1.wav"),
			new Audio("Sounds/fire2.wav"),
			new Audio("Sounds/select.wav")
		]
	}

	this.music = {
		opening: function() { play("music", 0) },
		startGame: function() { play("music", 1) },
		gameOver: function() { play("music", 2) },
		levelUp: function(onend) { play("music", 3, false, onend) }
	};
	this.sound = {
		move: function() { play("sound", 0) },
		explosion: function() { play("sound", 1) },
		move2: function() { play("sound", 2) },
		fire: function() { play("sound", 3) },
		score: function() { play("sound", 4) },
		carSound1: function() { play("sound", 5, true) },
		fire2: function() { play("sound", 6) },
		select: function() { play("sound", 7) }
	};

	function play(type, index, loop, endFunction) {
		var audioType = type == "music" ? music: sound;
		var currentAudio = audioType.audios[audioType.current];
		if(currentAudio.currentTime > 0 && !currentAudio.paused && currentAudio.readyState > 2) {
			currentAudio.pause(); 
		}
		currentAudio.currentTime = 0;
		audioType.current = index;
		currentAudio = audioType.audios[audioType.current];
		currentAudio.volume = currentVolume;
		if (loop != undefined) currentAudio.loop = loop;
		currentAudio.onended = endFunction;
		currentAudio.play();
	}

	// PRIVATE FUNCTIONS
	// function play(index, loop, endFunction) {
	// 	if(selectedAudio != undefined && selectedAudio.currentTime > 0 && !selectedAudio.paused && !selectedAudio.ended && selectedAudio.readyState > 2) {
	// 		selectedAudio.pause(); selectedAudio.currentTime = 0;
	// 	}
	// 	selectedAudio = audios[index];
	// 	selectedAudio.volume = currentVolume;
	// 	if (loop != undefined) selectedAudio.loop = loop;
	// 	selectedAudio.onended = endFunction;
	// 	selectedAudio.play();
	// }

	// METHODS
	// this.opening = function() { play(0) };
	// this.startGame = function() { play(1); };
	// this.move = function() { play(2); };
	// this.gameOver = function() { play(3); };
	// this.explosion = function() { play(4); };
	// this.move2 = function() { play(5); };
	// this.fire = function() { play(6); };
	//this.levelUp = function(endFunction) { play(7, undefined, endFunction); };
	// this.score = function() { play(8); };
	// this.carSound1 = function(loop) { play(9, loop) };
	// this.fire2 = function() { play(10); };
	this.pause = function() {
		music.audios[music.current].pause();
		sound.audios[sound.current].pause();
	};
	this.resume = function() {
		if (!music.audios[music.current].ended && music.audios[music.current].currentTime > 0) music.audios[music.current].play();
		if (!sound.audios[sound.current].ended && sound.audios[sound.current].currentTime > 0) sound.audios[sound.current].play();
	};
	this.stop = function() {
		music.audios[music.current].pause(); music.audios[music.current].currentTime = 0;
		sound.audios[sound.current].pause(); sound.audios[sound.current].currentTime = 0;
	};
	//this.stop = function() { if (audio == undefined) throw new Error("Error: undefined"); };
	//this.select = function() { play(11); };
	// this.getAudio = function() { return selectedAudio; }


	this.getVolume = function() { return currentVolume };
	this.setVolume = function(_volume) {
		currentVolume = _volume;
		music.audios[music.current].volume = _volume;
		sound.audios[sound.current].volume = _volume;
	}

	this.getObject = function() {
		console.log(music, sound);
	}
};

window.onload = function() {

	opening.onclick = function() {
		GameSound.music.opening();
	};
	startGame.onclick = function() {
		GameSound.music.startGame();
	};
	gameOver.onclick = function() {
		GameSound.music.gameOver();
	};

	explosion.onclick = function() {
		GameSound.sound.explosion();
	};
	fire.onclick = function() {
		GameSound.sound.fire();
	};
	move.onclick = function() {
		GameSound.sound.move();
	};

	soundVolume.onclick = function() {
		var currentVolume = GameSound.getVolume();
		currentVolume = currentVolume == 0 ? 1: currentVolume - 0.25;
		GameSound.setVolume(currentVolume);
		GameSound.sound.select();
	};

	pauseButton.onclick = function() {
		GameSound.pause();
	};
	resumeButton.onclick = function() {
		GameSound.resume();
	};
	stopButton.onclick = function() {
		GameSound.stop();
	};
}
	