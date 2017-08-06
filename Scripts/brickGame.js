(function(_window_) {

	/**** GLOBAL VARIABLES ****/
	var letterTiles = 
	[
		{ 
			letter: 'A', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 },
				{ x: 2, y: 0 }, { x: 2, y: 2 },
				{ x: 3, y: 0 }, { x: 3, y: 2 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },  
			], 
		},
		{ 
			letter: 'B', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 }, 
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 4 }, 
			],
			gameType: "race1",
			speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120]
		},
		{ 
			letter: 'C', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 4 },
			],
			gameType: "war1",
			speedTimeout: [1000, 950, 900, 850, 800, 750, 700, 650, 600, 500]
		},
		{ 
			letter: 'D', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 0 }, { x: 1, y: 5 }, 
				{ x: 2, y: 0 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, 
			],
			gameType: "pinball",
			speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115] 
		},
		{ 
			letter: 'E', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 }, 
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 2 }, { x: 4, y: 5 }, 
			], 
			gameType: "war2",
			speedTimeout: [10000, 9000, 8000, 7000, 6500, 6000, 5500, 5000, 4500, 4000]
		},
		{ 
			letter: 'F', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 },  
				{ x: 2, y: 0 }, { x: 2, y: 2 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, 
				{ x: 4, y: 0 }
			],  
			gameType: "" 
		},
		{ 
			letter: 'G', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 3 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 3 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 4 },
			], 
			gameType: "cross" 
		},
		{ 
			letter: 'H', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 2 }, 
				{ x: 2, y: 2 }, 
				{ x: 3, y: 2 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			],
			gameType: "war3"
		},
		{ 
			letter: 'I', 
			tiles: [
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 5 },
			], 
			gameType: "snake",
			speedTimeout: [550, 500, 450, 400, 350, 300, 250, 200, 150, 100]
		},
		{ 
			letter: 'J', 
			tiles: [
				{ x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 5 },
				{ x: 2, y: 5 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			],
			gameType: "obstacle" },
		{ 
			letter: 'K', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 2 },
				{ x: 2, y: 2 },
				{ x: 3, y: 1 }, { x: 3, y: 3 },
				{ x: 4, y: 0 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			], 
			gameType: "match",
			speedTimeout: [1000, 940, 880, 820, 760, 700, 640, 580, 520, 460]
		},
		{ 
			letter: 'L', 
			tiles: [[2, 3, 4, 5, 6, 7], [7], [7], [7], [7]], 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 5 },
				{ x: 2, y: 5 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 5 }, 
			],
			gameType: "race2",
			speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120] 
		},
		{ 
			letter: 'M', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 1 },
				{ x: 2, y: 2 }, { x: 2, y: 3 },
				{ x: 3, y: 1 },
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			] 
		},
		{ 
			letter: 'N', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 1 },
				{ x: 2, y: 2 }, 
				{ x: 3, y: 3 },
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			]
		},
		{ 
			letter: 'O', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			]
		},
		{ 
			letter: 'P', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 0 }, { x: 1, y: 2 },
				{ x: 2, y: 0 }, { x: 2, y: 2 },
				{ x: 3, y: 0 }, { x: 3, y: 2 },
				{ x: 4, y: 1 }
			]
		},
		{ 
			letter: 'Q', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 3 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 4 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			]
		},
		{ 
			letter: 'R', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 },
				{ x: 2, y: 0 }, { x: 2, y: 2 },
				{ x: 3, y: 0 }, { x: 3, y: 2 },
				{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			] 
		},
		{ 
			letter: 'S', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 5 },
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 },
				{ x: 4, y: 0 }, { x: 4, y: 3 }, { x: 4, y: 4 },
			]
		},
		{ 
			letter: 'T', 
			tiles: [
				{ x: 0, y: 0 }, 
				{ x: 1, y: 0 }, 
				{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 },
				{ x: 3, y: 0 },
				{ x: 4, y: 0 },
			]
		},
		{ 
			letter: 'U', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 5 },
				{ x: 2, y: 5 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			],
		},
		{ 
			letter: 'V', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, 
				{ x: 1, y: 4 },
				{ x: 2, y: 5 },
				{ x: 3, y: 4 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }
			]
		},
		{ 
			letter: 'W', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 5 },
				{ x: 2, y: 3 }, { x: 2, y: 4 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			]
		},
		{ 
			letter: 'X', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 1 }, { x: 1, y: 3 },
				{ x: 2, y: 2 },
				{ x: 3, y: 1 }, { x: 3, y: 3 }, 
				{ x: 4, y: 0 }, { x: 4, y: 4 }, { x: 4, y: 5 }
			]
		},
		{ 
			letter: 'Y', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, 
				{ x: 1, y: 2 },
				{ x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, 
				{ x: 3, y: 2 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }
			]
		},
		{ 
			letter: 'Z', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 3 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 5 }
			]
		},
		{ letter: ' ' },
	];

	var brickGameModel = new function() {
		var level = 1;
		var speed = 1;
		var mode = 1;
		var score = 0;
		var gameNumber = 0;
		var lives = 0;
		var brickTiles = [];
		var speedInMillis = 1000;
		var selectedGame = {};

		this.getLevel = function() {
			return level;
		};
		this.setLevel = function(_level) {
			level = _level;
			levelNumber.innerText = level;
		}
		this.getSpeed = function() {
			return speed;
		}
		this.setSpeed = function(_speed) {
			speed = _speed;
			speedNumber.innerText = speed;
		}
		this.getGameNumber = function() {
			return gameNumber;
		}
		this.setGameNumber = function(_gameNumber) {
			gameNumber = _gameNumber;
		}
		this.getScore = function() {
			return score;
		}
		this.setScore = function(_score) {
			score = _score;
			scoreNumber.innerText = score;
		}
		this.getSpeedInMillis = function() {
			return speedInMillis;
		}
		this.setSpeedInMillis = function(_speedInMillis) {
			speedInMillis = _speedInMillis
		}
		this.getSelectedGame = function() {
			return selectedGame;
		}
		this.setSelectedGame = function(_selectedGame) {
			selectedGame = _selectedGame;
		}
	}

	/**** PRIVATE FUNCTIONS ****/
	function fillScreen(color){
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 10; j++) { changeTileColor(i, j, color); }
		}
	}

	function changeTileColor(x, y, color) {
		var xLetter = letterTiles[x].letter;
		var yLetter = letterTiles[y].letter;
		var tile = document.getElementById("tileCell" + xLetter + yLetter);

		tile.className = "outerTileCells outer" + color + "Color";
		tile.children[0].className = "tileCells " + color + "Color";
	}


	// LOAD TILES IN A SCREEN
	var loadTiles = function() {

		for (var i = 0; i < 10; i++) {	
			var tileRow = document.createElement("div");
			tileRow.className = "tileRows";

			var yLetter = letterTiles[i].letter;
			
			for(var j = 0; j < 20; j++) {

				var xLetter = letterTiles[j].letter;

				var outerTileCell = document.createElement("div");
				var tileCell = document.createElement("div");

				outerTileCell.className = "outerTileCells outerBlackColor";
				tileCell.className = "tileCells blackColor";

				outerTileCell.id = "tileCell" + xLetter + yLetter;

				outerTileCell.style.visibility = "visible";

				outerTileCell.appendChild(tileCell);
				tileRow.appendChild(outerTileCell);
			}

			mainContainer.appendChild(tileRow);
		};
	}

	var Marquee = function(exitFunction) {
		this.load = function(word, speedInMillis) {

			console.log("loaded " + word);

			var marqueeWord = [];

			var brickLetters = [];

			for (var i = 0; i < word.length; i++) {
				var letter = word.substring(i, i + 1);
				var j = 0;
				while(letterTiles[j].letter != letter) { j++; }
				var letterTile = letterTiles[j].tiles;

				if(letterTiles[j].letter != " ") {
					var _B = new BrickObject(letterTile, "white");
					_B.setLocation(20 + (i * 6), 2);
					brickLetters.push(_B);
				}
			}

			var t = 20;
			
			var marquee = new Timer(function() {
				for(var i = 0; i < brickLetters.length; i++) {
					var loc = brickLetters[i].getLocation();
					loc.x--;
					if(loc.x < -(word.length * 6)) loc.x = 20;
					brickLetters[i].setLocation(loc.x, loc.y);
				}
			}, speedInMillis == undefined ? 300: speedInMillis);
			marquee.start();

			_window_.onkeydown = function() {
				marquee.stop();
				fillScreen("white");
				unload();
			}
			_window_.onkeypress = function() {

			}
		};
		var unload = function() {
			console.log("Exited");
			exitFunction();
			_window_.onkeydown = gamekeydownfunctions;
			_window_.onkeypress = gamekeypressfunctions;
			_window_.onkeyup = gamekeyupfunctions;
		};
	}
	
	// START PAGE
	_window_.onload = function() {
		loadTiles();
		var brickGameMarquee = new Marquee(function() { GameProperties() });
		brickGameMarquee.load("BRICK GAME");
	}

	var GameProperties = function() {
		var selectedGame;

		var setLevel = function(increment) { 
			var level;
			increment = increment == undefined ? true: increment; 
			if(increment == true) {
				level = brickGameModel.getLevel() + 1;
				brickGameModel.setLevel(level > 10 ? 1: level);
			}
			else {
				level = brickGameModel.getLevel() - 1;
				brickGameModel.setLevel(level < 1 ? 10: level);
			}
			console.log("Level set to " + brickGameModel.level);
		};
		var setSpeed = function(increment) {
			var speed; 
			increment = increment == undefined ? true: increment; 
			if(increment == true) {
				speed = brickGameModel.getSpeed() + 1;
				brickGameModel.setSpeed(speed > 10 ? 1: speed);
			}
			else { 
				speed = brickGameModel.getSpeed() - 1;
				brickGameModel.setSpeed(speed < 1 ? 10: speed);
			}
			console.log("Speed set to " + brickGameModel.speed);
		};

		var selectGame = function(number) { 
			brickGameModel.setGameNumber(number == _games.length ? 0: number);
			selectedGame = _games[brickGameModel.getGameNumber()];
			brickGameModel.setScore(selectedGame.score);
			brickGameModel.setSelectedGame(selectedGame);
			console.log(selectedGame);
			 
			fillScreen("white");
			var letterTile = letterTiles.filter(function(l) { return l.letter == selectedGame.letter }).first().tiles;
			var brickLetter = new BrickObject(letterTile, "black");
			brickLetter.setLocation(2, 2);
		}

		var startGame = function() {
			console.log("started");
			Game.load();
		}

		gamekeydownfunctions = function() {
			switch(event.key) {
				case "ArrowUp":
					setLevel(true);
					break;
				case "ArrowDown":
					setLevel(false);
					break;
				case "ArrowLeft":
					setSpeed(false);
					break;
				case "ArrowRight":
					setSpeed(true);
					break;
				case " ":
					selectGame(brickGameModel.getGameNumber() + 1);
					break;
				case "Enter":
					startGame();
					break;
			}
		}

		gamekeypressfunctions = function() {

		}

		gamekeyupfunctions = function() {

		}

		this.setLevel = setLevel;

		selectGame(brickGameModel.getGameNumber());
	};

	var Game = new function() {
		var load = function() {
		    selectedGame = brickGameModel.getSelectedGame();
			fillScreen("white");
			brickGameModel.setScore(0);
			// var brickTiles = selectedGame.brickTiles;
			brickGameModel.setSpeedInMillis(selectedGame.speedTimeout[brickGameModel.getSpeed() - 1]);
			// brickGameModel.setBrickTiles(brickTiles);

			var game = selectedGame.load();

			gamekeydownfunctions = function() {

				var keydownfunctions = game.keydownfunctions;

				if(keydownfunctions.onTop.action == undefined) keydownfunctions.onTop.action = keydownfunctions.onTop;
				if(keydownfunctions.onBottom.action == undefined) keydownfunctions.onBottom.action = keydownfunctions.onBottom;
				if(keydownfunctions.onLeft.action == undefined) keydownfunctions.onLeft.action = keydownfunctions.onLeft;
				if(keydownfunctions.onRight.action == undefined) keydownfunctions.onRight.action = keydownfunctions.onRight;
				if(keydownfunctions.onSpace.action == undefined) keydownfunctions.onSpace.action = keydownfunctions.onSpace;

				if(keydownfunctions.onTop.allowRepeat == undefined) keydownfunctions.onTop.allowRepeat = false;
				if(keydownfunctions.onBottom.allowRepeat == undefined) keydownfunctions.onBottom.allowRepeat = false;
				if(keydownfunctions.onLeft.allowRepeat == undefined) keydownfunctions.onLeft.allowRepeat = false;
				if(keydownfunctions.onRight.allowRepeat == undefined) keydownfunctions.onRight.allowRepeat = false;
				if(keydownfunctions.onSpace.allowRepeat == undefined) keydownfunctions.onSpace.allowRepeat = true;

				switch(event.key) {
					case "ArrowUp":
						game.keydownfunctions.onTop();
						break;
					case "ArrowDown":
						game.keydownfunctions.onBottom();
						break;
					case "ArrowLeft":
						game.keydownfunctions.onLeft();
						break;
					case "ArrowRight":
						game.keydownfunctions.onRight();
						break;
					case " ":
						var onSpace = keydownfunctions.onSpace;
						if(onSpace.allowRepeat || !event.repeat) onSpace.action();
						break;
					case "Enter":
						//pause();
						break; 
				}
			}

			gamekeypressfunctions = function() {
				switch(event.key) {
					// case "ArrowUp":
					// 	game.keydownfunctions.onTop();
					// 	break;
					// case "ArrowDown":
					// 	game.keydownfunctions.onBottom();
					// 	break;
					// case "ArrowLeft":
					// 	game.keydownfunctions.onLeft();
					// 	break;
					// case "ArrowRight":
					// 	game.keydownfunctions.onRight();
					// 	break;
					// case " ":
					// 	game.keypressfunctions.onSpace();
					// 	break;
					// case "Enter":
					// 	//pause();
					// 	break; 
				}
			}

			gamekeyupfunctions = function() {
				switch(event.key) {
					// case "ArrowUp":
					// 	game.keydownfunctions.onTop();
					// 	break;
					// case "ArrowDown":
					// 	game.keydownfunctions.onBottom();
					// 	break;
					// case "ArrowLeft":
					// 	game.keydownfunctions.onLeft();
					// 	break;
					// case "ArrowRight":
					// 	game.keydownfunctions.onRight();
					// 	break;
					case " ":
						game.keyupfunctions.onSpace();
						break;
					// case "Enter":
					// 	//pause();
					// 	break; 
				}
			}

			_window_.onkeydown = gamekeydownfunctions;
			_window_.onkeypress = gamekeypressfunctions;
			_window_.onkeyup = gamekeyupfunctions;
		};


		var selectedGame;

		this.load = load;

		this.gameOver = function() {
			console.log("game over");
			fillScreen("black");
			var brickGameMarquee = new Marquee(function() { GameProperties() });
			brickGameMarquee.load("GAME OVER");
		};
		this.levelUp = function() {
			var level = brickGameModel.getLevel() + 1;
			brickGameModel.setLevel(level > 10 ? 1: level);
			fillScreen("black");
			var brickGameMarquee = new Marquee(function() { load() });
			brickGameMarquee.load("LEVEL UP");
		};
		this.blinkBrickObjects = function(brickObjects, interval, count, endFunction, isKeyLocked) {
			count = count * 2;
			var c = 0;
			if((isKeyLocked == undefined ? true: isKeyLocked) == true) _window_.onkeydown = function() {};
			var blinkTimeout = setInterval(function(){
				for(var a = 0; a < brickObjects.length; a++) {
					brickObjects[a].appearToggle();
				}
				c++;
				if(count == c && count != undefined) { 
					clearTimeout(blinkTimeout);
					endFunction = endFunction == undefined ? function() { console.log("no function") }: endFunction;
					_window_.onkeydown = gamekeydownfunctions;
					_window_.onkeypress = gamekeypressfunctions;
					endFunction();
				}
			}, interval == undefined ? 1000: interval);
		};
		this.score = function() {
			var _score = brickGameModel.getScore() + 1;
			brickGameModel.setScore(_score);
			if(selectedGame.score < _score) selectedGame.score++;
		}
	}

	// GAMES
	var _games = [
	{
		letter: 'B',
		gameType: "race1",
		mode: 0,
		score: 0,
		speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var _road1 = [];
			var _road2 = [];

			var cars = [];

			var myCar = newCar(16, 5);

			function loadRoadAndCars() {
				for (var i = 0; i < 5; i++) {
					_road1.push(new BrickObject([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], "red"));
					_road2.push(new BrickObject([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], "red"));
				}

				cars.push(addCar());
			}

			function addCar() {
				var y = ((Math.floor(Math.random() * 100) % 2) * 3) + 2;
				return newCar(-4, y);
			}

			function newCar(x, y) {
				var car = new BrickObject([
					{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 },
					{ x: 2, y: 1 }, { x: 3, y: 0 }, { x: 3, y: 2 }
				]);

				car.setLocation(x, y);

				return car;
			}

			function moveRoad() {
				var lastCarLocation = cars.last().getLocation();
				if (lastCarLocation.x > 12 && lastCarLocation.y == myCar.getLocation().y) {
					moveRoadAnim.stop();
					console.log("blinked over and over again");
					blinkCrashedCars();
				}
				else {
					for (var i = 0; i < _road1.length; i++) {
						var x = _road1[i].getLocation().x;

						_road1[i].setLocation(x == undefined ? i * 4: x + 1, 0);
						_road2[i].setLocation(x == undefined ? i * 4: x + 1, 9);
					}

					if (_road1.first().getLocation().x == 2) {
						var _r1 = new BrickObject([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], "red"); 
						var _r2 = new BrickObject([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], "red");

						_r1.setLocation(-2, 0); _r2.setLocation(-2, 9);

						_road1.insertAbove(_r1);
						_road2.insertAbove(_r2);
					}

					if (_road1.last().getLocation().x == 20) {
						_road1.removeLast();
						_road2.removeLast();
					}

					for (var i = 0; i < cars.length; i++) {
						var location = cars[i].getLocation();
						cars[i].setLocation(location.x + 1, location.y);
					}

					if(cars.first().getLocation().x == 6) {
						cars.insertAbove(addCar());
					}

					if(lastCarLocation.x == 20) {
						cars.removeLast();
						Game.score();
					}
				}
			}

			function blinkCrashedCars() {

				Game.blinkBrickObjects([cars.last(), myCar], 400, 3, Game.gameOver);
			}

			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					
				},
				onTop: function() { 
					myCar.setLocation(16, 2)
				},
				onBottom: function() { 
					myCar.setLocation(16, 5);
				},
				onSpace: {
					action: function() {
						console.log("boost");
						moveRoadAnim.setTimerInterval(50);
					},
					allowRepeat: false
				}
				
			}

			this.keyupfunctions = {
				onSpace: function() {
					moveRoadAnim.setTimerInterval(speedInMillis);
				},
			}

			loadRoadAndCars();

			var moveRoadAnim = new Timer(moveRoad, speedInMillis);
			moveRoadAnim.start();

			moveRoad();

			return this;
		}
	},
	{
		letter: 'C',
		gameType: "war1",
		mode: 0,
		score: 0,
		speedTimeout: [1000, 950, 900, 850, 800, 750, 700, 650, 600, 500],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var soldierObject = new BrickObject([{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]);
			var enemyRows = loadEnemyTileLevel();

			function moveSoldier(direction) {
				var position = direction == undefined ? 4: soldierObject.getLocation().y;
				
				position = soldierObject.getLocation().y;

				switch(direction) {
					case "Up":
						if(position > -1) position--;
						break;
					case "Down":
						if(position < 8) position++;
						break;
					default:
						position = 4;
						break;
				}

				soldierObject.setLocation(18, position);
			}

			function loadEnemyTileLevel() {
				// LOAD ENEMIES IN ARRAY
				var enemyRows = [];

				for (var i = 0; i < level - 1; i++) {
					var enemyRow = newEnemyRow();
					enemyRow.setLocation(i, 0);
					enemyRows.push(enemyRow);
				}

				return enemyRows;
			}

			function invadeEnemies() {
				var enemyInvasionAnim = new Timer(function() {
					if(enemyRows.length == 18) {
						enemyInvasionAnim.stop();
						blinkSoldier();
					}
					else {
						var enemyRow = newEnemyRow();
						enemyRows.insertAbove(enemyRow);
						for (var i = enemyRows.length - 1; i >= 0; i--) {
							enemyRows[i].setLocation(i, 0);
						}
					}
				}, speedInMillis);
				enemyInvasionAnim.start();
			}

			function blinkSoldier() {
				Game.blinkBrickObjects([soldierObject], 400, 3, Game.gameOver);
			}

			function newEnemyRow() {
				var enemies = [];
				for (var j = 0; j < 10; j++) {
					var tile = Math.floor(Math.random() * 10) % 2;
					if(tile == 0) enemies.push({ x: 0, y: j });
				}
				return new BrickObject(enemies);
			}

			function fire() {
				// REMOVE enemies
				if(enemyRows.length > 0) {
					var e = enemyRows.length - 1;
					var soldierPosition = soldierObject.getLocation().y + 1;
					while(e >= 0 && isSpace(e, soldierPosition)) e--;
					if(e >= 0) {
						enemyRows[e].removeTile(e, soldierPosition);
						console.log(enemyRows);
						Game.score();
						while(enemyRows.length > 0 && enemyRows[enemyRows.length - 1].tileCount() == 0) {
							enemyRows.splice(enemyRows.length - 1, 1);
							console.log(enemyRows);
						}
					}
				}
			}

			function isSpace(x, y) {
				return !enemyRows[x].hasTile(x, y);
			}

			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					
				},
				onTop: function() { 
					moveSoldier("Up");
				},
				onBottom: function() { 
					moveSoldier("Down");
				},
				onSpace: function() {
					fire();
				},
			}

			this.keyupfunctions = {
				onSpace: function() {
					
				},
			}

			moveSoldier();
			invadeEnemies();

			return this;
		},
	},
	{
		letter: 'D',
		gameType: "pinball1",
		mode: 0,
		score: 0,
		speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var pinballCatcher = new BrickObject([{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 } ]);
			var pinball = new BrickObject([{ x: 0, y: 0 }], "Green");

			var isPinballThrown = false;

			var pinballDirection = "BottomLeft";

			var pinballTiles = [
				[
					{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 7 }, { x: 0, y: 8 },
					{ x: 1, y: 1 }, { x: 1, y: 4 }, { x: 1, y: 6 }, { x: 1, y: 9 },
					{ x: 2, y: 1 }, { x: 2, y: 5 }, { x: 2, y: 9 },
					{ x: 3, y: 2 }, { x: 3, y: 8 },
					{ x: 4, y: 3 }, { x: 4, y: 7 },
					{ x: 5, y: 4 }, { x: 5, y: 6 },
					{ x: 6, y: 5 },  
				],

				(function() {
					var tiles = [];
					for(var y = 0; y < 10; y++) {
						tiles.push({ x: 2, y: y });
						tiles.push({ x: 3, y: y });
					}

					for(var y = 0; y < 3; y++) {
						tiles.push({ x: 1, y: y });
						tiles.push({ x: 4, y: y });
						tiles.push({ x: 1, y: 9 - y });
						tiles.push({ x: 4, y: 9 - y });
					}

					for(var y = 1; y < 3; y++) {
						tiles.push({ x: 0, y: y });
						tiles.push({ x: 5, y: y });
						tiles.push({ x: 0, y: 9 - y });
						tiles.push({ x: 5, y: 9 - y });
					}
					return tiles;
				})(),

				(function() {
					var tiles = [];

					for (var x = 0; x < 7; x++) {
						var i = -(Math.abs(3 - x) - 3);
						for (var y = i; y < 10 - i; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function() {
					var tiles = [];

					for (var x = 0; x < 7; x++) {
						var i = Math.abs(3 - x);
						for (var y = i; y < 10 - i; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) {   
						var i = x % 2;
						for (var y = i; y < 10; y+=2) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 3; x+=2) { 
						for (var y = x; y < 10 - x; y++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: 7 - x, y: y });
						}
					}

					for(var y = 0; y < 3; y+=2) {
						for (var x = y + 1; x < 7 - y; x++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: x, y: 9 - y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 1; x < 7; x++) { 
						tiles.push({ x: x, y: 0 });
						tiles.push({ x: x, y: 9 });
					}

					for (var y = 1; y < 9; y++) { 
						tiles.push({ x: 0, y: y });
						tiles.push({ x: 6, y: y });
					}

					for (var x = 0; x < 7; x++) {
						var i = -(Math.abs(3 - x) - 3);
						tiles.push({ x: x, y: i });
						tiles.push({ x: x, y: 9 - i });
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 2; x < 5; x++) { 
						for (var y = 0; y < 10; y++) {
							tiles.push({ x: x, y: y });
						}
					}
					for (var x = 0; x < 2; x++) { 
						for (var y = 3; y < 7; y++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: 5 + x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) { 
						for (var y = 0; y < 10; y++) {
							if(Math.round(Math.random() * 100) % 2 == 0) tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) { 
						for (var y = 0; y < 10; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})()
			]

			var pinballTile = new BrickObject(pinballTiles[level - 1]);

			var pinballThrowAnim = new Timer(throwPinball, speedInMillis);

			pinballTile.setLocation(0, 0);
			pinballCatcher.setLocation(19, 3);
			pinball.setLocation(18, 5);

			function moveCatcher(direction) {
				var cy = pinballCatcher.getLocation().y;
				var pinballLocation = pinball.getLocation();
				var px = pinballLocation.x;
				var py = pinballLocation.y;
				var isCaught = px == 18 && hasPinballTile(px + 1, py);
				switch(direction) {
					case "Top":
						pinballCatcher.setLocation(19, cy == 0 ? 0: cy - 1);
						if(!isPinballThrown || isCaught) pinball.setLocation(18, cy == 0 ? py: py - 1);
						break;
					case "Bottom":
						pinballCatcher.setLocation(19, cy == 6 ? 6: cy + 1);
						if(!isPinballThrown || isCaught) pinball.setLocation(18, cy == 6 ? py: py + 1);
						break;
				}
			}

			function throwPinball() {
				var pinballLocation = pinball.getLocation();
				var x = pinballLocation.x, y = pinballLocation.y;
				switch(pinballDirection) {
					case "BottomLeft":
						x -= 1; y += 1;
						break;
					case "TopLeft":
						x -= 1; y -= 1;
						break;
					case "TopRight":
						x += 1; y -= 1;
						break;
					case "BottomRight":
						x += 1; y += 1;
						break;
					default:
						break;
				}
				pinball.setLocation(x, y);

				if(x == 19) {
					pinballThrowAnim.stop();
					blinkPinball();
				}
				else {
					changeDirection();
				}

				function changeDirection() {
					switch(pinballDirection) {
						case "BottomLeft":
							if (x == 0 || hasPinballTile(x - 1, y)) {
								pinballDirection = "BottomRight";
								changeDirection();
							}
							else if (y == 9 || hasPinballTile(x, y + 1)) {
								pinballDirection = "TopLeft";
								changeDirection();
							}
							else if (hasPinballTile(x - 1, y + 1)) {
								pinballDirection = "TopRight";
								changeDirection();
							}
							break;
						case "TopLeft":
							if (x == 0 || hasPinballTile(x - 1, y)) {
								pinballDirection = "TopRight";
								changeDirection();
							}
							else if (y == 0 || hasPinballTile(x, y - 1)) {
								pinballDirection = "BottomLeft";
								changeDirection();
							}
							else if (hasPinballTile(x - 1, y - 1)) {
								pinballDirection = "BottomRight";
								changeDirection();
							}
							break;
						case "TopRight":
							if (hasPinballTile(x + 1, y)) {
								pinballDirection = "TopLeft";
								changeDirection();
							}
							else if (y == 0 || hasPinballTile(x, y - 1)) {
								pinballDirection = "BottomRight";
								changeDirection();
							}
							else if (hasPinballTile(x + 1, y - 1)) {
								pinballDirection = "BottomLeft";
								changeDirection();
							}
							break;
						case "BottomRight":
							if (hasPinballTile(x + 1, y)) {
								pinballDirection = "BottomLeft";
								changeDirection();
							}
							else if (y == 9 || hasPinballTile(x, y + 1)) {
								pinballDirection = "TopRight";
								changeDirection();
							}
							else if (hasPinballTile(x + 1, y + 1)) {
								pinballDirection = "TopLeft";
								changeDirection();
							}
							break;
						default:
							break;
					}
				}
			}

			function hasPinballTile(x, y) {
				var isCaught = pinballCatcher.hasTile(x, y);
				var hasTile = pinballTile.hasTile(x, y);
				if (hasTile) {
					pinballTile.removeTile(x, y);
					Game.score();
					if (pinballTile.tileCount() == 0) {
						Game.levelUp();
					}
				}
				return isCaught || hasTile;
			}

			function blinkPinball() {
				Game.blinkBrickObjects([pinballCatcher, pinball], 400, 3, Game.gameOver);
			}

			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					 
				},
				onTop: function() { 
					moveCatcher("Top");
				},
				onBottom: function() { 
					moveCatcher("Bottom");
				},
				onSpace: {
					action: function() {
						if (!isPinballThrown) {
							isPinballThrown = true;
							pinballThrowAnim.start();
						}
						pinballThrowAnim.setTimerInterval(20);
					},
					allowRepeat: false
				}
			}

			this.keyupfunctions = {
				onSpace: function() {
					pinballThrowAnim.setTimerInterval(speedInMillis);
				},
			}

			return this;
		}
	},
	{
		letter: 'E',
		gameType: "war2",
		mode: 0,
		score: 0,
		speedTimeout:  [10000, 9000, 8000, 7000, 6500, 6000, 5500, 5000, 4500, 4000],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var soldierObject = new BrickObject([{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]);
			var enemyRows = loadEnemyTileLevel();

			function moveSoldier(direction) {
				var position = direction == undefined ? 4: soldierObject.getLocation().y;
				
				position = soldierObject.getLocation().y;

				switch(direction) {
					case "Up":
						if(position > -1) position--;
						break;
					case "Down":
						if(position < 8) position++;
						break;
					default:
						position = 4;
						break;
				}

				soldierObject.setLocation(18, position);
			}

			function loadEnemyTileLevel() {
				// LOAD ENEMIES IN ARRAY
				var enemyRows = [];

				for (var i = 0; i < level - 1; i++) {
					var enemyRow = newEnemyRow();
					enemyRow.setLocation(i, 0);
					enemyRows.push(enemyRow);
				}

				return enemyRows;
			}

			function invadeEnemies() {
				console.log("invasion started");
				var enemyInvasionAnim = new Timer(function() {
					if(enemyRows.length == 18) {
						enemyInvasionAnim.stop();
						console.log("invasion stopped")
						blinkSoldier();
					}
					else {
						var enemyRow = newEnemyRow();
						enemyRows.insertAbove(enemyRow);
						for (var i = enemyRows.length - 1; i >= 0; i--) {
							enemyRows[i].setLocation(i, 0);
						}
					}
				}, speedInMillis);
				enemyInvasionAnim.start();
			}

			function blinkSoldier() {
				console.log("soldier blicked");
				Game.blinkBrickObjects([soldierObject], 400, 3, Game.gameOver);
			}

			function newEnemyRow() {
				var enemies = [];
				for (var j = 0; j < 10; j++) {
					var tile = Math.floor(Math.random() * 10) % 2;
					if(tile == 0) enemies.push({ x: 0, y: j });
				}
				return new BrickObject(enemies);
			}

			function fire() {
				// REMOVE enemies
				// if(enemyRows.length > 0) {
				// 	var e = enemyRows.length - 1;
				var soldierPosition = soldierObject.getLocation().y + 1;
				// 	while(e >= 0 && isSpace(e, soldierPosition)) e--;
				// 	if(e >= 0) {
				// 		enemyRows[e].removeTile(e, soldierPosition);
				// 		console.log(enemyRows);
				// 		Game.score();
				// 		while(enemyRows.length > 0 && enemyRows[enemyRows.length - 1].tileCount() == 0) {
				// 			enemyRows.splice(enemyRows.length - 1, 1);
				// 			console.log(enemyRows);
				// 		}
				// 	}
				// }
				var e = enemyRows.length - 1;
				if(!(enemyRows.length == 18 && !isSpace(e, soldierPosition))) {
					while(e >= 0 && isSpace(e, soldierPosition)) e--;
					e++;
					if(enemyRows[e] == undefined) {
						enemyRows.push(new BrickObject([{ x: 0, y: soldierPosition }]));
						enemyRows[e].setLocation(e, 0);
					}
					else {
						enemyRows[e].addTile(e, soldierPosition);
					}
					console.log(enemyRows.length);
				}
			}

			function isSpace(x, y) {
				return !enemyRows[x].hasTile(x, y);
			}

			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					
				},
				onTop: function() { 
					moveSoldier("Up");
				},
				onBottom: function() { 
					moveSoldier("Down");
				},
				onSpace: function() {
					fire();
				},
			}

			this.keyupfunctions = {
				onSpace: function() {
					
				},
			}

			moveSoldier();
			invadeEnemies();

			return this;
		},
	},
	{
		letter: 'F',
		gameType: "doublepinball",
		mode: 0,
		score: 0,
		speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
		load: function() {
			// DECLARATIONS
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var pinballCatcher1 = new BrickObject([{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 } ]);
			var pinballCatcher2 = new BrickObject([{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 } ]); 
			var pinball = new BrickObject([{ x: 0, y: 0 }], "Green");

			var isPinballThrown = false;

			var pinballDirection = "BottomLeft";

			var pinballTiles = [
				[
					{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 7 }, { x: 0, y: 8 },
					{ x: 1, y: 1 }, { x: 1, y: 4 }, { x: 1, y: 6 }, { x: 1, y: 9 },
					{ x: 2, y: 1 }, { x: 2, y: 5 }, { x: 2, y: 9 },
					{ x: 3, y: 2 }, { x: 3, y: 8 },
					{ x: 4, y: 3 }, { x: 4, y: 7 },
					{ x: 5, y: 4 }, { x: 5, y: 6 },
					{ x: 6, y: 5 },  
				],

				(function() {
					var tiles = [];
					for(var y = 0; y < 10; y++) {
						tiles.push({ x: 2, y: y });
						tiles.push({ x: 3, y: y });
					}

					for(var y = 0; y < 3; y++) {
						tiles.push({ x: 1, y: y });
						tiles.push({ x: 4, y: y });
						tiles.push({ x: 1, y: 9 - y });
						tiles.push({ x: 4, y: 9 - y });
					}

					for(var y = 1; y < 3; y++) {
						tiles.push({ x: 0, y: y });
						tiles.push({ x: 5, y: y });
						tiles.push({ x: 0, y: 9 - y });
						tiles.push({ x: 5, y: 9 - y });
					}
					return tiles;
				})(),

				(function() {
					var tiles = [];

					for (var x = 0; x < 7; x++) {
						var i = -(Math.abs(3 - x) - 3);
						for (var y = i; y < 10 - i; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function() {
					var tiles = [];

					for (var x = 0; x < 7; x++) {
						var i = Math.abs(3 - x);
						for (var y = i; y < 10 - i; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) {   
						var i = x % 2;
						for (var y = i; y < 10; y+=2) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 3; x+=2) { 
						for (var y = x; y < 10 - x; y++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: 7 - x, y: y });
						}
					}

					for(var y = 0; y < 3; y+=2) {
						for (var x = y + 1; x < 7 - y; x++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: x, y: 9 - y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 1; x < 7; x++) { 
						tiles.push({ x: x, y: 0 });
						tiles.push({ x: x, y: 9 });
					}

					for (var y = 1; y < 9; y++) { 
						tiles.push({ x: 0, y: y });
						tiles.push({ x: 6, y: y });
					}

					for (var x = 0; x < 7; x++) {
						var i = -(Math.abs(3 - x) - 3);
						tiles.push({ x: x, y: i });
						tiles.push({ x: x, y: 9 - i });
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 2; x < 5; x++) { 
						for (var y = 0; y < 10; y++) {
							tiles.push({ x: x, y: y });
						}
					}
					for (var x = 0; x < 2; x++) { 
						for (var y = 3; y < 7; y++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: 5 + x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) { 
						for (var y = 0; y < 10; y++) {
							if(Math.round(Math.random() * 100) % 2 == 0) tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) { 
						for (var y = 0; y < 10; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})()
			]

			var pinballTile = new BrickObject(pinballTiles[level - 1]);

			var pinballThrowAnim = new Timer(throwPinball, speedInMillis);

			pinballTile.setLocation(7, 0);
			pinballCatcher1.setLocation(0, 3);
			pinballCatcher2.setLocation(19, 3);
			pinball.setLocation(18, 5);

			function moveCatcher(direction) {
				var cy = pinballCatcher1.getLocation().y;
				var pinballLocation = pinball.getLocation();
				var px = pinballLocation.x;
				var py = pinballLocation.y;
				var isCaught = (px == 18 && hasPinballTile(px + 1, py)) || (px == 1 && hasPinballTile(px - 1, py));
				switch(direction) {
					case "Top":
						pinballCatcher1.setLocation(0, cy == 0 ? 0: cy - 1);
						pinballCatcher2.setLocation(19, cy == 0 ? 0: cy - 1);
						if(!isPinballThrown || isCaught) {
							pinball.setLocation(18, cy == 0 ? py: py - 1);
						}
						break;
					case "Bottom":
						pinballCatcher1.setLocation(0, cy == 6 ? 6: cy + 1);
						pinballCatcher2.setLocation(19, cy == 6 ? 6: cy + 1);
						if(!isPinballThrown || isCaught) pinball.setLocation(18, cy == 6 ? py: py + 1);
						break;
				}
			}

			function throwPinball() {
				var pinballLocation = pinball.getLocation();
				var x = pinballLocation.x, y = pinballLocation.y;
				switch(pinballDirection) {
					case "BottomLeft":
						x -= 1; y += 1;
						break;
					case "TopLeft":
						x -= 1; y -= 1;
						break;
					case "TopRight":
						x += 1; y -= 1;
						break;
					case "BottomRight":
						x += 1; y += 1;
						break;
					default:
						break;
				}
				pinball.setLocation(x, y);

				if(x == 19 || x == 0) {
					pinballThrowAnim.stop();
					blinkPinball();
				}
				else {
					changeDirection();
				}

				function changeDirection() {
					switch(pinballDirection) {
						case "BottomLeft":
							if (x == 0 || hasPinballTile(x - 1, y)) {
								pinballDirection = "BottomRight";
								changeDirection();
							}
							else if (y == 9 || hasPinballTile(x, y + 1)) {
								pinballDirection = "TopLeft";
								changeDirection();
							}
							else if (hasPinballTile(x - 1, y + 1)) {
								pinballDirection = "TopRight";
								changeDirection();
							}
							break;
						case "TopLeft":
							if (x == 0 || hasPinballTile(x - 1, y)) {
								pinballDirection = "TopRight";
								changeDirection();
							}
							else if (y == 0 || hasPinballTile(x, y - 1)) {
								pinballDirection = "BottomLeft";
								changeDirection();
							}
							else if (hasPinballTile(x - 1, y - 1)) {
								pinballDirection = "BottomRight";
								changeDirection();
							}
							break;
						case "TopRight":
							if (hasPinballTile(x + 1, y)) {
								pinballDirection = "TopLeft";
								changeDirection();
							}
							else if (y == 0 || hasPinballTile(x, y - 1)) {
								pinballDirection = "BottomRight";
								changeDirection();
							}
							else if (hasPinballTile(x + 1, y - 1)) {
								pinballDirection = "BottomLeft";
								changeDirection();
							}
							break;
						case "BottomRight":
							if (hasPinballTile(x + 1, y)) {
								pinballDirection = "BottomLeft";
								changeDirection();
							}
							else if (y == 9 || hasPinballTile(x, y + 1)) {
								pinballDirection = "TopRight";
								changeDirection();
							}
							else if (hasPinballTile(x + 1, y + 1)) {
								pinballDirection = "TopLeft";
								changeDirection();
							}
							break;
						default:
							break;
					}
				}
			}

			function hasPinballTile(x, y) {
				var isCaught1 = pinballCatcher1.hasTile(x, y);
				var isCaught2 = pinballCatcher2.hasTile(x, y);
				var hasTile = pinballTile.hasTile(x, y);
				if (hasTile) {
					pinballTile.removeTile(x, y);
					Game.score();
					if (pinballTile.tileCount() == 0) {
						Game.levelUp();
					}
				}
				return isCaught1 || isCaught2 || hasTile;
			}

			function blinkPinball() {
				Game.blinkBrickObjects([pinballCatcher1, pinballCatcher2, pinball], 400, 3, Game.gameOver);
			}

			// KEY FUNCTIONS
			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					
				},
				onTop: function() { 
					moveCatcher("Top");
				},
				onBottom: function() { 
					moveCatcher("Bottom");
				},
				onSpace: {
					action: function() {
						if (!isPinballThrown) {
							isPinballThrown = true;
							pinballThrowAnim.start();
						}
						pinballThrowAnim.setTimerInterval(20);
					},
					allowRepeat: false
				}
			}

			this.keyupfunctions = {
				onSpace: function() {
					pinballThrowAnim.setTimerInterval(speedInMillis);
				},
			}

			return this;
		}
	},
	{
		letter: 'G',
		gameType: "cross",
		mode: 0,
		score: 0,
		speedTimeout: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var crossers = [];
			var crosser;
			
			function addCrosser() {
				crosser = new BrickObject([{ x: 0, y: 0 }], "Green");
				crosser.setLocation(19, 5);
			}

			function loadWalls() {
				for (var i = 2; i < 19; i += 2) {
					var wall = new BrickObject(function(){
						var w = [];
						for (var j = 0; j < 10; j++) {
							w.push({ x: 0, y: j });
						}
						return w;
					}());
					wall.setLocation(i, 0);
				}
			}

			function moveCrosser(direction) {
				var location = crosser.getLocation();

				switch(direction) {
					case "Left":
						crosser.setLocation(location.x == 0 ? 0: (location.x - (location.x == 1 ? 1: 2)), location.y);
						location = crosser.getLocation();
						if (location.x == 0) {
							var bumpedCrosser = crossers.filter(function(crosser) { return crosser.getLocation().y == location.y }).first();
							
							if(bumpedCrosser == null || bumpedCrosser == undefined) {
								crossers.push(crosser);
								Game.score();
								if(crossers.length == 10) {
									Game.levelUp();
								}
								else {
									addCrosser();
								}
							}
							else {
								Game.blinkBrickObjects([bumpedCrosser, crosser], 400, 3, Game.gameOver);
							}
						}
						break;

					case "Right":
						crosser.setLocation(location.x == 19 ? 19: location.x + 2, location.y);
						break;
					case "Top":
						crosser.setLocation(location.x, location.y == 0 ? 0: location.y - 1);
						break;
					case "Bottom":
						crosser.setLocation(location.x, location.y == 9 ? 9: location.y + 1);
						break;
				}
			}


			loadWalls();

			this.keydownfunctions = {
				onLeft: function() { 
					moveCrosser("Left");
				},
				onRight: function() { 
					moveCrosser("Right");
				},
				onTop: function() {
					moveCrosser("Top");
				},
				onBottom: function() { 
					moveCrosser("Bottom");
				},
				onSpace: function() {
					moveCrosser("Left");
				},
			}

			this.keyupfunctions = {
				onSpace: function() {
					
				},
			}

			addCrosser();

			return this;
		}
	},
	{
		letter: 'H',
		gameType: "unnamed1",
		mode: 0,
		score: 0,
		speedTimeout: [550, 500, 450, 400, 350, 300, 250, 200, 150, 100],
		load: function() {
			var soldierObject = new BrickObject([{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]);
			
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var position = 4;

			var pinballTiles = [
				[
					{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 7 }, { x: 0, y: 8 },
					{ x: 1, y: 1 }, { x: 1, y: 4 }, { x: 1, y: 6 }, { x: 1, y: 9 },
					{ x: 2, y: 1 }, { x: 2, y: 5 }, { x: 2, y: 9 },
					{ x: 3, y: 2 }, { x: 3, y: 8 },
					{ x: 4, y: 3 }, { x: 4, y: 7 },
					{ x: 5, y: 4 }, { x: 5, y: 6 },
					{ x: 6, y: 5 },  
				],

				(function() {
					var tiles = [];
					for(var y = 0; y < 10; y++) {
						tiles.push({ x: 2, y: y });
						tiles.push({ x: 3, y: y });
					}

					for(var y = 0; y < 3; y++) {
						tiles.push({ x: 1, y: y });
						tiles.push({ x: 4, y: y });
						tiles.push({ x: 1, y: 9 - y });
						tiles.push({ x: 4, y: 9 - y });
					}

					for(var y = 1; y < 3; y++) {
						tiles.push({ x: 0, y: y });
						tiles.push({ x: 5, y: y });
						tiles.push({ x: 0, y: 9 - y });
						tiles.push({ x: 5, y: 9 - y });
					}
					return tiles;
				})(),

				(function() {
					var tiles = [];

					for (var x = 0; x < 7; x++) {
						var i = -(Math.abs(3 - x) - 3);
						for (var y = i; y < 10 - i; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function() {
					var tiles = [];

					for (var x = 0; x < 7; x++) {
						var i = Math.abs(3 - x);
						for (var y = i; y < 10 - i; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) {   
						var i = x % 2;
						for (var y = i; y < 10; y+=2) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 3; x+=2) { 
						for (var y = x; y < 10 - x; y++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: 7 - x, y: y });
						}
					}

					for(var y = 0; y < 3; y+=2) {
						for (var x = y + 1; x < 7 - y; x++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: x, y: 9 - y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 1; x < 7; x++) { 
						tiles.push({ x: x, y: 0 });
						tiles.push({ x: x, y: 9 });
					}

					for (var y = 1; y < 9; y++) { 
						tiles.push({ x: 0, y: y });
						tiles.push({ x: 6, y: y });
					}

					for (var x = 0; x < 7; x++) {
						var i = -(Math.abs(3 - x) - 3);
						tiles.push({ x: x, y: i });
						tiles.push({ x: x, y: 9 - i });
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 2; x < 5; x++) { 
						for (var y = 0; y < 10; y++) {
							tiles.push({ x: x, y: y });
						}
					}
					for (var x = 0; x < 2; x++) { 
						for (var y = 3; y < 7; y++) {
							tiles.push({ x: x, y: y });
							tiles.push({ x: 5 + x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) { 
						for (var y = 0; y < 10; y++) {
							if(Math.round(Math.random() * 100) % 2 == 0) tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})(),

				(function(){
					var tiles = [];

					for (var x = 0; x < 7; x++) { 
						for (var y = 0; y < 10; y++) {
							tiles.push({ x: x, y: y });
						}
					}

					return tiles;
				})()
			]

			var pinballTile = new BrickObject(pinballTiles[level - 1]);
			var movePinballTileAnim = new Timer(movePinballTile, 2000);

			pinballTile.setLocation(0, 0); 

			function moveSoldier(direction) {
				position = direction == undefined ? 4: soldierObject.getLocation().y;
				
				position = soldierObject.getLocation().y;

				switch(direction) {
					case "Up":
						if(position > -1) position--;
						break;
					case "Down":
						if(position < 8) position++;
						break;
					default:
						position = 4;
						break;
				}

				soldierObject.setLocation(18, position);
			}

			function movePinballTile() {
				var location = pinballTile.getLocation();
				pinballTile.setLocation(location.x + 1, location.y);
			}

			function fire() {
				if (pinballTile.removeSideTile("right", position + 1)) {
					Game.score();
				}
			}

			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					
				},
				onTop: function() { 
					moveSoldier("Up");
				},
				onBottom: function() { 
					moveSoldier("Down");
				},
				onSpace: function() {
					fire();
				},
			}

			this.keyupfunctions = {
				onSpace: function() {
					
				},
			}

			moveSoldier();
			movePinballTileAnim.start();

			return this;
		}
	},
	{
		letter: 'I',
		gameType: "snake",
		mode: 0,
		score: 0,
		speedTimeout: [550, 500, 450, 400, 350, 300, 250, 200, 150, 100],
		load: function() {
			var gameLevelTiles = [
			{
				snake: { location: { x: 4, y: 9 }, direction: "Right" },
				obstacles: new BrickObject()
			},
			{
				snake: { location: { x: 11, y: 6 }, direction: "Right" },
				obstacles: new BrickObject([
					{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}, 
					{x: 19, y: 0}, {x: 18, y: 0}, {x: 19, y: 1}, 
					{x: 19, y: 9}, {x: 18, y: 9}, {x: 19, y: 8}, 
					{x: 0, y: 9}, {x: 1, y: 9}, {x: 0, y: 8}, 
					{x: 9, y: 4}, {x: 9, y: 5}, {x: 10, y: 4}, {x: 10, y: 5}]
				)
			},
			{
				snake: { location: { x: 11, y: 6 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for (var i = 0; i < 20; i++) {
						tiles.push({ x: i, y: 0 }); tiles.push({ x: i, y: 9 });
					}
					for (var i = 1; i < 9; i++) {
						tiles.push({ x: 0, y: i }); tiles.push({ x: 19, y: i });
					};
					return tiles;
				})())
			},
			{
				snake: { location: { x: 11, y: 5 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for (var i = 0; i < 8; i++) {
						tiles.push({ x: i, y: 3 }); tiles.push({ x: i, y: 6 });
						tiles.push({ x: i + 12, y: 3 }); tiles.push({ x: i + 12, y: 6 });
					}
					for(var i = 0; i < 3; i++) {
						tiles.push({ x: 7, y: i + 7 }); tiles.push({ x: 12, y: i });
					}
					return tiles;
				})())
			},
			{
				snake: { location: { x: 2, y: 9 }, direction: "Left" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for (var i = 0; i < 20; i++) {
						tiles.push({ x: i, y: 4 }); tiles.push({ x: i, y: 5 });
					}
					for (var i = 0; i < 5; i++) {
						tiles.push({ x: 9, y: i }); tiles.push({ x: 9, y: i + 5 });
						tiles.push({ x: 10, y: i }); tiles.push({ x: 10, y: i + 5 });
					}
					return tiles;
				})())
			},
			{
				snake: { location: { x: 11, y: 5 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [
						{ x: 9, y: 0 }, { x: 10, y: 0 }, { x: 9, y: 1 }, { x: 10, y: 1 },
						{ x: 9, y: 8 }, { x: 10, y: 8 }, { x: 9, y: 9 }, { x: 10, y: 9 }
					];
					for(var a = 5; a < 15; a++) {
						tiles.push({ x: a, y: 3 });
						tiles.push({ x: a, y: 6 });
					}
					return tiles;
				})())
			},
			{
				snake: { location: { x: 4, y: 9 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for(var a = 2; a < 8; a++) {
						tiles.push({ x: 8, y: a }); tiles.push({ x: 11, y: a });
					}
					for (var i = 2; i < 5; i++) {
						tiles.push({ x: i, y: 4 }); tiles.push({ x: i, y: 5 });
						tiles.push({ x: i + 13, y: 4 }); tiles.push({ x: i + 13, y: 5 });
					}
					return tiles;
				})())
			},
			{
				snake: { location: { x: 4, y: 9 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for(var a = 2; a < 8; a++) {
						tiles.push({ x: 2, y: a }); tiles.push({ x: 17, y: a });
					} 
					for(var a = 3; a < 6; a++) {
						tiles.push({ x: a, y: 2 }); tiles.push({ x: a, y: 7 });
						tiles.push({ x: a + 11, y: 2 }); tiles.push({ x: a + 11, y: 7 });
					}
					for (var a = 8; a < 12; a++) {
						tiles.push({ x: a, y: 4 }); tiles.push({ x: a, y: 5 });
					}
					return tiles;
				})())
			},
			{
				snake: { location: { x: 11, y: 5 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for(var a = 2; a < 8; a++){
						tiles.push({ x: 0, y: a }); tiles.push({ x: 19, y: a });
					}
					for (var a = 3; a < 17; a++) {
						tiles.push({ x: a, y: 0 }); tiles.push({ x: a, y: 3 });
						tiles.push({ x: a, y: 6 }); tiles.push({ x: a, y: 9 });
					}
					return tiles;
				})())
			},
			{
				snake: { location: { x: 6, y: 8 }, direction: "Right" },
				obstacles: new BrickObject((function() {
					var tiles = [];
					for(var a = 2; a < 8; a++){
						tiles.push({ x: 0, y: a }); tiles.push({ x: 19, y: a });
					}
					for (var a = 3; a < 7; a++) {
						tiles.push({ x: 5, y: a }); tiles.push({ x: 8, y: a });
						tiles.push({ x: 11, y: a }); tiles.push({ x: 14, y: a });
					}
					for (var a = 4; a < 16; a++) {
						tiles.push({ x: a, y: 0 }); tiles.push({ x: a, y: 9 });
					}
					return tiles;
				})())
			}];
			
			var foodObject = new BrickObject([{ x: 0, y: 0 }], "Red");

			var snakeObject;

			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var direction = gameLevelTiles[level - 1].snake.direction;
			var snakeLocation = gameLevelTiles[level - 1].snake.location;
			var obstacles = gameLevelTiles[level - 1].obstacles;

			function loadSnake() {
				
			    snakeObject = [new BrickObject([{ x: 0, y: 0 }], "Green")];
			    snakeObject[0].setLocation(snakeLocation.x, snakeLocation.y);
			    
			    var t = 1;
			    while(t < 5) {
			    	var x;
			    	if(direction == "Right") {
			    		x = snakeLocation.x - t;
			    	}
			    	else {
			    		x = snakeLocation.x + t;
			    	}
			    	snakeObject.push(new BrickObject([{ x: 0, y: 0 }], "Black"));
			    	snakeObject[snakeObject.length - 1].setLocation(x, snakeLocation.y);
			    	t++;
			    }
			}


			function crawlSnake() {
			
				var location = snakeObject[0].getLocation();
				var foodLocation = foodObject.getLocation();

				var x = location.x;
				var y = location.y;

				switch(direction) {
					case "Right":
						x++;
						if(x == 20) x = 0;
						break;
					case "Up":
						y--;
						if(y < 0) y = 9;
						break;
					case "Left":
						x--;
						if(x < 0) x = 19;
						break;
					case "Down":
						y++;
						if(y == 10) y = 0;
						break;
					default:
						break;
				}

				
				if (isObstacle(x, y) || isSnakeTile(x, y)) {
					snakeCrawlAnim.stop();
					Game.blinkBrickObjects(snakeObject, 400, 3, Game.gameOver);
				}
				else {
					if(x == foodLocation.x && y == foodLocation.y) {
						loadFood();
						var tailLocation = snakeObject[snakeObject.length - 1].getLocation();
						snakeObject.push(new BrickObject([{ x: 0, y: 0 }], "Black"));
						Game.score();
					}
					snakeObject[0].setLocation(x, y);
					for (var i = 1; i < snakeObject.length; i++) {
						var l = snakeObject[i].getLocation();
						snakeObject[i].setLocation(location.x, location.y);
						location = l;
					}

					location = snakeObject[0].getLocation();
				}
			}

			var snakeCrawlAnim = new Timer(crawlSnake, speedInMillis);
			snakeCrawlAnim.start();

			function loadObstacles() {
				gameLevelTiles[brickGameModel.getLevel() - 1].obstacles.setLocation(0, 0);
			}

			function loadFood() {
				do
				{
					foodX = Math.round(Math.random() * 100) % 20;
					foodY = Math.round(Math.random() * 100) % 10;
				}
				while(isObstacle(foodX, foodY) || isSnakeTile(foodX, foodY))

				foodObject.setLocation(foodX, foodY);
			}

			function isObstacle(x, y) {
				return obstacles.hasTile(x, y);
			}
			function isSnakeTile(x, y) {
				return snakeObject.filter(function(s) {
					return s.hasTile(x, y);
				}).length > 0;
			}
			function changeDirection(_direction) {
				if((direction == "Right" && _direction != "Left") ||
					(direction == "Left" && _direction != "Right") ||
					(direction == "Up" && _direction != "Down") || 
					(direction == "Down" && _direction != "Up"))
					direction = _direction;
			}

			this.keydownfunctions = {
				onLeft: function() { 
					changeDirection("Left");
				},
				onRight: function() { 
					changeDirection("Right");
				},
				onTop: function() { 
					changeDirection("Up");
				},
				onBottom: function() { 
					changeDirection("Down");
				},
				onSpace: {
					action: function() {
						snakeCrawlAnim.setTimerInterval(50);
					},
					allowRepeat: false
				}
				
			}

			this.keyupfunctions = {
				onSpace: function() {
					snakeCrawlAnim.setTimerInterval(speedInMillis);
				},
			}

			loadObstacles();
			loadSnake();
			loadFood();
			crawlSnake();

			return this;
		},
	},
	{
		letter: 'K',
		gameType: "match",
		mode: 0,
		score: 0,
		speedTimeout: [1000, 940, 880, 820, 760, 700, 640, 580, 520, 460],  
		load: function() {
			var brickTiles = [
				[{ x: 0, y: 1 }],
				[{ x: 0, y: 1 }, { x: 0, y: 0 }],
				[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
				[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }]
			];

			var speedInMillis = brickGameModel.getSpeedInMillis();

			// GLOBAL VARIABLES OF THIS FUNCTION
			var brickMatches = [0, 0, 0], brickToMatch = [];
			var brickObjects = [], matchBrickObjects = [];
			var brickLocation = 0; 

			var brickInvasionAnim = new Timer(function() {

				for (var i = 0; i < matchBrickObjects.length; i++) {
					console.log("-----");
					console.log(i);
					console.log(matchBrickObjects[i].bt[0].screenX);
					console.log(brickObjects[i].bt[0].screenX);
				}

				if(brickLocation == 15) {
					brickInvasionAnim.stop();
					blinkBricks();
				}
				else {
					brickLocation++;
					setBrickTileToMatchLocations(brickLocation);
				}
			}, speedInMillis);
			var matchBricksAnim = new Timer(function() {

				var brickLocation = brickObjects[0].getLocation().x;
				var brickToMatchLocation = matchBrickObjects[0].getLocation().x;

				if(brickToMatchLocation + 2 == brickLocation) {
					matchBricksAnim.stop();
					if(getMatch()) {
						brickInvasionAnim.stop();
						hideBrickObjects();
						blinkInvadingBricks();
					}
					else {
						brickInvasionAnim.start();
					 	setBrickTileLocations(17);
					}
				}
				else {
					brickLocation--; 
					setBrickTileLocations(brickLocation);
				}
			}, 10);

			// GLOBAL FUNCTIONS
			function loadBrickTiles() {
				for (var i = 0; i < 3; i ++) {
					brickObjects.push(new BrickObject(brickTiles[brickMatches[i]], "black"));
				}
			}
			function loadBrickTilesToMatch() {
				for (var i = 0; i < 3; i ++) {
					matchBrickObjects.push(new BrickObject(brickTiles[0], "black"));
				}
			}
			function setBrickTileLocations(x) {
				for (var i = 0; i < 3; i ++) {
					brickObjects[i].setLocation(x, 1 + (i * 3));
				}
			}
			function setBrickTileToMatchLocations(x) {
				for (var i = 0; i < 3; i ++) {
					matchBrickObjects[i].setLocation(x, 1 + (i * 3), brickTiles[brickToMatch[i]]);
				}
			}
			function randomMatches() {
				var _a = Math.round(Math.random() * 100) % 4;
				var _b = Math.round(Math.random() * 100) % 4;
				var _c = Math.round(Math.random() * 100) % 4;
				return [_a, _b, _c];
			}
			function changeBrickObject(number) {
				brickMatches[number]++;
				if(brickMatches[number] > 3) brickMatches[number] = 0;
				brickObjects[number].setLocation(17, 1 + (number * 3), brickTiles[brickMatches[number]]);
			}
			function matchBricks() {
				if(matchBrickObjects[0].getLocation().x < 15) {
					brickInvasionAnim.pause();
					matchBricksAnim.start();
				}
			}
			function getMatch() {
				var isMatched = true;
				var a = 0;
				while(isMatched == true && a < 3) {
					isMatched = brickToMatch[a] == brickMatches[a];
					a++;
				}
				return isMatched;
			}
			function blinkBricks() {
				Game.blinkBrickObjects(brickObjects, 400, 3, Game.gameOver);
			}
			function blinkInvadingBricks() {
				Game.blinkBrickObjects(matchBrickObjects, 400, 3, function() {
					Game.score();
					startMatch();
				});
			}
			function displayBrickObjects() {
				for(var a = 0; a < 3; a++) {
					brickObjects[a].show();
				}
			}
			function hideBrickObjects() {
				for(var a = 0; a < 3; a++) {
					brickObjects[a].hide();
				}
			}
			function startMatch() {
				brickLocation = brickGameModel.getLevel();
				brickToMatch = randomMatches();
				setBrickTileLocations(17);
				setBrickTileToMatchLocations(brickLocation);
				brickInvasionAnim.start();
			}

			this.keydownfunctions = {
				onLeft: function() { 
					changeBrickObject(1);
				},
				onRight: function() { 
					changeBrickObject(1);
				},
				onTop: function() { 
					changeBrickObject(0);
				},
				onBottom: function() { 
					changeBrickObject(2);
				},
				onSpace: function() {
					matchBricks();
				},
			}

			this.keyupfunctions = {
				onSpace: function() {
					
				},
			}

			loadBrickTiles();
			loadBrickTilesToMatch();
			startMatch();

			return this;
		},
	},
	{
		letter: 'L',
		gameType: "race2",
		mode: 0,
		score: 0,
		speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var _road1 = [];

			var cars = [];

			var myCar = newCar(16, 7);

			function loadRoadAndCars() {
				for (var i = 0; i < 5; i++) {
					_road1.push(new BrickObject([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], "red"));
				}

				cars.push(addCar());
			}

			function addCar() {
				var y = ((Math.floor(Math.random() * 100) % 3) * 3) + 1;
				return newCar(-4, y);
			}

			function newCar(x, y) {
				var car = new BrickObject([
					{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 },
					{ x: 2, y: 1 }, { x: 3, y: 0 }, { x: 3, y: 2 }
				]);

				car.setLocation(x, y);

				return car;
			}

			function moveRoad() {
				var lastCarLocation = cars.last().getLocation();
				if (lastCarLocation.x > 12 && lastCarLocation.y == myCar.getLocation().y) {
					moveRoadAnim.stop();
					blinkCrashedCars();
				}
				else {
					for (var i = 0; i < _road1.length; i++) {
						var x = _road1[i].getLocation().x;

						_road1[i].setLocation(x == undefined ? i * 4: x + 1, 0);
					}

					if (_road1.first().getLocation().x == 2) {
						var _r1 = new BrickObject([{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}], "red");

						_r1.setLocation(-2, 0);

						_road1.insertAbove(_r1);
					}

					if (_road1.last().getLocation().x == 20) {
						_road1.removeLast();
					}

					for (var i = 0; i < cars.length; i++) {
						var location = cars[i].getLocation();
						cars[i].setLocation(location.x + 1, location.y);
					}

					if(cars.first().getLocation().x == 6) {
						cars.insertAbove(addCar());
					}

					if(lastCarLocation.x == 20) {
						cars.removeLast();
						Game.score();
					}
				}
			}

			function blinkCrashedCars() {
				Game.blinkBrickObjects([cars.last(), myCar], 400, 3, Game.gameOver);
			}

			this.keydownfunctions = {
				onLeft: function() { 
					
				},
				onRight: function() { 
					
				},
				onTop: function() { 
					var y = myCar.getLocation().y;
					myCar.setLocation(16, y == 1 ? 1: y - 3)
				},
				onBottom: function() { 
					var y = myCar.getLocation().y;
					myCar.setLocation(16, y == 7 ? 7: y + 3);
				},
				onSpace: {
					action: function() {
						moveRoadAnim.setTimerInterval(50);
					},
					allowRepeat: false
				}
			}

			this.keyupfunctions = {
				onSpace: function() {
					moveRoadAnim.setTimerInterval(speedInMillis);
				},
			}

			loadRoadAndCars();

			var moveRoadAnim = new Timer(moveRoad, speedInMillis);
			moveRoadAnim.start();

			moveRoad();

			return this;
		}
	},
	];

	// BRICK GAME FUNCTIONS
	function BrickObject(tiles, color) {
		var X = undefined;
		var Y = undefined;

		var visible = true;

	    tiles = JSON.parse(JSON.stringify(ifUndefined(tiles, [])));

		this.bt = tiles;

		var _tileLocations = [];

		this.overlapIndex = 0;

		this.appearToggle = function() {
			visible = !visible;
			showHideTiles(visible);
		}
		this.show = function() {
			showHideTiles(true);
		}
		this.hide = function() {
			showHideTiles(false);
		}
		this.getLocation = function(corner) {
			var a = 0, b = 0;
			corner = ifUndefined(corner, "TopLeft");
			switch (corner) {
				case "TopLeft":
					a = X; b = Y;
					break;
				case "TopRight":
					//a = X; b = 
					break;
			}
			return { x: a, y: b };
		}
		this.setLocation = function(x, y, _tiles) {
			var tileX, tileY;

			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = X + tiles[t].x;
					tileY = Y + tiles[t].y;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var colorClass = getTileObject(tileX, tileY).classList[1];
						changeTileColor(tileX, tileY, tiles[t].backColor);
					}
					else {
						tiles[t].backColor = undefined;
					}
				}
			}

			if(_tiles != undefined) tiles = JSON.parse(JSON.stringify(_tiles));
			bt = tiles;

			for(var t = 0; t < tiles.length; t++) {
				tileX = x + tiles[t].x;
				tileY = y + tiles[t].y;
				if(color == undefined) { 
					color = tiles[t].foreColor; 
				}
				else {
					tiles[t].foreColor = color;
				}
				if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
					var colorClass = getTileObject(tileX, tileY).classList[1];
					tiles[t].backColor = colorClass.substr(5, colorClass.length - 10);
					changeTileColor(tileX, tileY, color);
				}
				else {
					tiles[t].backColor = undefined;
				}

				tiles[t].screenX = tileX;
				tiles[t].screenY = tileY;
 			}

			X = x; Y = y;
		}
		this.getTrimLocation = function(direction) {
			switch(direction) {
				case "TopLeft":
					break;
			}
		}
		this.remove = function() {
			var tileX, tileY;
			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = X + tiles[t].x;
					tileY = Y + tiles[t].y;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var colorClass = getTileObject(tileX, tileY).classList[1];
						changeTileColor(tileX, tileY, tiles[t].backColor);
					}
					else {
						tiles[t].backColor = undefined;
					}
				}
			}
		}	
		this.hasTile = function(x, y) {
			var tileX, tileY;
			var t = 0;
			var hasTile = false;
			if(X != undefined && Y != undefined) {
				hasTile = tiles.filter(function(t) { return t.screenX == x && t.screenY == y }).length > 0;
			}
			return hasTile;
		}

		this.addTile = function(left, top) {
			var tile = { x: left - X, y: top - Y, screenX: left, screenY: top };
			if(left >= 0 && left < 20 && top >= 0 && top < 10) {
				var colorClass = getTileObject(left, top).classList[1];
				tile.backColor = colorClass.substr(5, colorClass.length - 10);
				changeTileColor(left, top, color);
				tiles.push(tile);
			}
			else {
				tile.backColor = undefined;
			}
		}

		this.removeTile = function(left, top) {
			return _removeTile(left, top);
		}

		this.removeSideTile = function(side, position) {
			var lastPosition = 0;
			if (side == "right") {
				var tilesRow = tiles.filter(function(tile) { return tile.screenY == position });
				if (tilesRow != undefined && tilesRow.length > 0) lastPosition = tilesRow.last().screenX;
			}
			return _removeTile(lastPosition, position);
		}

		this.tileCount = function() {
			return tiles.length;
		}

		this.getSize = function() {
			var width = 0, height = 0;

			var x_smallest = 0, x_largest = 0;
			var y_smallest = 0, y_largest = 0;

			for (var i = 0; i < tiles.length; i++) {
				if(tiles[i].x <= x_smallest) x_smallest = tiles[i].x;
				if(tiles[i].x >= x_largest) x_largest = tiles[i].x;

				if(tiles[i].y <= y_smallest) y_smallest = tiles[i].y;
				if(tiles[i].y >= y_largest) y_largest = tiles[i].y ;
			}
			return { width: width, height: height };
		}
		this.blink = function(interval, count, endFunction) {
			var c = 0; count = (count * 2);
			var blinkTimeout = setInterval(function() {
				showHideTiles();
				c++;
				if(count != undefined && count == c) {
					clearInterval(blinkTimeout);
					if(endFunction != undefined) {
						endFunction();
					}
				}
			}, interval);
		}
		this.getEdgePosition = function(side) {
			switch(side) {
				case "Right":

					break;
				default:
					break;
			}
		}

		function showHideTiles(_visible) {
			var tileX = 0, tileY = 0;
			
			if(_visible != undefined) visible = _visible;

			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = tiles[t].screenX;
					tileY = tiles[t].screenY;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var colorClass = getTileObject(tileX, tileY).classList[1];
						changeTileColor(tileX, tileY, (visible ? tiles[t].foreColor: tiles[t].backColor));
					}
					else {
						tiles[t].backColor = undefined;
					}
				}
			}
		}

		function _removeTile(left, top) {

			var tileToBeRemoved = tiles.filter(function(t) { return t.screenX == left && t.screenY == top }).first();
			var isTileRemoved = tileToBeRemoved != undefined;
			var tileIndex = tiles.indexOf(tileToBeRemoved);

			if(isTileRemoved) {
				changeTileColor(left, top, tileToBeRemoved.backColor);
				tiles.splice(tileIndex, 1);
			}
			
			return isTileRemoved;
		}

		function getTileObject(x, y) {
			var xLetter = letterTiles[x].letter;
			var yLetter = letterTiles[y].letter;
			return document.getElementById("tileCell" + xLetter + yLetter);
		}
	}

	function Timer(_func, _interval) {
		var timeoutState = { running: 0, paused: 1, stopped: 2 }

		var timer;
		var tickDate = new Date();

		_interval = _interval == undefined ? 1000: _interval;

		var remainingMillis = _interval;

		this.timeoutState = timeoutState.stopped;

		var _timeoutState = this.timeoutState;

		this.start = function() {
			if(_timeoutState == timeoutState.running) return;

			this.timeoutState = timeoutState.running;
			
			_timeoutState = this.timeoutState;

			_timeoutFunction = function() {
				tickDate = new Date();
				if(_func.name == "_road") console.log("stopped but still running ");
				_func();
			}

			timer = setTimeout(function() { 
				_timeoutFunction(); 
				timer = setInterval(_timeoutFunction, _interval); 
			}, remainingMillis);

			console.log("timer started " + _func.name ); 
		};
		this.stop = function() {
			console.log("timer stopped")
			clearInterval(timer);
			this.timeoutState = timeoutState.stopped;
			_timeoutState = this.timeoutState;
			
		};
		this.pause = function() {
			this.timeoutState = timeoutState.paused;
			_timeoutState = this.timeoutState;
			remainingMillis = _interval - (new Date() - tickDate);
			clearTimeout(timer);
		};
		this.setTimerInterval = function(interval) {
			console.log("interval set");
			clearInterval(timer);
			if(_timeoutState == timeoutState.stopped) return;
			timer = setTimeout(function() { 
				_timeoutFunction(); 
				timer = setInterval(_timeoutFunction, _interval); 
			}, 0);
			_interval = interval;
		};
	};
})(window);


Array.prototype.insertAbove = function(value) {
	this.unshift(value);
	return this;
}
Array.prototype.insertBelow = function(value) {
	this.push(value);
	return this;
}
Array.prototype.insert = function(index, value) {
	this.splice(index, 0, value);
	return this;
}
Array.prototype.removeFirst = function() {
	this.shift();
}
Array.prototype.removeLast = function() {
	this.pop();
}
Array.prototype.first = function() {
	return this[0];
}
Array.prototype.last = function() {
	return this[this.length - 1];
}

String.prototype.ifNullOrEmpty = function(replaceValue) {
	var isNullOrEmpty = this == null || this == undefined;
	return isNullOrEmpty ? replaceValue: this;
}

function ifUndefined(object, replaceValue) {
	return object == undefined ? replaceValue: object;
}