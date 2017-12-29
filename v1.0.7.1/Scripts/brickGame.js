(function(_window_) {
	// GLOBAL VARIABLES
	var canvas = "white";
	var screenTiles = [], brickObjects = [], timers = [];
	var brickObjectTiles = 
	[
		{ 
			name: 'A', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 },
				{ x: 2, y: 0 }, { x: 2, y: 2 },
				{ x: 3, y: 0 }, { x: 3, y: 2 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },  
			], 
		},
		{ 
			name: 'B', 
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
			name: 'C', 
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
			name: 'D', 
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
			name: 'E', 
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
			name: 'F', 
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
			name: 'G', 
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
			name: 'H', 
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
			name: 'I', 
			tiles: [
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 5 },
			], 
			gameType: "snake",
			speedTimeout: [550, 500, 450, 400, 350, 300, 250, 200, 150, 100]
		},
		{ 
			name: 'J', 
			tiles: [
				{ x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 5 },
				{ x: 2, y: 5 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			],
			gameType: "obstacle" },
		{ 
			name: 'K', 
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
			name: 'L',
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
			name: 'M', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 1 },
				{ x: 2, y: 2 }, { x: 2, y: 3 },
				{ x: 3, y: 1 },
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			] 
		},
		{ 
			name: 'N', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 1 },
				{ x: 2, y: 2 }, 
				{ x: 3, y: 3 },
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			]
		},
		{ 
			name: 'O', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			]
		},
		{ 
			name: 'P', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 },
				{ x: 1, y: 0 }, { x: 1, y: 2 },
				{ x: 2, y: 0 }, { x: 2, y: 2 },
				{ x: 3, y: 0 }, { x: 3, y: 2 },
				{ x: 4, y: 1 }
			]
		},
		{ 
			name: 'Q', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 3 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 4 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			]
		},
		{ 
			name: 'R', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 },
				{ x: 2, y: 0 }, { x: 2, y: 2 },
				{ x: 3, y: 0 }, { x: 3, y: 2 },
				{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 4 }, { x: 4, y: 5 },
			] 
		},
		{ 
			name: 'S', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 5 },
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 },
				{ x: 4, y: 0 }, { x: 4, y: 3 }, { x: 4, y: 4 },
			]
		},
		{ 
			name: 'T', 
			tiles: [
				{ x: 0, y: 0 }, 
				{ x: 1, y: 0 }, 
				{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 },
				{ x: 3, y: 0 },
				{ x: 4, y: 0 },
			]
		},
		{ 
			name: 'U', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 5 },
				{ x: 2, y: 5 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			],
		},
		{ 
			name: 'V', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, 
				{ x: 1, y: 4 },
				{ x: 2, y: 5 },
				{ x: 3, y: 4 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }
			]
		},
		{ 
			name: 'W', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 },
				{ x: 1, y: 5 },
				{ x: 2, y: 3 }, { x: 2, y: 4 },
				{ x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			]
		},
		{ 
			name: 'X', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 1 }, { x: 1, y: 3 },
				{ x: 2, y: 2 },
				{ x: 3, y: 1 }, { x: 3, y: 3 }, 
				{ x: 4, y: 0 }, { x: 4, y: 4 }, { x: 4, y: 5 }
			]
		},
		{ 
			name: 'Y', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, 
				{ x: 1, y: 2 },
				{ x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, 
				{ x: 3, y: 2 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }
			]
		},
		{ 
			name: 'Z', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 4 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 3 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 5 }
			]
		},
		{ name: ' ' },

		// NUMBERS
		{ 
			name: '0', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 3 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 },
				{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 5 },
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			]
		},
		{ 
			name: '1', 
			tiles: [
				{ x: 1, y: 1 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, 
				{ x: 3, y: 5 },
			],
		},
		{ 
			name: '2', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 5 }, 
				{ x: 1, y: 0 }, { x: 1, y: 4 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 3 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 1 }, { x: 4, y: 5 }
			]
		},
		{ 
			name: '3', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 },
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 4 }
			]
		},
		{ 
			name: '4', 
			tiles: [
				{ x: 0, y: 3 }, 
				{ x: 1, y: 2 }, { x: 1, y: 3 },
				{ x: 2, y: 1 }, { x: 2, y: 3 },
				{ x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 3, y: 5 }, 
				{ x: 4, y: 3 },
			]
		},
		{ 
			name: '5', 
			tiles: [
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 }, 
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 0 }, { x: 4, y: 3 }, { x: 4, y: 4 }, 
			]
		},
		{ 
			name: '6', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 }, 
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 3 }, { x: 4, y: 4 }, 
			]
		},
		{ 
			name: '7', 
			tiles: [
				{ x: 0, y: 0 }, 
				{ x: 1, y: 0 }, 
				{ x: 2, y: 0 }, { x: 2, y: 3 }, { x: 2, y: 4 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, 
				{ x: 4, y: 0 }, { x: 4, y: 1 }, 
			]
		},
		{ 
			name: '8', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 3 }, { x: 0, y: 4 }, 
				{ x: 1, y: 0 }, { x: 1, y: 2 }, { x: 1, y: 5 },  
				{ x: 2, y: 0 }, { x: 2, y: 2 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 2 }, { x: 3, y: 5 }, 
				{ x: 4, y: 1 }, { x: 4, y: 3 }, { x: 4, y: 4 }, 
			]
		},
		{ 
			name: '9', 
			tiles: [
				{ x: 0, y: 1 }, { x: 0, y: 2 },   
				{ x: 1, y: 0 }, { x: 1, y: 3 }, { x: 1, y: 5 },  
				{ x: 2, y: 0 }, { x: 2, y: 3 }, { x: 2, y: 5 }, 
				{ x: 3, y: 0 }, { x: 3, y: 3 }, { x: 3, y: 5 }, 
				{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }, { x: 4, y: 4 }, 
			]
		},
		{
			name: "tankTile",
			tiles: [
				{ x: 2, y: 1 },
				{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, 
				{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, 
			]
		},
		{
			name: "enemyTankTile",
			tiles: [
				{ x: 2, y: 1 },
				{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, 
				{ x: 0, y: 0 }, { x: 0, y: 2 }, 
			]
		},
		{ name: "singleTile", tiles: [ { x: 0, y: 0 } ] },
		{ name: "doubleTile", tiles: [ { x: 0, y: 0 }, { x: 0, y: 1 } ]},
		{ name: "tripleTiles", tiles: [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 } ] },
		{ name: "squareTile1", tiles: [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 } ] },
		{ name: "rightTile1", tiles: [ {x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1} ] },
		{ name: "quadrupleTiles", tiles: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 } ] },
		{
			name: "tTile1",
			tiles: function() {
				var tiles = [];
				for (var i = 0; i < 8; i++) {
					tiles.push({ x: 0, y: i });
				}
				for (var i = 1; i < 6; i++) {
					tiles.push({ x: i, y: 4 });
				}
				return tiles;
			}()
		},
		{
			name: "tTile2",
			tiles: function() {
				var tiles = [];
				tiles.push({ x: 2, y: 1 });
				tiles.push({ x: 2, y: 2 });
				for (var i = 0; i < 5; i++) {
					tiles.push({ x: i, y: 0 });
				}
				return tiles;
			}()
		},
		{
			name: "carTile",
			tiles: [ { x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 0 }, { x: 3, y: 2 } ],
		},
		{ name: "soldierTile", tiles: [{ x: 0, y: 1 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }] },
		{
			name: "pinballTileLevel1",
			tiles: [
				{ x: 0, y: 2 }, { x: 0, y: 3 }, { x: 0, y: 7 }, { x: 0, y: 8 },
				{ x: 1, y: 1 }, { x: 1, y: 4 }, { x: 1, y: 6 }, { x: 1, y: 9 },
				{ x: 2, y: 1 }, { x: 2, y: 5 }, { x: 2, y: 9 },
				{ x: 3, y: 2 }, { x: 3, y: 8 },
				{ x: 4, y: 3 }, { x: 4, y: 7 },
				{ x: 5, y: 4 }, { x: 5, y: 6 },
				{ x: 6, y: 5 },  
			]
		},
		{
			name: "pinballTileLevel2",
			tiles: (function() {
				var tiles = [];
				for(var y = 0; y < 10; y++) { tiles.push({ x: 2, y: y }); tiles.push({ x: 3, y: y }); }
				for(var y = 0; y < 3; y++) {
					tiles.push({ x: 1, y: y }); tiles.push({ x: 4, y: y }); tiles.push({ x: 1, y: 9 - y }); tiles.push({ x: 4, y: 9 - y });
				}
				for(var y = 1; y < 3; y++) {
					tiles.push({ x: 0, y: y }); tiles.push({ x: 5, y: y }); tiles.push({ x: 0, y: 9 - y }); tiles.push({ x: 5, y: 9 - y });
				}
				return tiles;
			})()
		},
		{
			name: "pinballTileLevel3",
			tiles: (function() {
				var tiles = [];
				for (var x = 0; x < 7; x++) { var i = -(Math.abs(3 - x) - 3); for (var y = i; y < 10 - i; y++) tiles.push({ x: x, y: y }); }
				return tiles;
			})()
		},
		{
			name: "pinballTileLevel4",
			tiles: (function() {
				var tiles = [];
				for (var x = 0; x < 7; x++) { var i = Math.abs(3 - x); for (var y = i; y < 10 - i; y++) tiles.push({ x: x, y: y }); }
				return tiles;
			})()
		},
		{
			name: "pinballTileLevel5",
			tiles: (function(){
				var tiles = []; for (var x = 0; x < 7; x++) { var i = x % 2; for (var y = i; y < 10; y+=2) tiles.push({ x: x, y: y }); } return tiles;
			})()
		},
		{
			name: "pinballTileLevel6",
			tiles: (function(){
				var tiles = [];
				for (var x = 0; x < 3; x+=2) { for (var y = x; y < 10 - x; y++) { tiles.push({ x: x, y: y }); tiles.push({ x: 7 - x, y: y }); } }
				for(var y = 0; y < 3; y+=2) { for (var x = y + 1; x < 7 - y; x++) { tiles.push({ x: x, y: y }); tiles.push({ x: x, y: 9 - y }); } }
				return tiles;
			})()
		},
		{
			name: "pinballTileLevel7",
			tiles: (function(){
				var tiles = [];
				for (var x = 1; x < 7; x++) { tiles.push({ x: x, y: 0 }); tiles.push({ x: x, y: 9 }); }
				for (var y = 1; y < 9; y++) { tiles.push({ x: 0, y: y }); tiles.push({ x: 6, y: y }); }
				for (var x = 0; x < 7; x++) {
					var i = -(Math.abs(3 - x) - 3);
					tiles.push({ x: x, y: i }); tiles.push({ x: x, y: 9 - i });
				}
				return tiles;
			})()
		},
		{
			name: "pinballTileLevel8",
			tiles: (function(){
				var tiles = [];
				for (var x = 2; x < 5; x++) { for (var y = 0; y < 10; y++) tiles.push({ x: x, y: y }); }
				for (var x = 0; x < 2; x++) { for (var y = 3; y < 7; y++) { tiles.push({ x: x, y: y }); tiles.push({ x: 5 + x, y: y }); } }
				return tiles;
			})()
		},
		{
			name: "pinballTileLevel10",
			tiles: (function(){
				var tiles = []; for (var x = 0; x < 7; x++) { for (var y = 0; y < 10; y++) tiles.push({ x: x, y: y }); } return tiles;
			})()
		},
		{ name: "verticalLine", tiles: (function() { var tiles = []; for (var j = 0; j < 10; j++) tiles.push({ x: 0, y: j }); return tiles; })() },
		{ name: "twentyByOne", tiles: function() { var tiles = []; for(var i = 0; i < 20; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{ name: "fourteenByOne", tiles: function() { var tiles = []; for(var i = 0; i < 14; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{ name: "twelveByOne", tiles: function() { var tiles = []; for(var i = 0; i < 12; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{ name: "tenByOne", tiles: function() { var tiles = []; for(var i = 0; i < 10; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{ name: "eightByOne", tiles: function() { var tiles = []; for(var i = 0; i < 8; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{ name: "fourByOne", tiles: function() { var tiles = []; for(var i = 0; i < 4; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{ name: "fiveByOne", tiles: function() { var tiles = []; for(var i = 0; i < 5; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{
			name: "rightTile2",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 8; i++) tiles.push({ x: i, y: 3 }); for(var i = 0; i < 3; i++) tiles.push({ x: 0, y: i }); 
				return tiles; 
			}()
		},
		{
			name: "crossTile1",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 20; i++) { tiles.push({ x: i, y: 4 }); tiles.push({ x: i, y: 5 }); } 
				for(var i = 0; i < 4; i++) { 
					tiles.push({ x: 9, y: i }); tiles.push({ x: 9, y: i + 6 }); tiles.push({ x: 10, y: i }); tiles.push({ x: 10, y: i + 6 }); 
				} 	
				return tiles; 
			}()
		},
		{ name: "threeByOne", tiles: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }] },
		{ name: "threeByTwo", tiles: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }], },
		{ name: "fourByTwo", tiles: function() { 
			var tiles = []; 
			for(var i = 0; i < 4; i++) {
				tiles.push({ x: i, y: 0 }); 
				tiles.push({ x: i, y: 1 }); 
			}
			return tiles; 
		}() 
		},
		{ name: "sixByOne", tiles: function() { var tiles = []; for(var i = 0; i < 6; i++) tiles.push({ x: i, y: 0 }); return tiles; }() },
		{
			name: "eightByTwo",
			tiles: function() { var tiles = []; for(var i = 0; i < 4; i++) { tiles.push({ x: i, y: 0 }); tiles.push({ x: i, y: 1 }); } return tiles; }()
		},
		{
			name: "cTile1",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) { tiles.push({ x: i, y: 0 }); tiles.push({ x: i, y: 5 }); tiles.push({ x: 0, y: i + 1 }) } 
				return tiles; 
			}()
		},
		{
			name: "pinballTile2Level1",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 3; i++) { 
					for (var j = 0; j < 3 - i; j++) {
						tiles.push({ x: j, y: i });
						tiles.push({ x: j, y: 9 - i });
					}
				} 
				for(var i = 0; i < 3; i++) { 
					for (var j = 0; j < i + 1; j++) {
						tiles.push({ x: j, y: i + 7 });
					}
				} 
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level2",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 3; i++) { 
					for (var j = 0; j < 4 - i; j++) {
						tiles.push({ x: j, y: i });
					}
				} 
				for(var i = 0; i < 3; i++) { 
					for (var j = 0; j < i + 2; j++) {
						tiles.push({ x: j, y: i + 7 });
					}
				} 
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level3",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) { 
					tiles.push({ x: i, y: 0 });
					tiles.push({ x: i, y: 1 });
					tiles.push({ x: i, y: 8 });
					tiles.push({ x: i, y: 9 });
				} 
				tiles.push({ x: 0, y: 2 });
				tiles.push({ x: 0, y: 7 });
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level4",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) { 
					tiles.push({ x: i, y: 0 });
					tiles.push({ x: i, y: 1 });
					tiles.push({ x: i, y: 8 });
					tiles.push({ x: i, y: 9 });
				} 
				tiles.push({ x: 0, y: 2 });
				tiles.push({ x: 0, y: 7 });
				tiles.push({ x: 1, y: 2 });
				tiles.push({ x: 1, y: 7 });
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level5",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) {
					for (var j = 0; j < 3; j++) {
						tiles.push({ x: i, y: j });
						tiles.push({ x: i, y: 9 - j });
					}
				} 
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level6",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) { 
					tiles.push({ x: 0, y: i });
					tiles.push({ x: 0, y: i + 6 });
				} 
				for(var i = 0; i < 3; i++) {
					tiles.push({ x: 1, y: i });
					tiles.push({ x: 1, y: i + 7 });
					tiles.push({ x: 2, y: i });
					tiles.push({ x: 2, y: i + 7 });
				}
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level7",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 3; i++) { 
					for(var j = 0; j < 4 - i; j++) {
						tiles.push({ x: i, y: j });
						tiles.push({ x: i, y: 9 - j });
					}
				}
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level8",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 3; i++) { 
					for(var j = 0; j < 4 - i; j++) {
						tiles.push({ x: i, y: j });
						tiles.push({ x: i, y: 9 - j });
					}
				}
				tiles.push({ x: 3, y: 0 });
				tiles.push({ x: 3, y: 1 });
				tiles.push({ x: 3, y: 8 });
				tiles.push({ x: 3, y: 9 });
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level9",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) { 
					for(var j = 0; j < 3; j++) {
						tiles.push({ x: i, y: j });
						tiles.push({ x: i, y: 9 - j });
					}
				}
				tiles.push({ x: 0, y: 3 });
				tiles.push({ x: 0, y: 6 });
				tiles.push({ x: 1, y: 3 });
				tiles.push({ x: 1, y: 6 });
				return tiles;
			}()
		},
		{
			name: "pinballTile2Level10",
			tiles: function() { 
				var tiles = []; 
				for(var i = 0; i < 4; i++) { 
					for(var j = 0; j < 4; j++) {
						tiles.push({ x: i, y: j });
						tiles.push({ x: i, y: 9 - j });
					}
				}
				return tiles;
			}()
		},
	];

	// STATIC CLASSES
	var GameKeys = new function() {
		// DECLARATIONS
		var keyfunctions = {};
		var availableKeys = {
			enter: "enter", space: " ", up: "arrowup", down: "arrowdown", left: "arrowleft", right: "arrowright", s: "s", default: "default"
		};
		var availableKeyNames = Object.keys(availableKeys);

		// PRIVATE FUNCTIONS
		function clearKeyDown() {
			for (var k = 0; k < availableKeyNames.length; k++) {
				keyfunctions[availableKeyNames[k]].onkeydown = {
					func: function() {}, allowRepeat: true, enabled: true, test: availableKeyNames[k] + " key down"
				}
			}
		}
		function clearKeyUp() {
			for (var k = 0; k < availableKeyNames.length; k++) {
				keyfunctions[availableKeyNames[k]].onkeyup = { func: function() {}, test: availableKeyNames[k] + " key up" }
			}
		}

		// PROPERTIES AND METHODS
		for (var k = 0; k < availableKeyNames.length; k++) {
			keyfunctions[availableKeyNames[k]] = {
				altName: availableKeys[availableKeyNames[k]],
				onkeydown: { test: availableKeyNames[k] + " key down", allowRepeat: true, enabled: true, func: function() {} },
				onkeyup: { test: availableKeyNames[k] + " key up", func: function() {} },
				onkeypress: {},
			};
			this[availableKeyNames[k]] = {
				onkeydown: {
					func: (function() {
						var availableKeyName = availableKeyNames[k];
						return function(func) {
							console.log(availableKeyName);
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
					clear: (function() {
						var availableKeyName = availableKeyNames[k];
						return function() {
							keyfunctions[availableKeyName].onkeydown.func = function() {};
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
					clear: (function() {
						var availableKeyName = availableKeyNames[k];
						return function() {
							keyfunctions[availableKeyName].onkeyup.func = function() {};
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
			clear: function() { clearKeyDown(); clearKeyUp(); }
		};
		this.onkeydown = function(event) {
			var altName = event.key.toLowerCase();
			var availableKey = Object.keys(availableKeys).filter(function(ak) { return availableKeys[ak] == altName }).first();
			if (availableKey == undefined) availableKey = "default";
			var keydownfunction = keyfunctions[availableKey].onkeydown;
			if((keydownfunction.allowRepeat || !event.repeat) && keydownfunction.enabled) { keydownfunction.func(); }
		};
		this.onkeyup = function(event) {
			var altName = event.key.toLowerCase();
			var availableKey = Object.keys(availableKeys).filter(function(ak) { return availableKeys[ak] == altName }).first();
			if (availableKey == undefined) availableKey = "default";
			var keyupfunction = keyfunctions[availableKey].onkeyup;
			keyupfunction.func();
		};
		this.getObject = function() { console.log(keyfunctions); };
	};
	var GameSound = new function() {
		// DECLARATIONS
		var currentVolume = 1;
		var selectedAudio;
		var audios = [
			new Audio("Sounds/opening.wav"),
			new Audio("Sounds/startgame.wav"),
			new Audio("Sounds/move.wav"),
			new Audio("Sounds/gameover.wav"),
			new Audio("Sounds/hit.wav"),
			new Audio("Sounds/move2.wav"),
			new Audio("Sounds/fire.wav"),
			new Audio("Sounds/levelUp.wav"),
			new Audio("Sounds/score.wav"),
			new Audio("Sounds/carsound1.wav"),
			new Audio("Sounds/fire2.wav"),
			new Audio("Sounds/select.wav")
		];

		// PRIVATE FUNCTIONS
		function play(index, loop, endFunction) {
			if(selectedAudio != undefined && selectedAudio.currentTime > 0 && !selectedAudio.paused && !selectedAudio.ended && selectedAudio.readyState > 2) {
				selectedAudio.pause(); selectedAudio.currentTime = 0;
			}
			selectedAudio = audios[index];
			selectedAudio.volume = currentVolume;
			if (loop != undefined) selectedAudio.loop = loop;
			selectedAudio.onended = endFunction;
			selectedAudio.play();
		}

		// METHODS
		this.opening = function() { play(0) };
		this.startGame = function() { play(1); };
		this.move = function() { play(2); };
		this.gameOver = function() { play(3); };
		this.explosion = function() { play(4); };
		this.move2 = function() { play(5); };
		this.fire = function() { play(6); };
		this.levelUp = function(endFunction) { play(7, undefined, endFunction); };
		this.score = function() { play(8); };
		this.carSound1 = function(loop) { play(9, loop) };
		this.fire2 = function() { play(10); };
		this.pause = function() { if (audio == undefined) throw new Error("Error: undefined"); };
		this.stop = function() { if (audio == undefined) throw new Error("Error: undefined"); };
		this.select = function() { play(11); };
		this.getAudio = function() { return selectedAudio; }
		this.getVolume = function() { return currentVolume };
		this.setVolume = function(_volume) {
			currentVolume = _volume;
			if (selectedAudio != undefined) selectedAudio.volume = _volume;
		}
	};
	var BrickGameModel = new function() {
		// DECLARATIONS
		var level = 1, speed = 1, mode = 1, score = 0, gameNumber = 0, lives = 0, speedInMillis = 1000;
		var brickTiles = [], selectedGame = {};
		var isPaused = false;

		// METHODS
		this.getLevel = function() { return level; };
		this.setLevel = function(_level) { level = _level; levelNumber.innerText = level; }
		this.getSpeed = function() { return speed; }
		this.setSpeed = function(_speed) { speed = _speed; speedNumber.innerText = speed; }
		this.getGameNumber = function() { return gameNumber; }
		this.setGameNumber = function(_gameNumber) { gameNumber = _gameNumber; }
		this.getScore = function() { return score; }
		this.setScore = function(_score) { score = _score; scoreNumber.innerText = score; }
		this.getSpeedInMillis = function() { return speedInMillis; }
		this.setSpeedInMillis = function(_speedInMillis) { speedInMillis = _speedInMillis }
		this.getSelectedGame = function() { return selectedGame; }
		this.setSelectedGame = function(_selectedGame) { selectedGame = _selectedGame; }
		this.changeSoundVolume = function() {
			var volume = GameSound.getVolume();
			volume = volume == 0 ? 1: volume - 0.25;
			if(volume == 1 || volume == 0.75) {
				soundIcon.classList.remove("fa-volume-off", "fa-volume-down");
				soundIcon.classList.add("fa-volume-up");
			}
			else if(volume == 0.5 || volume == 0.25) {
				soundIcon.classList.remove("fa-volume-off", "fa-volume-up");
				soundIcon.classList.add("fa-volume-down");
			}
			else {
				soundIcon.classList.remove("fa-volume-up", "fa-volume-down");
				soundIcon.classList.add("fa-volume-off");
			}
			GameSound.setVolume(volume);
		}
		this.togglePause = function() { isPaused = !isPaused; if (isPaused) pauseIcon.classList.remove("deact"); else pauseIcon.classList.add("deact"); }
	};
	var LifeBrickObject = new function() {
		// DECLARATIONS
		var timer;
		var tiles = [], lifeTiles = [];
		var isBlinking = false;
		
		// PRIVATE FUNCTIONS
		function fill(color) { for (var i = 0; i < 4; i++) for (var j = 0; j < 4; j++) changeLifeTileColor(i, j, color); }
		function show(x, y, name) {
			tiles = JSON.parse(JSON.stringify(getBrickTiles(name)));
			fill("white");
			for (var i = 0; i < tiles.length; i++) {
				tiles[i].screenX = tiles[i].x + x; tiles[i].screenY = tiles[i].y;
				changeLifeTileColor(tiles[i].screenX, tiles[i].screenY, "black");
			}
		}

		// METHODS
		this.clear = function() { fill("white"); }
		this.quadrupleTiles = function() { clearInterval(timer); show(0, 0, "quadrupleTiles"); }
		this.removeTile = function(x, y) {
			var tile = tiles.filter(function(t) { return t.screenX == x && t.screenY == y; }).first();
			if (tile != undefined) {
				changeLifeTileColor(tile.screenX, tile.screenY, "white");
				tiles.splice(tiles.indexOf(tile), 1);
			}
		}
		this.blink = function() {
			var show = false;
			timer = setInterval(function() { fill(show ? "black": "white"); show = !show; }, 200);
		}
		this.stop = function() { }
	};
	var Game = new function() {
		// DECLARATIONS
		var $game;
		var life = 4;
		var isGameStarted = true, isDead = false;
		var upkeydown = GameKeys.up.onkeydown;
		var downkeydown = GameKeys.down.onkeydown;
		var leftkeydown = GameKeys.left.onkeydown;
		var rightkeydown = GameKeys.right.onkeydown;
		var spacekeydown = GameKeys.space.onkeydown;
		var enterkeydown = GameKeys.enter.onkeydown;
		var defaultkeydown = GameKeys.default.onkeydown;
		var upkeyup = GameKeys.up.onkeyup;
		var downkeyup = GameKeys.down.onkeyup;
		var leftkeyup = GameKeys.left.onkeyup;
		var rightkeyup = GameKeys.right.onkeyup;
		var spacekeyup = GameKeys.space.onkeyup;
		var enterkeyup = GameKeys.enter.onkeyup;
		var defaultkeyup = GameKeys.default.onkeyup;

		// PRIVATE FUNCTIONS (REFACTORED)
		function _load($game) {
			clearBrickObjects(); clearTimers();
			setCanvasColor("white");
			
			var game = new selectedGame.load();
			var keydownfunctions = game.keydownfunctions;

			isDead = false;

			if(keydownfunctions.onTop.action == undefined) keydownfunctions.onTop.action = keydownfunctions.onTop;
			if(keydownfunctions.onBottom.action == undefined) keydownfunctions.onBottom.action = keydownfunctions.onBottom;
			if(keydownfunctions.onLeft.action == undefined) keydownfunctions.onLeft.action = keydownfunctions.onLeft;
			if(keydownfunctions.onRight.action == undefined) keydownfunctions.onRight.action = keydownfunctions.onRight;
			if(keydownfunctions.onSpace.action == undefined) keydownfunctions.onSpace.action = keydownfunctions.onSpace;
			if(keydownfunctions.onTop.allowRepeat == undefined) keydownfunctions.onTop.allowRepeat = true;
			if(keydownfunctions.onBottom.allowRepeat == undefined) keydownfunctions.onBottom.allowRepeat = true;
			if(keydownfunctions.onLeft.allowRepeat == undefined) keydownfunctions.onLeft.allowRepeat = true;
			if(keydownfunctions.onRight.allowRepeat == undefined) keydownfunctions.onRight.allowRepeat = true;
			if(keydownfunctions.onSpace.allowRepeat == undefined) keydownfunctions.onSpace.allowRepeat = true;

			console.log("initializing keys");
			upkeydown.func(keydownfunctions.onTop.action);
			upkeydown.allowRepeat(keydownfunctions.onTop.allowRepeat);
			downkeydown.func(keydownfunctions.onBottom.action);
			downkeydown.allowRepeat(keydownfunctions.onBottom.allowRepeat);
			leftkeydown.func(keydownfunctions.onLeft.action);
			leftkeydown.allowRepeat(keydownfunctions.onLeft.allowRepeat);
			rightkeydown.func(keydownfunctions.onRight.action);
			rightkeydown.allowRepeat(keydownfunctions.onRight.allowRepeat);
			spacekeydown.func(keydownfunctions.onSpace.action);
			spacekeydown.allowRepeat(keydownfunctions.onSpace.allowRepeat);
			enterkeydown.func(function() {
				console.log("Dead: " + isDead)
				if (!isDead) {
					console.log("Game started: " + isGameStarted)
					lockKey(isGameStarted);
					if(isGameStarted) pause(); else resume();
					isGameStarted = !isGameStarted;
				}
			});
			enterkeydown.allowRepeat(false);
			defaultkeydown.clear();
			spacekeyup.func(game.keyupfunctions.onSpace);
			upkeyup.func(game.keyupfunctions.onTop);
			downkeyup.func(game.keyupfunctions.onBottom);
			leftkeyup.func(game.keyupfunctions.onLeft);
			rightkeyup.func(game.keyupfunctions.onRight);
			lockKey(false);
		}
		function lockKey(locked) {
			upkeydown.setEnabled(!locked); downkeydown.setEnabled(!locked); leftkeydown.setEnabled(!locked); 
			rightkeydown.setEnabled(!locked); spacekeydown.setEnabled(!locked);
		}
		function gameOver() {
			LifeBrickObject.blink(); GameSound.gameOver();
			new Marquee({ word: "GAME OVER", onUnload: function() { GameProperties() } });
		}
		function transition(again) {
			var type = Math.floor(Math.random() * 100) % 5, increment = -1, transitionInterval = 0;
			var isOpen = false;
			var transitionFunction = function() {};

			lockKey(true);

			switch(type) {
				case 0:
					var x = 19;
					transitionFunction = function() {
						if (x > 19 && isOpen) {
							clearInterval(transitionInterval);
							setTimeout(function() { lockKey(false); again(); }, 30);
							return;
						}
						for (var y = 0; y < 10; y++) changeTileColor(x, y, isOpen ? "white": "black");
						if (x == 0 && !isOpen) { isOpen = true; increment = -increment; }
						else x = x + increment; 
					}
					transitionInterval = setInterval(transitionFunction, 10);
					break;
				case 1:
					var counter = 0;
					var newTiles = [];
					var tempTiles = JSON.parse(JSON.stringify(screenTiles));
					transitionFunction = function() {
						for (var i = 0; i < 10; i++) {
							var index = Math.floor(Math.random() * 100) % tempTiles.length;
							changeTileColor(tempTiles[index].x, tempTiles[index].y, isOpen ? "white": "black");
							newTiles.push(tempTiles[index]);
							tempTiles.splice(index, 1);
						}
						if (tempTiles.length == 0) {
							if (isOpen) { clearInterval(transitionInterval); setTimeout(function() { lockKey(false); again(); }, 30); }
							else { isOpen = true; tempTiles = newTiles; newTiles = []; }
						}
					}
					transitionInterval = setInterval(transitionFunction, 10);
					break;
				case 2:
					var y = 0;
					transitionFunction = function() {
						for (var x = 0; x < 20; x++) changeTileColor(x, x % 2 == 0 ? y: 9 - y, isOpen ? "white": "black"); y++;
						if (y > 9) {
							if (isOpen) { clearInterval(transitionInterval); setTimeout(function() { lockKey(false); again(); }, 30); }
							else { isOpen = true; y = 0; }
						}
					}
					transitionInterval = setInterval(transitionFunction, 20);
					break;
				case 3:
					var x = 0;
					transitionFunction = function() {
						for (var y = 0; y < 10; y++) {
							changeTileColor(x, y, isOpen ? "white": "black"); changeTileColor(19 - x, y, isOpen ? "white": "black");
						}
						if (x == 0 && isOpen) { clearInterval(transitionInterval); setTimeout(function() { lockKey(false); again(); }, 30); }
						else if (x == 9 && !isOpen) { isOpen = true; increment = -increment; }
						else x = x - increment;
					}
					transitionInterval = setInterval(transitionFunction, 20);
					break;
				case 4:
					var counter = 0;
					transitionFunction = function() {
						for (var x = counter; x < 20 - counter; x++) {
							changeTileColor(x, counter, isOpen ? "white": "black"); changeTileColor(x, 9 - counter, isOpen ? "white": "black");
						}
						for (var y = counter + 1; y < 9 - counter; y++) {
							changeTileColor(counter, y, isOpen ? "white": "black"); changeTileColor(19 - counter, y, isOpen ? "white": "black");
						}
						if (counter == 0 && isOpen) { clearInterval(transitionInterval); setTimeout(function() { lockKey(false); again(); }, 30); }
						else if (counter == 5 && !isOpen) { isOpen = true; increment = -increment; }
						else counter = counter - increment;
					}
					transitionInterval = setInterval(transitionFunction, 40);
					break;
			}	
		}
		
		// METHODS (REFACTORED)
		this.getBrickObjects = function(name) {
			var objs = selectedGame.brickObjects;
			if(name == undefined) name = "";
			if(name != "") objs = objs.filter(function(obj) { return obj.getName() == name });
			return objs;
		};
		this.load = function() {
			life = 4;
			LifeBrickObject.quadrupleTiles();
			selectedGame = BrickGameModel.getSelectedGame();
			BrickGameModel.setScore(0);
			BrickGameModel.setSpeedInMillis(selectedGame.speedTimeout[BrickGameModel.getSpeed() - 1]);
			_load(this);
		};
		this.pause = function() { lockKey(true); pause(); };
		this.resume = function() { lockKey(false); resume(); };
		this.lockKey = function(isKeyLocked) { lockKey(isKeyLocked); };
		this.score = function() {
			var _score = BrickGameModel.getScore() + 1;
			BrickGameModel.setScore(_score);
			if(selectedGame.score < _score) selectedGame.score++;
		};
		this.levelUp = function() {
			var level = BrickGameModel.getLevel() + 1;
			var brickGameMarquee = new Marquee({ word: "LEVEL UP", isKeyLocked: true, onUnload: function() { _load() } });
			BrickGameModel.setLevel(level > 10 ? 1: level);
			GameSound.levelUp(brickGameMarquee.end);
		};
		this.blinkBrickObjects = function(params) {
			var brickObjects = params.brickObjects
			var count = params.count * 2, c = 0, interval = params.interval == undefined ? 1000: params.interval;
			var isKeyLocked = params.isKeyLocked == undefined ? true: params.isKeyLocked;
			var endFunction = params.endFunction == undefined ? function() { console.log("no function") }: params.endFunction;
			var blinkTimeout = setInterval(function(){
				for(var a = 0; a < brickObjects.length; a++) brickObjects[a].toggleAppear(); c++;
				if(count == c && count != undefined) { clearTimeout(blinkTimeout); lockKey(false); endFunction(); }
			}, interval == undefined ? 1000: interval);
			isDead = true;
			lockKey(isKeyLocked);
		};	
		this.gameOver = function() { gameOver(); };
		this.lifeLost = function(again) {
			LifeBrickObject.removeTile(0, 4 - life); life--;
			if (life == 0) gameOver();
			else { transition(again); isDead = false; }
		};
	};

	// CLASSES
	function Marquee(params) {
		// DECLARATIONS
		var t = 20;
		var marquee = {};
		var chars = [], brickCharacters = [];

		// PRIVATE FUNCTIONS
		function exitFunction() { 
			marquee.stop(); clearBrickObjects(); clearTimers(); setCanvasColor("white");
			if (params.onUnload != undefined) { GameKeys.all.onkeydown.setEnabled(true); params.onUnload(); }
		};

		// METHODS
		this.end = exitFunction;

		// INITIALIZATIONS
		if (params.word == undefined || params.word == null) params.word = "";
		chars = params.word.split("");
		clearBrickObjects(); clearTimers(); setCanvasColor(params.backColor == undefined ? "black": params.backColor);
		for (var i = 0; i < chars.length; i++) {
			var char = chars[i];
			var brickObjectTile = brickObjectTiles.filter(function(bt) { return bt.name == char }).first();
			var brickTiles = brickObjectTile.tiles;
			if(brickObjectTile.name != " ") {
				var lt = new BrickObject({ tiles: brickTiles, color: params.foreColor == undefined ? "white": params.foreColor });
				lt.setLocation(20 + (i * 6), 2);
				brickCharacters.push(lt);
			}
		}
		marquee = new Timer({ 
			func: function() {
				for(var i = 0; i < brickCharacters.length; i++) {
					var loc = brickCharacters[i].getLocation(); loc.x--;
					if(loc.x < -(params.word.length * 6)) loc.x = 20;
					brickCharacters[i].setLocation(loc.x, loc.y);
				}
			}, 
			interval: params.speedInMillis == undefined ? 50: params.speedInMillis
		});
		marquee.start();
		GameKeys.all.onkeydown.func(exitFunction);
		GameKeys.all.onkeydown.setEnabled(!(params.isKeyLocked == undefined ? false: params.isKeyLocked));
		GameKeys.all.onkeydown.allowRepeat(true);
		GameKeys.all.onkeyup.clear();
	}
	function Timer(params) {
		// DECLARATIONS
		var timer;
		var _interval = params.interval == undefined ? 1000: params.interval;
		var tickDate = new Date();
		var timeoutState = { running: 0, paused: 1, stopped: 2 }
		var _timeoutFunction = function() {}, _func = params.func == undefined ? function() {}: params.func;
		var remainingMillis = _interval;
		var _timeoutState = timeoutState.stopped;

		// METHODS
		this.start = function() {
			if(_timeoutState != timeoutState.running) {
				_timeoutState = timeoutState.running;
				console.log(_interval);
				_timeoutFunction = function() { tickDate = new Date(); _func(); }
				timer = setTimeout(function() { timer = setInterval(_timeoutFunction, _interval); _timeoutFunction(); }, remainingMillis);
			}
		};
		this.stop = function() { clearInterval(timer); _timeoutState = timeoutState.stopped; };
		this.pause = function() {
			_timeoutState = timeoutState.paused;
			remainingMillis = _interval - (new Date() - tickDate);
			clearTimeout(timer);
		};
		this.setTimerInterval = function(interval) {
			_interval = interval;
			if(_timeoutState != timeoutState.stopped) {
				clearInterval(timer);
				if (_timeoutState == timeoutState.running) timer = setInterval(_timeoutFunction, _interval); 
			}
			else remainingMillis = interval;
		};
		this.isRunning = function() { return _timeoutState == timeoutState.running; }
		this.isPaused = function() { return _timeoutState == timeoutState.paused; }
		this.setFunction = function(func) { _func = func; }
		this.isStopped = function() { return _timeoutState == timeoutState.stopped; }
		this.dispose = function() { 
			if (_timeoutState == timeoutState.running) throw new Error("Cannot dispose while timer is running");
			timers.splice(timers.indexOf(this), 1); 
		};

		// INITIALIZATIONS
		timers.push(this);
	}
	function BrickObject(params) {
		params = params = undefined ? {}: params;
		var tiles = params.tiles;
		var color = params.color == undefined ? "black": params.color;
		var brickDirection = params.brickDirection == undefined ? "Right": params.brickDirection;
		var rotateDirection = params.rotateDirection == undefined ? brickDirection: params.rotateDirection;
		var flipDirection = params.flipDirection == undefined ? "None": params.flipDirection;
		var origin = params.origin == undefined ? {}: params.origin;
		var brickLocation = params.brickLocation;
		var brickTileName = params.name;
		var visible = params.visible == undefined ? true: params.visible;
		var originX = origin.x == undefined ? 0: origin.x, originY = origin.y == undefined ? 0: origin.y;
		var originalOrigin = { x: originX, y: originY };
		var X, Y, testX, testY;
		var _tileLocations = [];

		var thisObject = this;
		var isOverlapped = false;

		// EVENTS
		tiles = JSON.parse(JSON.stringify(tiles == undefined ? []: tiles));
		if (tiles.length > 0) _rotate();

		var onRemove = params.onRemove == undefined ? function() {}: params.onRemove;

		if (brickLocation != undefined) _setLocation(brickLocation.x, brickLocation.y);

		this.bt = tiles;
		this.overlapIndex = 0;
		
		// this.rotate = function(direction) {
		// 	rotateDirection = direction;
		// 	_rotate();
		// 	_setLocation(X, Y);
		// 	brickDirection = direction;
		// }
		// this.tryRotate = function(direction) {

		// 	var rotation = undefined;

		// 	var tileX = 0, tileY = 0, _tw = 0, _th = 0, x = 0, y = 0;

		// 	var brickSize = _getSize();

		// 	if (
		// 		(direction == "Right" && brickDirection == "Left") ||
		// 		(direction == "Left" && brickDirection == "Right") ||
		// 		(direction == "Up" && brickDirection == "Down") ||
		// 		(direction == "Down" && brickDirection == "Up")
		// 	) {
		// 		rotation = "rotate180";
		// 	}
		// 	else if (
		// 		(direction == "Right" && brickDirection == "Up") ||
		// 		(direction == "Up" && brickDirection == "Left") ||
		// 		(direction == "Left" && brickDirection == "Down") ||
		// 		(direction == "Down" && brickDirection == "Right") 
		// 	) {
		// 		rotation = "clockwise";
		// 	}
		// 	else if (
		// 		(direction == "Right" && brickDirection == "Down") ||
		// 		(direction == "Down" && brickDirection == "Left") ||
		// 		(direction == "Left" && brickDirection == "Up") ||
		// 		(direction == "Up" && brickDirection == "Right")
		// 	) {
		// 		rotation = "counterclockwise";
		// 	}
		// 	else {
		// 		rotation = undefined;
		// 	}

		// 	console.log(tiles);

		// 	if (rotation != undefined) {
				

		// 		if (rotation == "rotate180") {
		// 			x = (X + originX) - (brickSize.width - 1 - originX);
		// 			y = (Y + originY) - (brickSize.height - 1 - originY);
		// 			_tw = brickSize.width - 1;
		// 			_th = brickSize.height - 1;
		// 			// originX = _tw - originX;
		// 			// originY = _tw - originY;
		// 		}
		// 		else if (rotation == "clockwise") {
		// 			x = (X + originX) - (brickSize.height - 1 - originY);
		// 			y = (Y + originY) - originX;
		// 			_th = originX;
		// 			_tw = brickSize.height - 1 - originY;
		// 			// originY = _th;
		// 			// originX = _tw;
		// 		}
		// 		else if (rotation == "counterclockwise") {
		// 			x = (X + originX) - originY;
		// 			y = (Y + originY) - (brickSize.width - 1 - originX);
		// 			_th = brickSize.width - 1 - originX;
		// 			_tw = originY;
		// 			// originY = _th;
		// 			// originX = _tw;
		// 		}

		// 		for(var t = 0; t < tiles.length; t++) {

		// 			var tlsX = 0, tlsY = 0;

		// 			if (rotation == "rotate180") {
		// 				tlsX = _tw - tiles[t].x;
		// 				tlsY = _th - tiles[t].y;	
		// 			}
		// 			else if (rotation == "clockwise") {
		// 				_tw = brickSize.height - 1 - tiles[t].y;
		// 				_th = tiles[t].x;
		// 				tlsX = _tw;
		// 				tlsY = _th;
		// 			}
		// 			else if (rotation == "counterclockwise") {
		// 				_tw = tiles[t].y;
		// 				_th = brickSize.width - 1 - tiles[t].x;
		// 				tlsX = _tw;
		// 				tlsY = _th;
		// 			}

		// 			tileX = x + tlsX;
		// 			tileY = y + tlsY;

		// 			tiles[t].testScreenX = tileX;
		// 			tiles[t].testScreenY = tileY;
	 // 			}

		// 		console.log(tiles);

		// 		testX = x; testY = y;
		// 	}
		// }

		// ----------------------------------------------------------
		function _getOverlappedObjects(x, y, tiles) {
			// true if an object overlaps another
			var tileX = 0, tileY = 0;

			var overlap = screenTiles.filter(function(screenTile) {
				return tiles.filter(function(tempTile) { 
					tileX = x + tempTile.x; tileY = y + tempTile.y;
					return screenTile.x == tileX && screenTile.y == tileY && screenTile.color != "canvas";
				}).length > 0;
			});	

			overlap = brickObjects.filter(function(brickObject) {
				return brickObjects.indexOf(brickObject) != brickObjects.indexOf(thisObject);
			}).filter(function(brickObject) {
				return brickObject.getTiles().filter(function(brickTile) {
					return overlap.filter(function(col) {
						return col.x == brickTile.screenX && col.y == brickTile.screenY;
					}).length > 0;
				}).length > 0;
			});

			return overlap;
		}
		function _setLocation(x, y, _tiles) {
			var tileX, tileY;

			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = tiles[t].screenX; tileY = tiles[t].screenY;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						if (visible) {
							var screenTile = getScreenTile(tileX, tileY);
							if (!(screenTile == null || screenTile == undefined)) {
								screenTile.color = "canvas";
							}
						}
					}
				}
			}

			if(_tiles != undefined) tiles = JSON.parse(JSON.stringify(_tiles));
			bt = tiles;

			for(var t = 0; t < tiles.length; t++) {
				tileX = x + tiles[t].x; tileY = y + tiles[t].y;
				if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
					if(visible) {
						var screenTile = getScreenTile(tileX, tileY);
						if (!(screenTile == null || screenTile == undefined)) {
							screenTile.color = color;
						}
					}
				}
				tiles[t].screenX = tileX; tiles[t].screenY = tileY;
				tiles[t].testScreenX = tileX; tiles[t].testScreenY = tileY;
 			}
			X = x; Y = y;
			paint();
		}
		function _tryLocation(x, y, tempTiles) {
			var overlap = _getOverlappedObjects(x, y, tempTiles);
			if (overlap.length == 0) {
				tiles = tempTiles;
				_setLocation(x, y);
			}

			return overlap;
		}
		function getTileObject(x, y) { return document.getElementById("tileCell" + brickObjectTiles[x].name + brickObjectTiles[y].name); }
		function showHideTiles(_visible) {
			var tileX = 0, tileY = 0;
			if(_visible != undefined) visible = _visible;
			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = tiles[t].screenX; tileY = tiles[t].screenY;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var screenTile = getScreenTile(tileX, tileY);
						if (!(screenTile == null || screenTile == undefined)) {
							screenTile.color = visible ? color: "canvas";
						}
					}
				}
				paint();
			}
		}
		function _getSize() {
			var width = tiles.sort(function(t1, t2) { return t2.x - t1.x }).first().x + 1;
			var height = tiles.sort(function(t1, t2) { return t2.y - t1.y }).first().y + 1;
			return { width: width, height: height };
		}
		function _getEdgeTiles(direction) {
			var edgeTiles = [], brickSize = _getSize();
			switch(direction) {
				case "Left":
					for (var a = 0; a < brickSize.height; a++) {
						var edgeTile = tiles.filter(function(t) { return t.y == a; }).sort(function(a, b) { return a.x - b.x; }).first();
						if(!(edgeTiles == undefined && edgeTiles == null) && edgeTile != undefined) edgeTiles.push(edgeTile);
					}
					break;
				case "Right":
					for (var a = 0; a < brickSize.height; a++) {
						var edgeTile = tiles.filter(function(t) { return t.y == a; }).sort(function(a, b) { return a.x - b.x; }).last();
						if(!(edgeTiles == undefined && edgeTiles == null) && edgeTile != undefined) edgeTiles.push(edgeTile);
					}
					break;
				case "Up":
					for (var a = 0; a < brickSize.width; a++) {
						var edgeTile = tiles.filter(function(t) { return t.x == a; }).sort(function(a, b) { return a.y - b.y; }).first();
						if(!(edgeTiles == undefined && edgeTiles == null) && edgeTile != undefined) edgeTiles.push(edgeTile);
					}
					break;
				case "Down":
					for (var a = 0; a < brickSize.width; a++) {
						var edgeTile = tiles.filter(function(t) { return t.x == a; }).sort(function(a, b) { return a.y - b.y; }).last();
						if(!(edgeTiles == undefined && edgeTiles == null) && edgeTile != undefined) edgeTiles.push(edgeTile);
					}
					break;
			}
			return edgeTiles;
		}
		function _removeTile(x, y) {
			var tileToBeRemoved = tiles.filter(function(t) { return t.screenX == x && t.screenY == y }).first();
			var isTileRemoved = tileToBeRemoved != undefined;
			var tileIndex = tiles.indexOf(tileToBeRemoved);
			if(isTileRemoved) { 
				var screenTile = getScreenTile(x, y);
				if (!(screenTile == null || screenTile == undefined)) {
					screenTile.color = "canvas";
				} 
				tiles.splice(tileIndex, 1); 
				paint();
			}
			return isTileRemoved;
		}
		function _rotate() {
	 		tiles = _tryRotate(rotateDirection);
	 		brickDirection = rotateDirection;
		}
		function _tryRotate(direction) {
			var rotation = undefined;

			var tileX = 0, tileY = 0, _tw = 0, _th = 0;

			var brickSize = _getSize();

			if (
				(direction == "Right" && brickDirection == "Left") ||
				(direction == "Left" && brickDirection == "Right") ||
				(direction == "Up" && brickDirection == "Down") ||
				(direction == "Down" && brickDirection == "Up")
			) {
				rotation = "rotate180";
			}
			else if (
				(direction == "Right" && brickDirection == "Up") ||
				(direction == "Up" && brickDirection == "Left") ||
				(direction == "Left" && brickDirection == "Down") ||
				(direction == "Down" && brickDirection == "Right") 
			) {
				rotation = "clockwise";
			}
			else if (
				(direction == "Right" && brickDirection == "Down") ||
				(direction == "Down" && brickDirection == "Left") ||
				(direction == "Left" && brickDirection == "Up") ||
				(direction == "Up" && brickDirection == "Right")
			) {
				rotation = "counterclockwise";
			}
			else {
				rotation = undefined;
			}

			var tempTiles = JSON.parse(JSON.stringify(tiles));

			if (rotation != undefined) {

				if (rotation == "rotate180") {
					// x = (X + originX) - (brickSize.width - 1 - originX);
					// y = (Y + originY) - (brickSize.height - 1 - originY);
					_tw = brickSize.width - 1;
					_th = brickSize.height - 1;
					// originX = _tw - originX;
					// originY = _tw - originY;
				}
				else if (rotation == "clockwise") {
					// x = (X + originX) - (brickSize.height - 1 - originY);
					// y = (Y + originY) - originX;
					_th = originX;
					_tw = brickSize.height - 1 - originY;
					// originY = _th;
					// originX = _tw;
				}
				else if (rotation == "counterclockwise") {
					// x = (X + originX) - originY;
					// y = (Y + originY) - (brickSize.width - 1 - originX);
					_th = brickSize.width - 1 - originX;
					_tw = originY;
					// originY = _th;
					// originX = _tw;
				}
			}

			for(var t = 0; t < tempTiles.length; t++) {
				if (rotation == "rotate180") {
					tempTiles[t].x = _tw - tempTiles[t].x;
					tempTiles[t].y = _th - tempTiles[t].y;	
				}
				else if (rotation == "clockwise") {
					_tw = brickSize.height - 1 - tempTiles[t].y;
					_th = tempTiles[t].x;
					tempTiles[t].x = _tw;
					tempTiles[t].y = _th;
				}
				else if (rotation == "counterclockwise") {
					_tw = tempTiles[t].y;
					_th = brickSize.width - 1 - tempTiles[t].x;
					tempTiles[t].x = _tw;
					tempTiles[t].y = _th;
				}
 			}
 			return tempTiles;
		}
		this.toggleAppear = function() { visible = !visible; showHideTiles(visible); }
		this.show = function() { visible = true; showHideTiles(visible); }
		this.hide = function() { visible = false; showHideTiles(visible); }
		this.getName = function() { return brickTileName; }
		this.getTiles = function() { return tiles; }
		this.getSize = function() { return _getSize(); }
		this.tileCount = function() { return tiles.length; }
		this.addTile = function(left, top) {
			var tile = { x: left - X, y: top - Y, screenX: left, screenY: top };
			if(left >= 0 && left < 20 && top >= 0 && top < 10) {

				var screenTile = getScreenTile(left, top);
				if (!(screenTile == null || screenTile == undefined)) {
					screenTile.color = color;
				} 
				tiles.push(tile);
				paint();
			}
		}
		this.removeTile = function(left, top) { return _removeTile(left, top); }
		this.hasTile = function(x, y) {
			var tileX, tileY, hasTile = false;
			if(X != undefined && Y != undefined) hasTile = tiles.filter(function(t) { return t.screenX == x && t.screenY == y }).length > 0;
			return hasTile;
		}
		this.isGottenOutOfScreen = function() {
			var brickSize = _getSize();
			return X >= 20 || Y >= 10 || X <= -brickSize.width || Y <= -brickSize.height;
		}
		this.isOnSide = function(_direction) {
			var directions;
			var brickSize = _getSize();
			var isOnLeft = X == 0, isOnRight = X + brickSize.width == 20, isOnTop = Y == 0, isOnBottom = Y + brickSize.height == 10;

			if(_direction == undefined) {
				directions = [];
				
				if (isOnLeft) directions.push("Left");
				if (isOnRight) directions.push("Right");
				if (isOnTop) directions.push("Up");
				if (isOnBottom) directions.push("Down");
			}
			else {
				directions = false;
				switch(_direction) {
					case "Left":
						directions = isOnLeft;
						break;
					case "Right":
						directions = isOnRight;
						break;
					case "Up":
						directions = isOnTop;
						break;
					case "Down":
						directions = isOnBottom;
						break;
				}
				
			}
			return directions;
		}
		this.remove = function() {
			var tileX, tileY;
			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = X + tiles[t].x; tileY = Y + tiles[t].y;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var screenTile = getScreenTile(tileX, tileY);
						if (!(screenTile == null || screenTile == undefined)) {
							screenTile.color = "canvas";
						}
					}
				}
				paint();
			}
			
			var index = brickObjects.indexOf(this);
			if(index >= 0) brickObjects.splice(index, 1);
			onRemove();
		}
		this.onRemove = function(_func) { onRemove = _func == undefined ? function() {}: _func; }
		this.getLocation = function(corner) {
			var a = 0, b = 0;
			if (corner == undefined) corner = "TopLeft";
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
		this.getDirection = function() { return brickDirection; }
		this.blink = function(interval, count, endFunction) {
			var c = 0; count = (count * 2);
			var blinkTimeout = setInterval(function() {
				showHideTiles();
				c++;
				if(count != undefined && count == c) {
					clearInterval(blinkTimeout);
					if(endFunction != undefined) endFunction();
				}
			}, interval);
		}
		this.removeSideTile = function(side, position) {
			var lastPosition = 0;
			if (side == "Right") {
				var tilesRow = tiles.filter(function(tile) { return tile.screenY == position });
				if (tilesRow != undefined && tilesRow.length > 0) 
					lastPosition = tilesRow.sort(function(t1, t2) { return t1.screenX - t2.screenX; }).last().screenX;
			}
			return _removeTile(lastPosition, position);
		}
		this.setLocation = function(x, y, _tiles) { _setLocation(x, y, _tiles); }
		this.tryLocation = function(x, y) { return _tryLocation(x, y, tiles); }
		this.tryRotateLocation = function(x, y, direction) {
			// if no overlap occurred set location and rotation
 			var tempTiles = _tryRotate(direction);
			var overlap = _tryLocation(x, y, tempTiles);
			if (overlap.length == 0) { brickDirection = direction; }
			return overlap;
		}
		this.getCollidedObjects = function(...directions) {
			var collidedObjects = {};
			var xIncrement = 0, yIncrement = 0;

			directions = directions.length == 0 ? ["Left", "Right", "Up", "Down"]: directions;

			for (var i = 0; i < directions.length; i++) {
				switch(directions[i]) {
					case "Left":
						xIncrement = -1; yIncrement = 0;
						break;
					case "Right":
						xIncrement = 1; yIncrement = 0;
						break;
					case "Up":
						xIncrement = 0; yIncrement = -1;
						break;
					case "Down":
						xIncrement = 0; yIncrement = 1;
						break;
					default:
						break;
				}

				var collision = screenTiles.filter(function(screenTile) {
					return _getEdgeTiles(directions[i]).filter(function(tile) { 
						return screenTile.x == tile.screenX + xIncrement && screenTile.y == tile.screenY + yIncrement && screenTile.color != "canvas";
					}).length > 0;
				});	
				collision = brickObjects.filter(function(brickObject) {
					return brickObjects.indexOf(brickObject) != brickObjects.indexOf(thisObject);
				}).filter(function(brickObject) {
					return brickObject.getTiles().filter(function(brickTile) {
						return collision.filter(function(col) {
							return col.x == brickTile.screenX && col.y == brickTile.screenY;
						}).length > 0;
					}).length > 0;
				});
				collidedObjects[directions[i].toLowerCase()] = collision;
			}

			return collidedObjects;
		}
		this.getOverlappedObjects = function() { return _getOverlappedObjects(X, Y, tiles); }
		this.isOverlapped = function() { return _getOverlappedObjects(X, Y, tiles).length > 0; }

		// NOT YET USED FUNCTIONS
		this.setOriginalOrigin = function() { originX = originalOrigin.x; originY = originalOrigin.y; }
		this.willGetOutOfScreen = function(_direction) {
			var directions;
			var brickSize = _getSize();
			var isOnLeft = testX < 0 && testX + brickSize.width > 0;
			var isOnRight = testX < 20 && testX + brickSize.width > 20;
			var isOnTop = testY < 0 && testY + brickSize.height > 0;
			var isOnBottom = testY < 10 && testY + brickSize.height > 10;

			if(_direction == undefined) {
				directions = [];
				
				if (isOnLeft) directions.push("Left");
				if (isOnRight) directions.push("Right");
				if (isOnTop) directions.push("Up");
				if (isOnBottom) directions.push("Down");
			}
			else {
				directions = false;
				switch(_direction) {
					case "Left":
						directions = isOnLeft;
						break;
					case "Right":
						directions = isOnRight;
						break;
					case "Up":
						directions = isOnTop;
						break;
					case "Down":
						directions = isOnBottom;
						break;
				}
				
			}
			return directions;
		}
		this.moveOrigin = function(direction) {
			switch(direction) {
				case "Left":
					originX--;
					break;
				case "Right":
					originX++;
					break;
				case "Up":
					originY--;
					break;
				case "Down":
					originY++;
					break;
				default:
					break;
			}
		}
		this.getSideTiles = function(direction) {
			var edgeTiles = [];
			switch(direction) {
				case "Right":
					edgeTiles = tiles.sort(function(t1, t2) { return t1.x - t2.x; });
					edgeTiles = edgeTiles.filter(function(t) { return t.x == edgeTiles.last().x; });
					break;
			}
			return edgeTiles;
		}

		// FUTURE FUNCTIONS
		this.getEdgeTiles = function(direction) { return _getEdgeTiles(direction); }

		brickObjects.push(thisObject);
	}

	// CLASS-LIKE FUNCTIONS
	function GameProperties() {
		// DECLARATIONS
		var selectedGame;
		var selectedCharacterObject = new BrickObject({ brickLocation: { x: 1, y: 2 } });
		var modeDigitObjects = [new BrickObject({ brickLocation: { x: 8, y: 2 } }), new BrickObject({ brickLocation: { x: 14, y: 2 } })];
		var upkeydown = GameKeys.up.onkeydown;
		var downkeydown = GameKeys.down.onkeydown;
		var leftkeydown = GameKeys.left.onkeydown;
		var rightkeydown = GameKeys.right.onkeydown;
		var spacekeydown = GameKeys.space.onkeydown;
		var enterkeydown = GameKeys.enter.onkeydown;

		// PRIVATE FUNCTIONS
		function setLevel(increment) { 
			var level;
			GameSound.select();
			increment = increment == undefined ? true: increment; 
			if(increment == true) { level = BrickGameModel.getLevel() + 1; BrickGameModel.setLevel(level > 10 ? 1: level); }
			else { level = BrickGameModel.getLevel() - 1; BrickGameModel.setLevel(level < 1 ? 10: level); }
		}
		function setSpeed(increment) {
			var speed; 
			GameSound.select();
			increment = increment == undefined ? true: increment; 
			if(increment == true) { speed = BrickGameModel.getSpeed() + 1; BrickGameModel.setSpeed(speed > 10 ? 1: speed); }
			else { speed = BrickGameModel.getSpeed() - 1; BrickGameModel.setSpeed(speed < 1 ? 10: speed); }
		}
		function selectGame(number) { 
			GameSound.select();
			BrickGameModel.setGameNumber(number == _games.length ? 0: number);
			selectedGame = _games[BrickGameModel.getGameNumber()];
			BrickGameModel.setScore(selectedGame.score);
			BrickGameModel.setSelectedGame(selectedGame);
			var modeString = (selectedGame.mode == undefined ? 0: selectedGame.mode).pad(2);
			showCharacters(selectedCharacterObject, selectedGame.character);
			showCharacters(modeDigitObjects[0], modeString.substring(0, 1));
			showCharacters(modeDigitObjects[1], modeString.substring(1, 2));
		}
		function showCharacters(brickObject, character) {
			var characterTiles = brickObjectTiles.filter(function(l) { return l.name == character }).first().tiles;
			var loc = brickObject.getLocation();
			brickObject.setLocation(loc.x, loc.y, characterTiles);
		}

		// INITIALIZATIONS
		initializeSoundKey();
		upkeydown.func(function() { setLevel(true); });
		upkeydown.allowRepeat(true);
		upkeydown.setEnabled(true);
		downkeydown.func(function() { setLevel(false); });
		downkeydown.allowRepeat(true);
		downkeydown.setEnabled(true);
		leftkeydown.func(function() { setSpeed(false); });
		leftkeydown.allowRepeat(true);
		leftkeydown.setEnabled(true);
		rightkeydown.func(function() { setSpeed(true); });
		rightkeydown.allowRepeat(true);
		rightkeydown.setEnabled(true);
		spacekeydown.func(function() { selectGame(BrickGameModel.getGameNumber() + 1); });
		spacekeydown.allowRepeat(true);
		spacekeydown.setEnabled(true);
		enterkeydown.func(function() { GameSound.startGame(); Game.load(); });
		enterkeydown.allowRepeat(true);
		enterkeydown.setEnabled(true);
		selectGame(BrickGameModel.getGameNumber());
	};

	// PRIVATE FUNCTIONS
	function changeTileColor(x, y, color) {
		color = color == undefined ? "Black": color;
		var xCharacter = brickObjectTiles[x].name, yCharacter = brickObjectTiles[y].name;
		var tile = document.getElementById("tileCell" + xCharacter + yCharacter);
		tile.className = "outerTileCells outer" + color + "Color";
		tile.children[0].className = "tileCells " + color + "Color";
	}
	function changeLifeTileColor(x, y, color) {
		color = color == undefined ? "Black": color;
		var xCharacter = brickObjectTiles[x].name, yCharacter = brickObjectTiles[y].name;
		var tile = document.getElementById("lifeTileCell" + xCharacter + yCharacter);
		tile.className = "outerLifeTile outer" + color + "Color";
		tile.children[0].className = "lifeTile " + color + "Color";
	}
	function loadTiles() {
		for (var i = 0; i < 10; i++) {	
			var tileRow = document.createElement("div");
			var yCharacter = brickObjectTiles[i].name;
			tileRow.className = "tileRows";
			for(var j = 0; j < 20; j++) {
				var xCharacter = brickObjectTiles[j].name;
				var outerTileCell = document.createElement("div"), tileCell = document.createElement("div");
				outerTileCell.id = "tileCell" + xCharacter + yCharacter;
				outerTileCell.style.visibility = "visible";
				outerTileCell.appendChild(tileCell);
				tileRow.appendChild(outerTileCell);
				screenTiles.push({ x: j, y: i, color: "canvas" });
			}
			mainContainer.appendChild(tileRow);
		};
	}
	function loadLifeTiles() {
		for (var i = 0; i < 4; i++) {	
			var tileRow = document.createElement("div");
			var yCharacter = brickObjectTiles[i].name;
			tileRow.style.display = "flex";
			for(var j = 0; j < 4; j++) {
				var xCharacter = brickObjectTiles[j].name;
				var outerTileCell = document.createElement("div"), tileCell = document.createElement("div");
				outerTileCell.id = "lifeTileCell" + xCharacter + yCharacter;
				outerTileCell.style.visibility = "visible";
				outerTileCell.appendChild(tileCell);
				tileRow.appendChild(outerTileCell);
			}
			lifeBrickContainer.children[0].appendChild(tileRow);
		};
		LifeBrickObject.blink();
	}
	function getBrickTiles(name) {
		var brickTiles = brickObjectTiles.filter(function(t) { return t.name == name }).first();
		return brickTiles == undefined || brickTiles.tiles == undefined ? []: brickTiles.tiles;
	}
	function getScreenTile(x, y) { return screenTiles.filter(function(tile) { return tile.x == x && tile.y == y; }).first(); }
	function setCanvasColor(color){ canvas = color; for (var i = 0; i < screenTiles.length; i++) screenTiles[i].color = "canvas"; paint(); }
	function paint() {
		for (var index = 0; index < screenTiles.length; index++) {
			var color = screenTiles[index].color == undefined || screenTiles[index].color == "canvas" ? canvas : screenTiles[index].color;
			changeTileColor(screenTiles[index].x, screenTiles[index].y, color); 
		}
	}
	function removeBrickObjects(brickObjects) { for (var i = 0; i < brickObjects.length; i++) brickObjects[i].remove(); }
	function removeBrickObjectsBut(...bos) {
		var len = brickObjects.length;
		bos = [].concat.apply([], bos);
		for (var i = len - 1; i >= 0; i--) { 
			var brickObject = bos.filter(function(bo) { return brickObjects.indexOf(bo) == i; }).length;
			if(brickObject == 0) brickObjects[i].remove();
		}
	}
	function getBrickObjectsByScreenTile(x, y) {
		return brickObjects.filter(function(bo) {
			return bo.getTiles().filter(function(bt) { return bt.screenX == x && bt.screenY == y; }).length > 0;
		});
	}
	function initializeSoundKey() {
		GameKeys.s.onkeydown.func(function() { BrickGameModel.changeSoundVolume(); GameSound.select(); });
		GameKeys.s.onkeydown.allowRepeat(true); GameKeys.s.onkeydown.setEnabled(true);
	}
	function clearBrickObjects() { while (brickObjects.length > 0) brickObjects.first().remove(); brickObjects = []; }
	function clearTimers() { while (timers.length > 0) timers.first().dispose(); timers = []; }
	function areEqual(bo1, bo2) { return brickObjects.indexOf(bo1) == brickObjects.indexOf(bo2); }
	function pause() { BrickGameModel.togglePause(); timers.forEach(function(t) { if (t.isRunning()) t.pause(); }); }
	function stop() { timers.forEach(function(t) { t.stop(); }); }
	function resume() { BrickGameModel.togglePause(); timers.forEach(function(t) { if (t.isPaused()) t.start(); }); }
	
	// GAMES
	var _games = 
	[
		{
			character: 'A', gameType: "tank", mode: 1, score: 0, speedTimeout: [1000, 950, 900, 850, 800, 750, 700, 650, 600, 550],
			load: function() {
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var enemyTankTiles = [], obstacles = [];
				var spawnTankAnim = new Timer({ func: loadEnemyTanks, interval: 200 });
				var tankTile = new BrickObject({ tiles: getBrickTiles("tankTile"), name: "tankTile", origin: { x: 1, y: 1 } });;

				// FUNCTIONS
				function initialize() {
					enemyTankTiles = [];
					removeBrickObjectsBut(obstacles, [tankTile]);
					tankTile.tryRotateLocation(10, 3, "Left");
					console.log(brickObjects.length);
					spawnTankAnim.start();
				}

				function loadObstacles() {
					var params = [];
					switch(level) {
						case 1:
							break;
						case 2:
							params = [
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 2, y: 2 }, rotateDirection: "Down" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 16, y: 6 }, rotateDirection: "Up" },
							];
							break;
						case 3:
							params = [
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 2, y: 6 }, rotateDirection: "Right" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 16, y: 2 }, rotateDirection: "Left" },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 4, y: 2 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 14, y: 6 }, },
							];
							break;
						case 4:
							params = [
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 2, y: 6 }, rotateDirection: "Right" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 16, y: 2 }, rotateDirection: "Left" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 2, y: 2 }, rotateDirection: "Down" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 16, y: 6 }, rotateDirection: "Up" },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 5, y: 4 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 13, y: 4 }, },
							];
							break;
						case 5:
							params = [
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 2, y: 6 }, rotateDirection: "Right" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 16, y: 2 }, rotateDirection: "Left" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 2, y: 2 }, rotateDirection: "Down" },
								{ name: "rightTile1", tiles: getBrickTiles("rightTile1"), brickLocation: { x: 16, y: 6 }, rotateDirection: "Up" },
								{ name: "fourByOne", tiles: getBrickTiles("fourByOne"), brickLocation: { x: 6, y: 3 }, rotateDirection: "Up" },
								{ name: "fourByOne", tiles: getBrickTiles("fourByOne"), brickLocation: { x: 13, y: 3 }, rotateDirection: "Up" },
							];
							break;
						case 6:
							params = [
								{ name: "cTile1", tiles: getBrickTiles("cTile1"), brickLocation: { x: 2, y: 2 }, },
								{ name: "cTile1", tiles: getBrickTiles("cTile1"), brickLocation: { x: 14, y: 2 }, rotateDirection: "Left" },
							]
							break;
						case 7: 
							params = [
								{ name: "tTile1", tiles: getBrickTiles("tTile1"), brickLocation: { x: 14, y: 1 }, },
								{ name: "tTile1", tiles: getBrickTiles("tTile1"), brickLocation: { x: 0, y: 1 }, rotateDirection: "Left" },
							]
							break;
						case 8:
							params = [
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 1, y: 4 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 18, y: 4 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 4, y: 1 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 4, y: 7 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 14, y: 1 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 14, y: 7 }, },
								{ name: "squareTile1", tiles: getBrickTiles("squareTile1"), brickLocation: { x: 7, y: 4 }, },
							]
							break;
						case 9: 
							params = [
								{ name: "tTile2", tiles: getBrickTiles("tTile2"), brickLocation: { x: 1, y: 1 }, rotateDirection: "Left" },
								{ name: "tTile2", tiles: getBrickTiles("tTile2"), brickLocation: { x: 1, y: 6 }, },
								{ name: "tTile2", tiles: getBrickTiles("tTile2"), brickLocation: { x: 14, y: 1 }, rotateDirection: "Left" },
								{ name: "tTile2", tiles: getBrickTiles("tTile2"), brickLocation: { x: 14, y: 6 }, },
							]
							break;
						case 10:
							params = [
								{ name: "tTile1", tiles: getBrickTiles("tTile1"), brickLocation: { x: 14, y: 1 }, },
								{ name: "tTile1", tiles: getBrickTiles("tTile1"), brickLocation: { x: 0, y: 1 }, rotateDirection: "Left" },
								{ name: "eightByOne", tiles: getBrickTiles("eightByOne"), brickLocation: { x: 6, y: 1 }, },
								{ name: "eightByOne", tiles: getBrickTiles("eightByOne"), brickLocation: { x: 6, y: 8 }, },
							]
							break;
						default:
							break;
					}
					for (var i = 0; i < params.length; i++) obstacles.push(new BrickObject(params[i]));
				}
				function loadEnemyTanks() {
					var spawn = Math.round(Math.random() * 100) % 5 == 0;
					if(spawn && enemyTankTiles.length < 6) {
						var posX = Math.round(Math.random() * 100) % 3, posY = Math.round(Math.random() * 100) % 2;
						var direction = Math.round(Math.random() * 100) % 4;
						switch(posX) {
							case 0:
								posX = 0;
								break;
							case 1:
								posX = 9;
								break;
							case 2:
								posX = 17;
								break;
							default:
								break;
						}
						switch(posY) {
							case 0:
								posY = 0;
								break;
							case 1:
								posY = 7;
								break;
							default:
								break;
						}
						switch(direction) {
							case 0:
								direction = "Left";
								break;
							case 1:
								direction = "Right";
								break;
							case 2:
								direction = "Up";
								break;
							case 3:
								direction = "Down";
								break;
							default:
								break;
						}

						var enemyTankTile = new BrickObject({
							tiles: getBrickTiles("enemyTankTile"), name: "enemyTankTile", rotateDirection: direction, origin: { x: 1, y: 1 },
						});

						if(enemyTankTile.tryLocation(posX, posY).length == 0) {
							enemyTankTiles.push(enemyTankTile);
							var moveEnemyTankAnim = new Timer({
								func: function() { 
									var direction = enemyTankTile.getDirection();
									var moveOrRotate = Math.floor(Math.random() * 100) % 3 == 0;
									if (moveOrRotate) direction = ["Left", "Right", "Up", "Down"][Math.floor(Math.random() * 100) % 4];
									moveTank(enemyTankTile, direction);
									if(Math.floor(Math.random() * 100) % 2 == 0) fireTank(enemyTankTile, true);
								}, 
								interval: speedInMillis
							});
							enemyTankTile.onRemove(function() { 
								moveEnemyTankAnim.stop();
								moveEnemyTankAnim.dispose();
							});
							moveEnemyTankAnim.start();
						}
					}
				}
				function moveTank(_tankTile, direction) {
					var tankDirection = _tankTile.getDirection(), tankLocation = _tankTile.getLocation();
					if (tankDirection == direction) {
						switch(direction) {
							case "Left":
								tankLocation.x--;
								break;
							case "Right":
								tankLocation.x++;
								break;
							case "Up":
								tankLocation.y--;
								break;
							case "Down":
								tankLocation.y++;
								break;
						}
						if(!_tankTile.isOnSide(direction))
							_tankTile.tryRotateLocation(tankLocation.x, tankLocation.y, direction);
					}
					else {
						if(!_tankTile.isOnSide(direction)) {
							if(_tankTile.tryRotateLocation(tankLocation.x, tankLocation.y, direction).length > 0) {
								switch(direction) {
									case "Left":
										tankLocation.x--;
										break;
									case "Right":
										tankLocation.x++;
										break;
									case "Up":
										tankLocation.y--;
										break;
									case "Down":
										tankLocation.y++;
										break;
								}
								_tankTile.tryRotateLocation(tankLocation.x, tankLocation.y, direction);
							}
						}
					}
				}
				function fireTank(_tankTile, _isEnemyTank) {
					var isEnemyTank = _isEnemyTank == undefined ? false: _isEnemyTank;
					var ammoX = 0, ammoY = 0;
					var tankDirection = _tankTile.getDirection(), tankLocation = _tankTile.getLocation();
					var ammoTile = new BrickObject({ tiles: getBrickTiles("singleTile"), name: "singleTile", color: isEnemyTank ? "red": "yellow", brickDirection: tankDirection });
					
					switch(tankDirection) {
						case "Right":
							ammoX = tankLocation.x + 3; ammoY = tankLocation.y + 1;
							break;
						case "Left":
							ammoX = tankLocation.x - 1; ammoY = tankLocation.y + 1;
							break;
						case "Up":
							ammoX = tankLocation.x + 1; ammoY = tankLocation.y - 1;
							break;
						case "Down":
							ammoX = tankLocation.x + 1; ammoY = tankLocation.y + 3;
							break;
						default:
							break;
					}

					var collidedObjects = ammoTile.tryRotateLocation(ammoX, ammoY);
					if (collidedObjects.length > 0) {
						var hitObject = collidedObjects.first();
						hit(hitObject, ammoX, ammoY);
						ammoTile.remove();
					}
					else {
						if(_tankTile.isOnSide(tankDirection)) ammoTile.remove();
						else { 
							var fireTankAnim = new Timer({
								func: function() {
									var ammoLocation = ammoTile.getLocation();
									switch(tankDirection) {
										case "Left":
											ammoLocation.x--;
											break;
										case "Right":
											ammoLocation.x++;
											break;
										case "Up":
											ammoLocation.y--;
											break;
										case "Down":
											ammoLocation.y++;
											break;
									}
									if (ammoTile.isOnSide(tankDirection)) ammoTile.remove();
									else {
										var collidedObjects = ammoTile.tryRotateLocation(ammoLocation.x, ammoLocation.y);
										if (collidedObjects.length > 0) {
											var hitObject = collidedObjects.first();
											hit(hitObject, ammoLocation.x, ammoLocation.y);
											ammoTile.remove();
										}
									}	
								}, 
								interval: 100
							}); 
							ammoTile.onRemove(function() { 
								fireTankAnim.stop();
								fireTankAnim.dispose();
							});
					 		fireTankAnim.start();
						}
					}

					function hit(hitObject, x, y) {
						var hitObjectName = hitObject.getName();
						if(!isEnemyTank && hitObjectName == "enemyTankTile") {
							GameSound.fire();
							enemyTankTiles.splice(enemyTankTiles.indexOf(hitObject), 1);
							Game.score();
							hitObject.remove(); 
							var score = BrickGameModel.getScore();
							if (score % 30 == 0) { stop(); Game.levelUp(); }
						}
						else {
							if (hitObjectName == "singleTile") hitObject.remove();
							else if (hitObjectName == "tankTile") {
								stop();
								GameSound.explosion();
								Game.blinkBrickObjects({ brickObjects: [tankTile], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize); } });
							}
							else if (hitObjectName == "rightTile1" || 
									hitObjectName == "squareTile1" || 
									hitObjectName == "cTile1" ||
									hitObjectName == "tTile1" ||
									hitObjectName == "tTile2" ||
									hitObjectName == "eightByOne" ||
									hitObjectName == "fourByOne") {
								hitObject.removeTile(x, y);
								if(hitObject.tileCount() == 0) {
									hitObject.remove();
								}
							}
						}
					}
				}
				
				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { moveTank(tankTile, "Left"); },
					onRight: function() { moveTank(tankTile, "Right"); },
					onTop: function() { moveTank(tankTile, "Up"); },
					onBottom: function() { moveTank(tankTile, "Down"); },
					onSpace: function() { GameSound.move(); fireTank(tankTile); }
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() {  }
				}

				// INITIALIZATION
				loadObstacles();
				initialize();
			}
		},
		{
		 	character: 'B', gameType: "race1", mode: 3, score: 0, speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var _road1 = [], _road2 = [], cars = [];
				var myCar = undefined;
				var moveRoadAnim = new Timer({ func: moveRoad });

				// FUNCTIONS
				function initialize() {
					_road1 = []; _road2 = [], cars = [];
					if(myCar == undefined) myCar = newCar(16, 5); else myCar.setLocation(16, 5);
					removeBrickObjectsBut(myCar);
					GameSound.carSound1(true);
					loadRoadAndCars(); moveRoad();
					moveRoadAnim.setTimerInterval(speedInMillis);
					moveRoadAnim.start();
				}

				function newCar(x, y) { return new BrickObject({ tiles: getBrickTiles("carTile"), brickLocation: { x: x, y: y }, }); }
				function addCar() { return newCar(-4, ((Math.floor(Math.random() * 100) % 2) * 3) + 2); }
				function loadRoadAndCars() {
					for (var i = 0; i < 5; i++) {
						_road1.push(newRoad(i * 4, 0)); _road2.push(newRoad(i * 4, 9));
					}
					cars.push(addCar());
				}
				function moveRoad() {
					var lastCar = cars.last();
					var willCollide = myCar.getCollidedObjects("Left").left.length > 0;
					var willOverlap = myCar.isOverlapped();
					if (willCollide || willOverlap) {
						GameSound.explosion(); stop();
						Game.blinkBrickObjects({ brickObjects: [cars.last(), myCar], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
					}
					else {
						var _firstRoad1 = _road1.first(), _lastRoad1 = _road1.last(), _lastRoad2 = _road2.last();
						for (var i = 0; i < _road1.length; i++) {
							var x = _road1[i].getLocation().x;
							_road1[i].setLocation(x + 1, 0); _road2[i].setLocation(x + 1, 9);
						}
						if (_firstRoad1.getLocation().x == 2) {
							var _r1 = newRoad(-2, 0), _r2 = newRoad(-2, 9);
							_road1.unshift(_r1); _road2.unshift(_r2);
						}
						if (_lastRoad1.isGottenOutOfScreen()) {
							_lastRoad1.remove(); _lastRoad2.remove(); _road1.pop(); _road2.pop();
						}
						for (var i = 0; i < cars.length; i++) {
							var location = cars[i].getLocation();
							cars[i].setLocation(location.x + 1, location.y);
						}
						if(cars.first().getLocation().x == 6) cars.unshift(addCar());
						if(lastCar.isGottenOutOfScreen()) { lastCar.remove(); cars.pop(); Game.score(); }
					}
				}

				function newRoad(x, y) {
					return new BrickObject({ tiles: getBrickTiles("tripleTiles"), color: "red", brickLocation: { x: x, y: y } });
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { myCar.setLocation(16, 2) },
					onBottom: function() { myCar.setLocation(16, 5); },
					onSpace: {
						action: function() { console.log("boost"); moveRoadAnim.setTimerInterval(50); },
						allowRepeat: false
					}
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() { moveRoadAnim.setTimerInterval(speedInMillis); }
				}

				// INITIALIZATION
				initialize();
			}
		},
		{
			character: 'C', gameType: "war1", mode: 2, score: 0, speedTimeout: [1000, 950, 900, 850, 800, 750, 700, 650, 600, 500],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var soldierObject = new BrickObject({ tiles: getBrickTiles("soldierTile") });
				var enemyRows = [];
				var enemyInvasionAnim = new Timer({ func: invadeEnemies, interval: speedInMillis });

				// FUNCTIONS
				function initialize() {
					removeBrickObjectsBut(soldierObject);
					soldierObject.setLocation(18, 4);
					enemyRows = loadEnemyTileLevel();
					enemyInvasionAnim.start();
				}

				function newEnemyRow(i) {
					var enemies = [];
					var enemyRowCount = 0;
					for (var j = 0; j < 10; j++) {
						if(Math.floor(Math.random() * 10) % 2 == 0 && enemyRowCount < 10) enemies.push({ x: 0, y: j });
						enemyRowCount++;
					}
					return new BrickObject({ tiles: enemies, brickLocation: { x: i, y: 0 } });
				}
				function loadEnemyTileLevel() {
					var enemyRows = [];
					for (var i = 0; i < level - 1; i++) enemyRows.push(newEnemyRow(i));
					return enemyRows;
				}
				function moveSoldier(direction) {
					position = soldierObject.getLocation().y;
					switch(direction) {
						case "Up":
							if (position > -1) position--;
							break;
						case "Down":
							if (position < 8) position++;
							break;
						default:
							break;
					}
					if (position + 1 > 0 && position + 1 < 9) GameSound.move();
					soldierObject.setLocation(18, position);
				}
				function invadeEnemies() {
					if(enemyRows.length == 18) {
						stop(); GameSound.explosion();
						Game.blinkBrickObjects({ brickObjects: [soldierObject], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
					}
					else {
						var enemyRow = newEnemyRow(0);
						enemyRows.unshift(enemyRow);
						for (var i = enemyRows.length - 1; i >= 0; i--) enemyRows[i].setLocation(i, 0);
					}
				}
				function fire() {
					GameSound.fire(); 
					if(enemyRows.length > 0) {
						var e = enemyRows.length - 1;
						var soldierPosition = soldierObject.getLocation().y + 1;
						while(e >= 0 && !enemyRows[e].hasTile(e, soldierPosition)) e--;
						if(e >= 0) {
							enemyRows[e].removeTile(e, soldierPosition);
							Game.score();
							while(enemyRows.length > 0 && enemyRows.last().tileCount() == 0) {
								enemyRows.last().remove(); enemyRows.pop();
							}
						}
					}
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { moveSoldier("Up"); },
					onBottom: function() { moveSoldier("Down"); },
					onSpace: function() { fire(); },
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() {  },
				}
				
				// INITIALIZATION
				initialize();
			},
		},
		{
			character: 'D', gameType: "pinball1", mode: 3, score: 0, speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var pinballCatcher = new BrickObject({ tiles: getBrickTiles("quadrupleTiles") });
				var pinball = new BrickObject({ tiles: getBrickTiles("singleTile"), color: "Green" });
				var isPinballThrown = false;
				var pinballDirection = "BottomLeft";
				var params = {};

				if(level == 9) {
					params = {
						tiles: (function(){
							var tiles = [];
							for (var x = 0; x < 7; x++) { 
								for (var y = 0; y < 10; y++) if(Math.round(Math.random() * 100) % 2 == 0) tiles.push({ x: x, y: y });
							}
							return tiles;
						})()
					}
				}
				else params = { tiles: getBrickTiles("pinballTileLevel" + level.toString()) }
				params.brickLocation = { x: 0, y: 0 };

				var pinballTile = new BrickObject(params);
				var pinballThrowAnim = new Timer({ func: throwPinball, interval: speedInMillis });

				// FUNCTIONS
				function initialize() {
					isPinballThrown = false;
					pinball.setLocation(18, 5);
					pinballCatcher.setLocation(19, 3);
					pinballDirection = "BottomLeft";
				}

				function hasPinballTile(x, y) {
					var hasTile = pinballTile.hasTile(x, y);
					if (hasTile) {
						pinballTile.removeTile(x, y); GameSound.fire(); Game.score();
						if (pinballTile.tileCount() == 0) { stop(); Game.levelUp(); }
					}
					return hasTile;
				}
				function isPinballCaught(x, y) {
					var catched = pinballCatcher.hasTile(x, y);
					if (catched) GameSound.move();
					return catched;
				}
				function moveCatcher(direction) {
					var cy = pinballCatcher.getLocation().y;
					var pinballLocation = pinball.getLocation();
					var px = pinballLocation.x, py = pinballLocation.y;
					switch(direction) {
						case "Top":
							if(isPinballCaught(px + 1, py)) pinball.setLocation(18, cy == 0 ? py: py - 1);
							pinballCatcher.setLocation(19, cy == 0 ? 0: cy - 1);
							break;
						case "Bottom":
							if(isPinballCaught(px + 1, py)) pinball.setLocation(18, cy == 6 ? py: py + 1);
							pinballCatcher.setLocation(19, cy == 6 ? 6: cy + 1);
							break;
					}
				}
				function throwPinball() {
					var pinballLocation = pinball.getLocation();
					var pinballX = pinballLocation.x, pinballY = pinballLocation.y;
					if(pinballX == 19) {
						stop(); GameSound.explosion();
						Game.blinkBrickObjects({ 
							brickObjects: [pinballCatcher, pinball], interval: 400,
							count: 3, endFunction: function() { Game.lifeLost(initialize); }
						});
					}
					else {
						var isBumped = false;
						do {
							var oldPinballDirection = pinballDirection;
							if (pinballDirection == "TopRight") {
								if (pinballY == 0 || hasPinballTile(pinballX, pinballY - 1)) 
									pinballDirection = "BottomRight";
								else if (isPinballCaught(pinballX + 1, pinballY) || hasPinballTile(pinballX + 1, pinballY)) 
									pinballDirection = "TopLeft";
								else if (isPinballCaught(pinballX + 1, pinballY - 1) || hasPinballTile(pinballX + 1, pinballY - 1)) 
									pinballDirection = "BottomLeft"
							}
							else if(pinballDirection == "BottomRight") {
								if ((pinballY == 9 || hasPinballTile(pinballX, pinballY + 1))) 
									pinballDirection = "TopRight";
								else if (isPinballCaught(pinballX + 1, pinballY) || hasPinballTile(pinballX + 1, pinballY)) 
									pinballDirection = "BottomLeft";
								else if (isPinballCaught(pinballX + 1, pinballY + 1) || hasPinballTile(pinballX + 1, pinballY + 1)) 
									pinballDirection = "TopLeft";
							}
							else if(pinballDirection == "BottomLeft") {
								if ((pinballY == 9 || hasPinballTile(pinballX, pinballY + 1))) 
									pinballDirection = "TopLeft";
								else if (pinballX == 0 || hasPinballTile(pinballX - 1, pinballY)) 
									pinballDirection = "BottomRight";
								else if (hasPinballTile(pinballX - 1, pinballY + 1)) 
									pinballDirection = "TopRight";
							}
							else if(pinballDirection == "TopLeft") {
								if (pinballY == 0 || hasPinballTile(pinballX, pinballY - 1)) 
									pinballDirection = "BottomLeft";
								else if (pinballX == 0 || hasPinballTile(pinballX - 1, pinballY)) 
									pinballDirection = "TopRight";
								else if (hasPinballTile(pinballX - 1, pinballY - 1)) 
									pinballDirection = "BottomRight";
							}
							isBumped = oldPinballDirection != pinballDirection;
						} while(isBumped);
						if (pinballTile.tileCount() > 0) {
							switch(pinballDirection) {
								case "BottomLeft":
									pinballX -= 1; pinballY += 1;
									break;
								case "TopLeft":
									pinballX -= 1; pinballY -= 1;
									break;
								case "TopRight":
									pinballX += 1; pinballY -= 1;
									break;
								case "BottomRight":
									pinballX += 1; pinballY += 1;
									break;
								default:
									break;
							}
							pinball.setLocation(pinballX, pinballY);
							if (pinballX == 0 || pinballY == 0 || pinballY == 9) GameSound.move2();
						}
					}
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { moveCatcher("Top"); },
					onBottom: function() { moveCatcher("Bottom"); },
					onSpace: {
						action: function() {
							if (!isPinballThrown) { isPinballThrown = true; pinballThrowAnim.start(); }
							pinballThrowAnim.setTimerInterval(20);
						},
						allowRepeat: false
					}
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() { pinballThrowAnim.setTimerInterval(speedInMillis); }, 
				}

				initialize();
			}
		},
		{
			character: 'E', gameType: "war2", mode: 4, score: 0, speedTimeout:  [10000, 9000, 8000, 7000, 6500, 6000, 5500, 5000, 4500, 4000],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var soldierObject = new BrickObject({ tiles: getBrickTiles("soldierTile") });
				var enemyRows = [];
				var enemyInvasionAnim = new Timer({ func: invadeEnemies, interval: speedInMillis });
				var rowRemoveAnim = new Timer({ interval: 50 });

				// FUNCTIONS
				function initialize() {
					removeBrickObjectsBut(soldierObject);
					soldierObject.setLocation(18, 4);
					enemyRows = loadEnemyTileLevel();
					enemyInvasionAnim.start();
				}

				function isSpace(x, y) { return !enemyRows[x].hasTile(x, y); }
				function newEnemyRow(i) {
					var enemies = [];
					var enemyRowCount = 0;
					for (var j = 0; j < 10; j++) {
						if(Math.floor(Math.random() * 10) % 2 == 0 && enemyRowCount < 10) enemies.push({ x: 0, y: j });
						enemyRowCount++;
					}
					return new BrickObject({ tiles: enemies, brickLocation: { x: i, y: 0 } });
				}
				function loadEnemyTileLevel() {
					var enemyRows = [];
					for (var i = 0; i < level - 1; i++) enemyRows.push(newEnemyRow(i));
					return enemyRows;
				}
				function moveSoldier(direction) {
					position = soldierObject.getLocation().y;
					switch(direction) {
						case "Up":
							if (position > -1) position--;
							break;
						case "Down":
							if (position < 8) position++;
							break;
						default:
							break;
					}
					if (position + 1 > 0 && position + 1 < 9) GameSound.move();
					soldierObject.setLocation(18, position);
				}
				function invadeEnemies() {
					if(enemyRows.length == 18) {
						stop(); GameSound.explosion();
						Game.blinkBrickObjects({ brickObjects: [soldierObject], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
					}
					else {
						var enemyRow = newEnemyRow(0);
						enemyRows.unshift(enemyRow);
						for (var i = enemyRows.length - 1; i >= 0; i--) enemyRows[i].setLocation(i, 0);
					}
				}
				function fire() {
					var soldierPosition = soldierObject.getLocation().y + 1;
					var e = enemyRows.length - 1;
					if(!(enemyRows.length == 18 && !isSpace(e, soldierPosition))) {
						GameSound.fire2();
						while(e >= 0 && isSpace(e, soldierPosition)) e--; e++;
						if(enemyRows[e] == undefined) {
							enemyRows.push(new BrickObject({ tiles: [{ x: 0, y: soldierPosition }], brickLocation: { x: e, y: 0 } }));
						}
						else {
							enemyRows[e].addTile(e, soldierPosition);
							if(enemyRows[e].tileCount() == 10) {
								var r = 4;
								enemyInvasionAnim.pause();
								Game.lockKey(true);
								rowRemoveAnim.setFunction(function() {
									enemyRows[e].removeTile(e, r); enemyRows[e].removeTile(e, 9 - r);
									if(r == 0) {
										rowRemoveAnim.stop();
										GameSound.score();
										Game.score();
										enemyRows[e].remove();
										enemyRows.splice(e, 1);
										while(e < enemyRows.length) { enemyRows[e].setLocation(e, 0); e++; }
										Game.lockKey(false);
										enemyInvasionAnim.start(); 
									}
									else r--;
								});
								rowRemoveAnim.start();
							}
						}
					}
				}
				
				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() { moveSoldier("Up"); },
					onBottom: function() { moveSoldier("Down"); },
					onSpace: function() { fire(); },
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() {  },
				}

				// INITIALIZATION
				initialize();
			},
		},
		{
			character: 'F', gameType: "doublepinball", mode: 5, score: 0, speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
			load: function($game) {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var pinballCatcher1 = new BrickObject({ tiles: getBrickTiles("quadrupleTiles") });
				var pinballCatcher2 = new BrickObject({ tiles: getBrickTiles("quadrupleTiles") }); 
				var pinball = new BrickObject({ tiles: getBrickTiles("singleTile"), color: "Green" });
				var isPinballThrown = false;
				var pinballDirection = "BottomLeft";
				var params = {};

				if(level == 9) {
					params = {
						tiles: (function(){
							var tiles = [];
							for (var x = 0; x < 7; x++) { 
								for (var y = 0; y < 10; y++) if(Math.round(Math.random() * 100) % 2 == 0) tiles.push({ x: x, y: y });
							}
							return tiles;
						})()
					}
				}
				else params = { tiles: getBrickTiles("pinballTileLevel" + level.toString()) }
				params.brickLocation = { x: 7, y: 0 };

				var pinballTile = new BrickObject(params);
				var pinballThrowAnim = new Timer({ func: throwPinball, interval: speedInMillis });

				// FUNCTIONS
				function initialize() {
					isPinballThrown = false; pinballDirection = "BottomLeft";
					pinball.setLocation(18, 5);
					pinballCatcher1.setLocation(0, 3); pinballCatcher2.setLocation(19, 3);
				}

				function hasPinballTile(x, y) {
					var hasTile = pinballTile.hasTile(x, y);
					if (hasTile) {
						pinballTile.removeTile(x, y); GameSound.fire(); Game.score();
						if (pinballTile.tileCount() == 0) { pinballTile.remove(); stop(); Game.levelUp(); }
					}
					return hasTile;
				}
				function isPinballCaught(x, y) {
					var catched = pinballCatcher1.hasTile(x, y) || pinballCatcher2.hasTile(x, y);
					if (catched) GameSound.move();
					return catched;
				}
				function moveCatcher(direction) {
					var cy = pinballCatcher1.getLocation().y;
					var pinballLocation = pinball.getLocation();
					var px = pinballLocation.x, py = pinballLocation.y;
					switch(direction) {
						case "Top":
							if(isPinballCaught(px + 1, py)) pinball.setLocation(18, cy == 0 ? py: py - 1);
							else if(isPinballCaught(px - 1, py)) pinball.setLocation(1, cy == 0 ? py: py - 1);
							pinballCatcher1.setLocation(0, cy == 0 ? 0: cy - 1); pinballCatcher2.setLocation(19, cy == 0 ? 0: cy - 1);
							break;
						case "Bottom":
							if(isPinballCaught(px + 1, py)) pinball.setLocation(18, cy == 6 ? py: py + 1);
							else if(isPinballCaught(px - 1, py)) pinball.setLocation(1, cy == 6 ? py: py + 1);
							pinballCatcher1.setLocation(0, cy == 6 ? 6: cy + 1); pinballCatcher2.setLocation(19, cy == 6 ? 6: cy + 1);
							break;
					}
				}
				function throwPinball() {
					var pinballLocation = pinball.getLocation();
					var pinballX = pinballLocation.x, pinballY = pinballLocation.y;
					if(pinballX == 0 || pinballX == 19) {
						stop(); GameSound.explosion();
						Game.blinkBrickObjects({ 
							brickObjects: [pinballX == 0 ? pinballCatcher1: pinballCatcher2, pinball],
							interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize); }
						});
					}
					else {
						var isBumped = false;
						do {
							var oldPinballDirection = pinballDirection;
							if (pinballDirection == "TopRight") {
								if (pinballY == 0 || hasPinballTile(pinballX, pinballY - 1)) 
									pinballDirection = "BottomRight";
								else if (isPinballCaught(pinballX + 1, pinballY) || hasPinballTile(pinballX + 1, pinballY)) 
									pinballDirection = "TopLeft";
								else if (isPinballCaught(pinballX + 1, pinballY - 1) || hasPinballTile(pinballX + 1, pinballY - 1)) 
									pinballDirection = "BottomLeft"
							}
							else if(pinballDirection == "BottomRight") {
								if ((pinballY == 9 || hasPinballTile(pinballX, pinballY + 1))) 
									pinballDirection = "TopRight";
								else if (isPinballCaught(pinballX + 1, pinballY) || hasPinballTile(pinballX + 1, pinballY)) 
									pinballDirection = "BottomLeft";
								else if (isPinballCaught(pinballX + 1, pinballY + 1) || hasPinballTile(pinballX + 1, pinballY + 1)) 
									pinballDirection = "TopLeft";
							}
							else if(pinballDirection == "BottomLeft") {
								if ((pinballY == 9 || hasPinballTile(pinballX, pinballY + 1))) 
									pinballDirection = "TopLeft";
								else if (isPinballCaught(pinballX - 1, pinballY) || hasPinballTile(pinballX - 1, pinballY)) 
									pinballDirection = "BottomRight";
								else if (isPinballCaught(pinballX - 1, pinballY + 1) || hasPinballTile(pinballX - 1, pinballY + 1)) 
									pinballDirection = "TopRight";
							}
							else if(pinballDirection == "TopLeft") {
								if (pinballY == 0 || hasPinballTile(pinballX, pinballY - 1)) 
									pinballDirection = "BottomLeft";
								else if (isPinballCaught(pinballX - 1, pinballY) || hasPinballTile(pinballX - 1, pinballY)) 
									pinballDirection = "TopRight";
								else if (isPinballCaught(pinballX - 1, pinballY - 1) || hasPinballTile(pinballX - 1, pinballY - 1)) 
									pinballDirection = "BottomRight";
							}
							isBumped = oldPinballDirection != pinballDirection;
						} while(isBumped);
						if (pinballTile.tileCount() > 0) {
							switch(pinballDirection) {
								case "BottomLeft":
									pinballX -= 1; pinballY += 1;
									break;
								case "TopLeft":
									pinballX -= 1; pinballY -= 1;
									break;
								case "TopRight":
									pinballX += 1; pinballY -= 1;
									break;
								case "BottomRight":
									pinballX += 1; pinballY += 1;
									break;
								default:
									break;
							}
							pinball.setLocation(pinballX, pinballY);
							if (pinballY == 0 || pinballY == 9) GameSound.move2();
						}
					}
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { moveCatcher("Top"); },
					onBottom: function() { moveCatcher("Bottom"); },
					onSpace: {
						action: function() {
							if (!isPinballThrown) { isPinballThrown = true; pinballThrowAnim.start(); }
							pinballThrowAnim.setTimerInterval(20);
						},
						allowRepeat: false
					}
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() { pinballThrowAnim.setTimerInterval(speedInMillis); },
				}

				initialize();
			}
		},
		{
			character: 'G', gameType: "cross", mode: 6, score: 0, speedTimeout: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var crossers = [], crosser;
				var obstacles = [];
				var moveObstacleAnim = new Timer({ func: moveObstacle, interval: 500 });
				var crosser = new BrickObject({ tiles: getBrickTiles("singleTile"), color: "Green" });
				
				// FUNCTIONS
				function initialize() {
					crossers = [];
					crosser.setLocation(19, 4);
					loadWays();
					loadWalls(); 
				}

				function loadWalls() {
					for (var i = 2; i < 19; i += 2) new BrickObject({ tiles: getBrickTiles("verticalLine"), brickLocation: { x: i, y: 0 } });
				}
				function loadObstacles1() {
					var no = undefined;
					for (var i = 3; i < 18; i += 2) {
						var way = Math.floor(Math.random() * 100);
						if (no == undefined) {
							way = way % 10;
						}
						else {
							way = way % 9;
							way = (no - 4) + way;
							if (way < 0) way = 0;
							if (way > 9) way = 9;
						}
						no = way;
						var startObsLoad = Math.floor(Math.random() * 100) % 2 == 0;
						var obsNo = undefined;
						for (var j = 0; j < 10; j++) {
							
							//var obs = Math.floor(Math.random() * 100) % 3;

						    if (obsNo == undefined || j > obsNo) {
						    	var count = (Math.floor(Math.random() * 100) % 4) + 1;
						    	obsNo = j + no;
					    		startObsLoad = !startObsLoad;
					    	}

						    if (startObsLoad) {
						    	obstacles.push($game.newBrickObject({
									name: "singleTile", brickLocation: { x: i, y: j }, color: "blue"
								}));
						    }



							// if (obs == 1) obstacles.push($game.newBrickObject({
							// 	name: "singleTile", brickLocation: { x: i, y: j }, color: "blue"
							// }));

							// if (j != way && obs != 1) obstacles.push($game.newBrickObject({
							// 	name: "singleTile", brickLocation: { x: i, y: j }, color: "blue"
							// }));
						}
					}
					obstacles.sort(function(a, b) {
						return b.getLocation().y - a.getLocation().y;
					});
				}
				function loadObstacles() {
					for (var i = 3; i < 18; i += 2) {
						var j = 0;
						while (j < 10) {
							j = (Math.floor(Math.random() * 100) % 5) + j;
							tileCount = (Math.floor(Math.random() * 100) % 5);
							var tiles = [];
							for (var t = 0; t < tileCount; t++) {
								tiles.push({ x: 0, y: t });
							}
							new BrickObject({ tiles: tiles, brickLocation: { x: i, y: j }, color: "blue" });
							j += tileCount;
						}
					}
				}
				function moveObstacle() {
					

					for (var i = 0; i < obstacles.length; i++) {
						var obsLocation = obstacles[i].getLocation();
						obsLocation.y = obsLocation.y == 9 ? 0: obsLocation.y + 1;
						obstacles[i].setLocation(obsLocation.x, obsLocation.y);
					}

					var crosserLoc = crosser.getLocation();

					if (crosserLoc.x < 19) {
						if (crosserLoc.y == 9) {
							gameOver();
						}
						else {
							crosserLoc.y++;
							crosser.setLocation(crosserLoc.x, crosserLoc.y);
						}
					}
				}
				function moveCrosser(direction) {
					var location = crosser.getLocation();
					GameSound.move();
					switch(direction) {
						case "Left":
							location.x = location.x == 1 ? 0: location.x - 2;
							//crosser.setLocation(location.x, location.y);
							// if (location.x == 0) {
							// 	// var bumpedCrosser = $game.willBeOverlappedBy(crosser).first();
							// 	// if(bumpedCrosser == null || bumpedCrosser == undefined) {
							// 	// 	crossers.push(crosser);
							// 	// 	GameSound.score(); $game.score();
							// 	// 	if(crossers.length == 10) Game.levelUp();
							// 	// 	else addCrosser();
							// 	// }
							// 	// else {
							// 	// 	gameOver();
							// 		// GameSound.explosion();
							// 		// $game.blinkBrickObjects({ brickObjects: [bumpedCrosser, crosser], interval: 400, count: 3, endFunction: $game.gameOver });
							// 	//}

							// 	crossers.push(crosser);
							// 	GameSound.score(); $game.score();
							// 	if(crossers.length == 10) Game.levelUp();
							// 	else addCrosser();
							// }
							break;
						case "Right":
							location.x = location.x == 19 ? 19: location.x + 2;
							//crosser.setLocation(location.x, location.y);
							break;
						case "Up":
							//if (location.x != 19 && location.y == 0) gameOver();
							//location.y = location.y == 0 ? 0: location.y - 1;
							location.y = location.y - (!(location.x == 19 && location.y == 0)) * 1;
							//else crosser.setLocation(location.x, location.y);
							break;
						case "Down":
							//if (location.x != 19 && location.y == 9) gameOver();
							//location.y = location.y == 9 ? 9: location.y + 1;
							location.y = location.y + (!(location.x == 19 && location.y == 9)) * 1;
							//else crosser.setLocation(location.x, );
							break;
						default:
							break;
					}
					

					if (((location.y < 0 || location.y > 9) && location.x < 19)) {
						gameOver();
					}
					else {
						crosser.setLocation(location.x, location.y);

						var willOverlap = crosser.isOverlapped();

						if (willOverlap) gameOver();
						else {
							if (location.x == 0) {
								crossers.push(crosser);
								GameSound.score(); Game.score();
								if(crossers.length == 10) {
									stop();
									Game.levelUp();
								}
								else addCrosser();		
							}
						}	
					}
				}
				function gameOver() {
					stop();
					GameSound.explosion();
					Game.blinkBrickObjects({ brickObjects: [crosser], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
				}

				function loadWays() {
					var ways = [];
					for (var i = 0; i < 8; i++) {
						var way = Math.floor(Math.random() * 100);
						if (i == 0) {
							way = way % 10;
						}
						else {
							way = (way % 9) + (4 - ways.last());
						}
						ways.push(way);
					}
					console.log(ways);
					return ways;
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { moveCrosser("Left"); },
					onRight: function() { moveCrosser("Right"); },
					onTop: function() { moveCrosser("Up"); },
					onBottom: function() { moveCrosser("Down"); },
					onSpace: function() { moveCrosser("Left"); },
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() {  }
				}

				// INITIALIZATION
				loadObstacles();
				initialize();
				//moveObstacleAnim.start();
			}
		},
		{
			character: 'H', gameType: "unnamed1", mode: 7, score: 0, speedTimeout: [2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100],
			load: function($game) {
				// DECLARATIONS
				var position = 4;
				var soldierObject = new BrickObject({ tiles: getBrickTiles("soldierTile") });
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var params = {}, fallenTiles = [];

				if(level == 9) {
					params = {
						tiles: (function() {
							var tiles = [];
							for (var x = 0; x < 7; x++) { 
								for (var y = 0; y < 10; y++) if(Math.round(Math.random() * 100) % 2 == 0) tiles.push({ x: x, y: y });
							}
							return tiles;
						})()
					}
				}
				else params = { tiles: getBrickTiles("pinballTileLevel" + level.toString()) }
				params.brickLocation = { x: 0, y: 0 };

				var pinballTile = {};
				var movePinballTileAnim = new Timer({ func: movePinballTile, interval: speedInMillis });

				// FUNCTIONS
				function initialize() {
					position = 4;
					fallenTiles = [];
					removeBrickObjectsBut(soldierObject);
					pinballTile = new BrickObject(params);
					soldierObject.setLocation(18, 4);
					movePinballTileAnim.start();
				}

				function levelUp() { pinballTile.remove(); stop(); Game.levelUp(); }
				function gameOver(fallenTile) {
					stop();
					if(fallenTile != undefined) fallenTile.remove();
					GameSound.explosion();
					Game.blinkBrickObjects({ brickObjects: [soldierObject], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
				}
				function moveSoldier(direction) {
					position = soldierObject.getLocation().y;
					switch(direction) {
						case "Up":
							if (position > -1) position--;
							break;
						case "Down":
							if (position < 8) position++;
							break;
						default:
							break;
					}
					soldierObject.setLocation(18, position);
				}
				function movePinballTile() {
					var location = pinballTile.getLocation();
					var brickWidth = pinballTile.getSize().width - 1;

					if (location.x + brickWidth == 17) gameOver();
					else {
						pinballTile.setLocation(location.x + 1, location.y);
						var fallenTileDirection = Math.floor(Math.random() * 100) % 2 == 0 ? "TopRight": "BottomRight";
						var fallTileAnim = new Timer({ func: function() { fallTile(fallenTile) }, interval: 100 });
						var fallenTile = pinballTile.getSideTiles("Right").first();
						pinballTile.removeTile(fallenTile.screenX, fallenTile.screenY);
						if (pinballTile.tileCount() == 0) pinballTile.remove();
						fallenTile = new BrickObject({
							tiles: getBrickTiles("singleTile"), brickLocation: { x: fallenTile.screenX, y: fallenTile.screenY },
							color: "red", onRemove: function() { fallTileAnim.stop(); fallTileAnim.dispose() }
						});
						fallenTiles.push(fallenTile);
						fallTileAnim.start();

						function fallTile(fallenTile) {
							var location = fallenTile.getLocation();
							location.x++;
							if (location.y == 0) fallenTileDirection = "BottomRight";
							else if (location.y == 9) fallenTileDirection = "TopRight";
							switch (fallenTileDirection) {
								case "TopRight":
									location.y--;
									break;
								case "BottomRight":
									location.y++;
									break;
							}
							if (soldierObject.hasTile(location.x, location.y) || soldierObject.hasTile(location.x, location.y)) gameOver(fallenTile);
							else {
								fallenTile.setLocation(location.x, location.y);
								if (location.x == 20) {
									fallenTile.remove();
									fallenTiles.splice(fallenTiles.indexOf(fallenTile), 1);
									if (pinballTile.tileCount() == 0) levelUp();
								}
							}
						}
					}	
				}
				function fire() {
					var fallenTile = fallenTiles.filter(function(ft) { return ft.getLocation().y == position + 1; })
						.sort(function(t1, t2) { return t1.x - t2.x; }).first();
					GameSound.fire();
					if (fallenTile != undefined) {
						fallenTile.remove();
						fallenTiles.splice(fallenTiles.indexOf(fallenTile), 1);
						Game.score();
					}
					else if (pinballTile.removeSideTile("Right", position + 1)) Game.score();
					if (pinballTile.tileCount() == 0 && fallenTiles.length == 0) levelUp();
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { moveSoldier("Up"); },
					onBottom: function() { moveSoldier("Down"); },
					onSpace: function() { fire(); },
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() {  }
				}

				// INITIALIZATION
				initialize();
			}
		},
		{
			character: 'I', gameType: "snake", mode: 8, score: 0, speedTimeout: [550, 500, 450, 400, 350, 300, 250, 200, 150, 100],
			load: function() {
				// DECLARATIONS
				var gameLevelTiles = [
				{ snake: { location: { x: 4, y: 9 }, direction: "Right" }, obstacles: [] },
				{
					snake: { location: { x: 11, y: 6 }, direction: "Right" },
					obstacles: [
						{ name: "rightTile1", location: { x: 0, y: 0 }, rotateDirection: "Down" }, 
						{ name: "rightTile1", location: { x: 18, y: 0 }, rotateDirection: "Left" },
						{ name: "rightTile1", location: { x: 18, y: 8 }, rotateDirection: "Up" },
						{ name: "rightTile1", location: { x: 0, y: 8 }, rotateDirection: "Right" },
						{ name: "squareTile1", location: { x: 9, y: 4 } }
					]
				},
				{
					snake: { location: { x: 11, y: 6 }, direction: "Right" },
					obstacles: [
						{ name: "twentyByOne", location: { x: 0, y: 0 }, rotateDirection: "Right" }, 
						{ name: "twentyByOne", location: { x: 0, y: 9 }, rotateDirection: "Right" }, 
						{ name: "eightByOne", location: { x: 0, y: 1 }, rotateDirection: "Up" }, 
						{ name: "eightByOne", location: { x: 19, y: 1 }, rotateDirection: "Up" }, 
					]
				},
				{
					snake: { location: { x: 11, y: 5 }, direction: "Right" },
					obstacles: [
						{ name: "eightByOne", location: { x: 0, y: 3 } }, { name: "eightByOne", location: { x: 12, y: 6 } }, 
						{ name: "rightTile2", location: { x: 12, y: 0 }, rotateDirection: "Right" }, 
						{ name: "rightTile2", location: { x: 0, y: 6 }, rotateDirection: "Left" }, 
					]
				},
				{ snake: { location: { x: 2, y: 9 }, direction: "Left" }, obstacles: [{ name: "crossTile1", location: { x: 0, y: 0 } }] },
				{
					snake: { location: { x: 11, y: 5 }, direction: "Right" },
					obstacles: [
						{ name: "squareTile1", location: { x: 9, y: 0 } }, { name: "squareTile1", location: { x: 9, y: 8 } }, 
						{ name: "tenByOne", location: { x: 5, y: 3 } }, { name: "tenByOne", location: { x: 5, y: 6 } },  
					]
				},
				{
					snake: { location: { x: 4, y: 9 }, direction: "Right" },
					obstacles: [
						{ name: "threeByTwo", location: { x: 2, y: 4 } }, { name: "threeByTwo", location: { x: 15, y: 4 } },
						{ name: "sixByOne", location: { x: 8, y: 2 }, rotateDirection: "Up" }, 
						{ name: "sixByOne", location: { x: 11, y: 2 }, rotateDirection: "Up" },  
					]
				},
				{
					snake: { location: { x: 4, y: 9 }, direction: "Right" },
					obstacles: [
						{ name: "eightByTwo", location: { x: 8, y: 4 } }, 
						{ name: "cTile1", location: { x: 2, y: 2 }, rotateDirection: "Right" }, 
						{ name: "cTile1", location: { x: 14, y: 2 }, rotateDirection: "Left" },  
					]
				},
				{
					snake: { location: { x: 11, y: 5 }, direction: "Right" },
					obstacles: [
						{ name: "fourteenByOne", location: { x: 3, y: 0 } }, { name: "fourteenByOne", location: { x: 3, y: 3 } }, 
						{ name: "fourteenByOne", location: { x: 3, y: 6 } },{ name: "fourteenByOne", location: { x: 3, y: 9 } },  
						{ name: "sixByOne", location: { x: 0, y: 2 }, rotateDirection: "Up" },  
						{ name: "sixByOne", location: { x: 19, y: 2 }, rotateDirection: "Up" },  
					]
				},
				{
					snake: { location: { x: 6, y: 8 }, direction: "Right" },
					obstacles: [
						{ name: "fourByOne", location: { x: 5, y: 3 }, rotateDirection: "Up" }, 
						{ name: "fourByOne", location: { x: 8, y: 3 }, rotateDirection: "Up" }, 
						{ name: "fourByOne", location: { x: 11, y: 3 }, rotateDirection: "Up" },
						{ name: "fourByOne", location: { x: 14, y: 3 }, rotateDirection: "Up" },  
						{ name: "sixByOne", location: { x: 0, y: 2 }, rotateDirection: "Up" },  
						{ name: "sixByOne", location: { x: 19, y: 2 }, rotateDirection: "Up" },  
						{ name: "twelveByOne", location: { x: 4, y: 0 } }, { name: "twelveByOne", location: { x: 4, y: 9 } },  
					]
				}];
				var isCrawling = false;
				var snakeObject = [], obstacles = [];
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var direction = "";
				var currentDirection = direction;
				var snakeLocation = {};
				var foodObject = new BrickObject({ tiles: [{ x: 0, y: 0 }], color: "Red" });
				var snakeCrawlAnim = new Timer({ func: crawlSnake });
				var currentScore = 0;
				
				// FUNCTIONS
				function initialize() {
					isCrawling = false;
					direction = gameLevelTiles[level - 1].snake.direction;
					currentDirection = direction;
					snakeObject = [];
					currentScore = BrickGameModel.getScore();
					snakeLocation = gameLevelTiles[level - 1].snake.location;
					snakeCrawlAnim.setTimerInterval(speedInMillis);
					removeBrickObjectsBut(obstacles, [foodObject]);
					loadSnake(); loadFood(); snakeCrawlAnim.start();
				}

				function loadSnake() {
					var t = 1;
				    snakeObject = [new BrickObject({ tiles: [{ x: 0, y: 0 }], color: "Green" })];
				    snakeObject[0].setLocation(snakeLocation.x, snakeLocation.y);
				    while(t < 5) {
				    	var x;
				    	if(direction == "Right") x = snakeLocation.x - t;
				    	else x = snakeLocation.x + t;
				    	snakeObject.push(new BrickObject({ tiles: [{ x: 0, y: 0 }], color: "Black" }));
				    	snakeObject[snakeObject.length - 1].setLocation(x, snakeLocation.y);
				    	t++;
				    }
				}
				function loadObstacles() {
					gameLevelTiles[BrickGameModel.getLevel() - 1].obstacles.forEach(function(gt) {
						obstacles.push(new BrickObject({ tiles: getBrickTiles(gt.name), brickLocation: gt.location, rotateDirection: gt.rotateDirection }));
					});
				}
				function loadFood() {
					var foodX = 0, foodY = 0;
					var foodNotLoaded = false;
					do { 
						foodX = Math.round(Math.random() * 100) % 20; 
						foodY = Math.round(Math.random() * 100) % 10; 
						foodNotLoaded = foodObject.tryLocation(foodX, foodY).length > 0;
						console.log(foodNotLoaded);
					}
					while(foodNotLoaded)
				}
				function crawlSnake() {
					var location = snakeObject[0].getLocation(), foodLocation = foodObject.getLocation();
					var x = location.x, y = location.y;
					var isCollided = false;
					currentDirection = direction;
					
					switch(currentDirection) {
						case "Right":
							x++; if(x == 20) x = 0;
							break;
						case "Up":
							y--; if(y < 0) y = 9;
							break;
						case "Left":
							x--; if(x < 0) x = 19;
							break;
						case "Down":
							y++; if(y == 10) y = 0;
							break;
						default:
							break;
					}
					var collidedObject = getBrickObjectsByScreenTile(x, y).first();
					var isCollided = collidedObject != undefined;
					var isFoodEaten = areEqual(collidedObject, foodObject);
					if (isCollided && !isFoodEaten) { 
						stop();
						GameSound.explosion();
						Game.blinkBrickObjects({ brickObjects: snakeObject, interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
					}
					else {
						if(isFoodEaten) {
							console.log("food is eaten");
							var tailLocation = snakeObject[snakeObject.length - 1].getLocation(); loadFood();
							snakeObject.push(new BrickObject({ tiles: getBrickTiles("singleTile"), color: "Black" }));
							GameSound.score(); Game.score();
							var score = BrickGameModel.getScore();
							if (score == currentScore + 30) {
								stop();
								Game.levelUp();
							}
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
				function changeDirection(_direction) {
					if(_direction == undefined) _direction = direction;
					if(((currentDirection == "Right" && _direction != "Left") ||
						(currentDirection == "Left" && _direction != "Right") ||
						(currentDirection == "Up" && _direction != "Down") || 
						(currentDirection == "Down" && _direction != "Up"))) { 
							GameSound.move(); snakeCrawlAnim.setTimerInterval(50);
							direction = _direction; isCrawling = true;
						}
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: { action: function() { changeDirection("Left") }, allowRepeat: false },
					onRight: { action: function() { changeDirection("Right"); }, allowRepeat: false },
					onTop: { action: function() { changeDirection("Up"); }, allowRepeat: false },
					onBottom: { action: function() { changeDirection("Down"); }, allowRepeat: false },
					onSpace: { action: function() { changeDirection(); }, allowRepeat: false }
				}
				this.keyupfunctions = { 
					onLeft: function() { if(isCrawling) { snakeCrawlAnim.setTimerInterval(speedInMillis); isCrawling = false; } },
					onRight: function() { if(isCrawling) { snakeCrawlAnim.setTimerInterval(speedInMillis); isCrawling = false; } },
					onTop: function() { if(isCrawling) { snakeCrawlAnim.setTimerInterval(speedInMillis); } isCrawling = false; },
					onBottom: function() { if(isCrawling) { snakeCrawlAnim.setTimerInterval(speedInMillis); isCrawling = false; } },
					onSpace: function() { if(isCrawling) { snakeCrawlAnim.setTimerInterval(speedInMillis); isCrawling = false; } } 
				}

				// INITIALIZATION
				loadObstacles(); 
				initialize();
			},
		},
		{
			character: 'J', gameType: 'unnamed2', mode: 7, score: 0, speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis(), firstObstacle = 6;
				var _obstacle1 = [], _obstacle2 = [];
				var myCar = new BrickObject({ tiles: getBrickTiles("carTile") });
				var moveRoadAnim = new Timer({ func: moveRoad, interval: speedInMillis });
				var wall1 = new BrickObject({ tiles: getBrickTiles("twentyByOne"), brickLocation: { x: 0, y: 0 } });
				var wall2 = new BrickObject({ tiles: getBrickTiles("twentyByOne"), brickLocation: { x: 0, y: 9 } });

				// FUNCTIONS
				function initialize() {
					firstObstacle = 6;
					_obstacle1 = []; _obstacle2 = [];
					removeBrickObjectsBut(wall1, wall2);
					myCar.setLocation(16, 5);
					loadObstacles(); GameSound.carSound1(true); moveRoadAnim.start();
				}

				function loadIndividualObstacle(x, topObstacleCount) {
					var _o1 = [], _o2 = [], bottomObstacleCount = 3 - topObstacleCount;
					for (var i = 1; i < topObstacleCount + 1; i++)
						_o1.push(new BrickObject({ tiles: getBrickTiles("sixByOne"), brickLocation: { x: x, y: i } }));
					for (var i = 8; i > 8 - bottomObstacleCount; i--)
						_o2.push(new BrickObject({ tiles: getBrickTiles("sixByOne"), brickLocation: { x: x, y: i } }));
					return { o1: _o1, o2: _o2 };
				}
				function loadObstacles() {
					for (var i = 0; i < 4; i++) {
						var obt = loadIndividualObstacle(i * 6, 3);
						_obstacle1.push(obt.o1); _obstacle2.push(obt.o2);
					}
				}
				function moveRoad() {
					var willCollide = myCar.getCollidedObjects("Left").left.length > 0;
					var willOverlap = myCar.isOverlapped();
					if (willCollide || willOverlap) gameOver();
					else {
						var lastTopObstacle = _obstacle1.last(), lastBottomObstacle = _obstacle2.last();
						if (firstObstacle == 6) {
							var upperObstacleCount = Math.floor(Math.random() * 100) % 4;
							var obstacleCount = _obstacle1.first().length;
							if (obstacleCount == 3 && upperObstacleCount == 0) upperObstacleCount++;
							else if (obstacleCount == 0 && upperObstacleCount == 3) upperObstacleCount--;
							var obt = loadIndividualObstacle(-6, upperObstacleCount);
							_obstacle1.unshift(obt.o1); _obstacle2.unshift(obt.o2);
							firstObstacle = 0;
						}
						firstObstacle++;
						for (var i = _obstacle1.length - 1; i >= 0; i--) {
							var x = undefined;
							for (var j = 0; j < _obstacle1[i].length; j++) {
								x = x == undefined ? _obstacle1[i][j].getLocation().x: x;
								_obstacle1[i][j].setLocation(x + 1, j + 1);
							}
						}
						for (var i = _obstacle2.length - 1; i >= 0; i--) {
							var x = undefined, y = undefined;
							for (var j = 0; j < _obstacle2[i].length; j++) {
								x = x == undefined ? _obstacle2[i][j].getLocation().x: x;
								y = y == undefined ? _obstacle2[i][j].getLocation().y: y;
								_obstacle2[i][j].setLocation(x + 1, y - j);
							}
						}
						if ((lastTopObstacle.first() != undefined && lastTopObstacle.first().isGottenOutOfScreen()) || 
							(lastBottomObstacle.first() != undefined && lastBottomObstacle.first().isGottenOutOfScreen())) {
							if (lastTopObstacle != undefined)
								for (var i = 0; i < lastTopObstacle.length; i++) lastTopObstacle[i].remove();
							if (lastBottomObstacle != undefined)
								for (var i = 0; i < lastBottomObstacle.length; i++) lastBottomObstacle[i].remove();
							_obstacle1.pop(); _obstacle2.pop(); Game.score();
						}
					}
				}
				function gameOver() {
					GameSound.explosion(); stop();
					Game.blinkBrickObjects({ brickObjects: [myCar], interval: 400, count: 3, endFunction: function() { Game.lifeLost(initialize) } });
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { myCar.setLocation(16, myCar.getLocation().y - 1); },
					onBottom: function() { myCar.setLocation(16, myCar.getLocation().y + 1); },
					onSpace: { action: function() { moveRoadAnim.setTimerInterval(50); }, allowRepeat: false }
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() { moveRoadAnim.setTimerInterval(speedInMillis); }
				}

				// INITIALIZATION
				initialize();
			}
		},
		{
			character: 'K', gameType: "match", mode: 9, score: 0, speedTimeout: [1000, 940, 880, 820, 760, 700, 640, 580, 520, 460],  
			load: function() {
				// DECLARATIONS
				var brickTiles = [
					[{ x: 0, y: 1 }],
					[{ x: 0, y: 1 }, { x: 0, y: 0 }],
					[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
					[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }]
				];
				var speedInMillis = BrickGameModel.getSpeedInMillis();
				var brickMatches = [0, 0, 0], brickToMatch = [];
				var brickObjects = [], matchBrickObjects = [];
				var brickLocation = BrickGameModel.getLevel();
				var brickInvasionAnim = new Timer({
					func: function() {
						if (brickLocation >= 15 && (brickObjects[0].getCollidedObjects("Left").left.length > 0 ||
							brickObjects[1].getCollidedObjects("Left").left.length > 0 ||
							brickObjects[2].getCollidedObjects("Left").left.length > 0)) {
							stop();
							GameSound.explosion();
							Game.blinkBrickObjects({
								brickObjects: matchBrickObjects.concat(brickObjects), interval: 400, count: 3, endFunction: function() {
									Game.lifeLost(initialize);
								}
							})
						}
						else {
							brickLocation++;
							setBrickTileToMatchLocations(brickLocation);
						}
					},
					interval: speedInMillis
				});
				var matchBricksAnim = new Timer({ 
					func: function() {
						var brickLocation = brickObjects[0].getLocation().x;
						var brickToMatchLocation = matchBrickObjects[0].getLocation().x;
						if(brickObjects[0].getCollidedObjects("Left").left.length > 0 ||
							brickObjects[1].getCollidedObjects("Left").left.length > 0 ||
							brickObjects[2].getCollidedObjects("Left").left.length > 0) {
							matchBricksAnim.stop();
							if(getMatch()) {
								stop(); GameSound.move2(); Game.score();
								brickObjects.forEach(function(bo) { bo.hide(); });
								Game.blinkBrickObjects({ brickObjects: matchBrickObjects, interval: 400, count: 3, endFunction: function() {
									var score = BrickGameModel.getScore();
									if (score % 30 == 0) { stop(); Game.levelUp(); }
									else startMatch();
								} });
							}
							else brickInvasionAnim.start();
							setBrickTileLocations(17);
						}
						else {
							brickLocation--; 
							setBrickTileLocations(brickLocation);
						}
					}, 
					interval: 10 
				});

				// FUNCTIONS
				function initialize() {
					 startMatch();
				}

				function loadMatches() { for (var i = 0; i < 3; i++) brickToMatch[i] = Math.round(Math.random() * 100) % 4; }
				function loadBrickTiles() {
					for (var i = 0; i < 3; i ++) {
						brickObjects.push(new BrickObject({}));
						matchBrickObjects.push(new BrickObject({ color: "Red" }));
					}
				}
				function setBrickTileLocations(x) { 
					for (var i = 0; i < 3; i ++) brickObjects[i].setLocation(x, 1 + (i * 3), brickTiles[brickMatches[i]]); 
				}
				function setBrickTileToMatchLocations(x) { 
					for (var i = 0; i < 3; i ++) matchBrickObjects[i].setLocation(x, 1 + (i * 3), brickTiles[brickToMatch[i]]); 
				}
				function startMatch() {
					brickLocation = BrickGameModel.getLevel();
					loadMatches();
					brickObjects.forEach(function(bo) { bo.show(); });
					setBrickTileLocations(17); setBrickTileToMatchLocations(brickLocation);
					brickInvasionAnim.start();
				}
				function changeBrickObject(number) {
					GameSound.move();
					brickMatches[number]++;
					if(brickMatches[number] > 3) brickMatches[number] = 0;
					brickObjects[number].setLocation(17, 1 + (number * 3), brickTiles[brickMatches[number]]);
				}
				function matchBricks() { if(!matchBricksAnim.isRunning()) { GameSound.fire2(); matchBricksAnim.start(); } }
				function getMatch() {
					var isMatched = true, a = 0;
					while(isMatched == true && a < 3) { isMatched = brickToMatch[a] == brickMatches[a]; a++; }
					return isMatched;
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { changeBrickObject(1); },
					onRight: function() { changeBrickObject(1); },
					onTop: function () { changeBrickObject(0); },
					onBottom: function() { changeBrickObject(2); },
					onSpace: function() { matchBricks(); },
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() {  },
				}

				// INITIALIZATION
				loadBrickTiles();
				initialize();
			},
		},
		{
			character: 'L', gameType: "race2", mode: 10, score: 0, speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
			load: function() {
				// DECLARATIONS
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var _road1 = [], cars = [];
				var myCar = undefined;
				var moveRoadAnim = new Timer({ func: moveRoad, interval: speedInMillis });

				// FUNCTIONS
				function initialize() {
					_road1 = []; cars = [];
					removeBrickObjectsBut(myCar);
					if (myCar == undefined) myCar = newCar(16, 7); else myCar.setLocation(16, 7);
					loadRoadAndCars();
					moveRoad();
					GameSound.carSound1(true);
					moveRoadAnim.start();
				}

				function newCar(x, y) { return new BrickObject({ tiles: getBrickTiles("carTile"), brickLocation: { x: x, y: y }, }); }
				function addCar() { return newCar(-4, ((Math.floor(Math.random() * 100) % 3) * 3) + 1); }
				function loadRoadAndCars() {
					for (var i = 0; i < 5; i++) _road1.push(newRoad(i * 4, 0));
					cars.push(addCar());
				}
				function moveRoad() {
					var lastCar = cars.last();
					var willCollide = myCar.getCollidedObjects("Left").left.length > 0;
					var willOverlap = myCar.isOverlapped();
					if (willCollide || willOverlap) {
						GameSound.explosion(); stop();
						Game.blinkBrickObjects({ brickObjects: [cars.last(), myCar], interval: 400, count: 3, endFunction: function() {
							Game.lifeLost(initialize);
						} });
					}
					else {
						var _firstRoad1 = _road1.first(), _lastRoad1 = _road1.last();
						for (var i = 0; i < _road1.length; i++) {
							var x = _road1[i].getLocation().x;
							_road1[i].setLocation(x == undefined ? i * 4: x + 1, 0);
						}
						if (_firstRoad1.getLocation().x == 2) {
							var _r1 = newRoad(-2, 0);
							_road1.unshift(_r1);
						}
						if (_lastRoad1.isGottenOutOfScreen()) { _lastRoad1.remove(); _road1.pop(); }
						for (var i = 0; i < cars.length; i++) {
							var location = cars[i].getLocation();
							cars[i].setLocation(location.x + 1, location.y);
						}
						if(cars.first().getLocation().x == 6) cars.unshift(addCar());
						if(lastCar.isGottenOutOfScreen()) { lastCar.remove(); cars.pop(); Game.score(); }
					}
				}

				function newRoad(x, y) {
					return new BrickObject({ tiles: getBrickTiles("tripleTiles"), color: "red", brickLocation: { x: x, y: y } });
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { var y = myCar.getLocation().y; myCar.setLocation(16, y == 1 ? 1: y - 3) },
					onBottom: function() { var y = myCar.getLocation().y; myCar.setLocation(16, y == 7 ? 7: y + 3); },
					onSpace: { action: function() { moveRoadAnim.setTimerInterval(50); }, allowRepeat: false }
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() { moveRoadAnim.setTimerInterval(speedInMillis); }
				}

				// INITIALIZATION
				initialize();
			}
		},
		{
			character: 'M', gameType: "pinball3", mode: 3, score: 0, speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
			load: function($game) { 

				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var pinballCatcher = new BrickObject({ tiles: getBrickTiles("quadrupleTiles") });
				var pinball = new BrickObject({ tiles: getBrickTiles("singleTile"), color: "Green" });
				var pinballCounterCatcher = new BrickObject({ tiles: getBrickTiles("threeByOne"), color: "blue", rotateDirection: "Up" });
				var topObstacle = new BrickObject({ tiles: getBrickTiles("pinballTile2Level" + level), brickLocation: { x: 0, y: 0 } });
				var moveCounterCatcherAnim = new Timer({ func: moveCounterCatcher, interval: 333 });
				var isPinballThrown = false;
				var level = BrickGameModel.getLevel(), speedInMillis = BrickGameModel.getSpeedInMillis();
				var pinballDirection = "BottomLeft";
				var pinballThrowAnim = new Timer({ func: throwPinball, interval: speedInMillis });
				var alt = true;

				function initialize() {
					pinball.setLocation(18, 5);
					pinballCatcher.setLocation(19, 3);
					pinballCounterCatcher.setLocation(8, 2);
					isPinballThrown = false;
					pinballDirection = "BottomLeft";
					alt = true;
					moveCounterCatcherAnim.start();
				}

				function moveCounterCatcher() {
					var loc = pinballCounterCatcher.getLocation();
					if(loc.y == 2) alt = true;
					else if (loc.y == 5) alt = false;

					if(alt) loc.y++;
					else loc.y--;

					pinballCounterCatcher.setLocation(loc.x, loc.y);
				}
				function isObstacleBumped(x, y) {
					var bumped = topObstacle.hasTile(x, y);
					if(bumped) GameSound.move2();
					return bumped;
				}
				function throwPinball() {
					var pinballLocation = pinball.getLocation();
					var pinballX = pinballLocation.x, pinballY = pinballLocation.y;
					if(pinballX == 19) {
						stop(); GameSound.explosion();
						Game.blinkBrickObjects({ 
							brickObjects: [pinballCatcher, pinball],
							interval: 400, count: 3, endFunction: function() {
								Game.lifeLost(initialize);
							}
						});
					}
					else {
						var isBumped = false;
						do {
							var oldPinballDirection = pinballDirection;
							if (pinballDirection == "TopRight") {
								if (pinballY == 0 || isPinballCaught(pinballX, pinballY - 1) || isObstacleBumped(pinballX, pinballY - 1)) 
									pinballDirection = "BottomRight";
								else if (isPinballCaught(pinballX + 1, pinballY) || isObstacleBumped(pinballX + 1, pinballY)) 
									pinballDirection = "TopLeft";
								else if (isPinballCaught(pinballX + 1, pinballY - 1) || isObstacleBumped(pinballX + 1, pinballY - 1)) 
									pinballDirection = "BottomLeft"
							}
							else if(pinballDirection == "BottomRight") {
								if (pinballY == 9 || isPinballCaught(pinballX, pinballY + 1) || isObstacleBumped(pinballX, pinballY + 1)) 
									pinballDirection = "TopRight";
								else if (isPinballCaught(pinballX + 1, pinballY) || isObstacleBumped(pinballX + 1, pinballY)) 
									pinballDirection = "BottomLeft";
								else if (isPinballCaught(pinballX + 1, pinballY + 1) || isObstacleBumped(pinballX + 1, pinballY + 1)) 
									pinballDirection = "TopLeft";
							}
							else if(pinballDirection == "BottomLeft") {
								if (pinballY == 9 || isPinballCaught(pinballX, pinballY + 1) || isObstacleBumped(pinballX, pinballY + 1)) 
									pinballDirection = "TopLeft";
								else if (isPinballCaught(pinballX - 1, pinballY) || isObstacleBumped(pinballX - 1, pinballY)) 
									pinballDirection = "BottomRight";
								else if (isPinballCaught(pinballX - 1, pinballY + 1) || isObstacleBumped(pinballX - 1, pinballY + 1)) 
									pinballDirection = "TopRight";
							}
							else if(pinballDirection == "TopLeft") {
								if (pinballY == 0 || isPinballCaught(pinballX, pinballY - 1) || isObstacleBumped(pinballX, pinballY - 1)) 
									pinballDirection = "BottomLeft";
								else if (isPinballCaught(pinballX - 1, pinballY) || isObstacleBumped(pinballX - 1, pinballY)) 
									pinballDirection = "TopRight";
								else if (isPinballCaught(pinballX - 1, pinballY - 1) || isObstacleBumped(pinballX - 1, pinballY - 1)) 
									pinballDirection = "BottomRight";
							}
							isBumped = oldPinballDirection != pinballDirection;
						} while(isBumped);
						switch(pinballDirection) {
							case "BottomLeft":
								pinballX -= 1; pinballY += 1;
								break;
							case "TopLeft":
								pinballX -= 1; pinballY -= 1;
								break;
							case "TopRight":
								pinballX += 1; pinballY -= 1;
								break;
							case "BottomRight":
								pinballX += 1; pinballY += 1;
								break;
							default:
								break;
						}
						pinball.setLocation(pinballX, pinballY);

						if (pinballY == 0 || pinballY == 9) GameSound.move2();

						if (pinballX == -1) {
							GameSound.score();
							Game.score();
							var score = BrickGameModel.getScore();
							if (score % 30 == 0) {
								stop();
								Game.levelUp();
							}
							else {
								pinballCatcher.setLocation(19, 3);
								pinball.setLocation(18, 5);
								pinballThrowAnim.stop();
								isPinballThrown = false;
							}
						}
					}
				}
				function isPinballCaught(x, y) {
					var catched = pinballCatcher.hasTile(x, y) || pinballCounterCatcher.hasTile(x, y);
					if (catched) GameSound.move();
					return catched;
				}
				function moveCatcher(direction) {
					var cy = pinballCatcher.getLocation().y;
					var pinballLocation = pinball.getLocation();
					var px = pinballLocation.x, py = pinballLocation.y;
					switch(direction) {
						case "Top":
							if(isPinballCaught(px + 1, py)) pinball.setLocation(18, cy == 0 ? py: py - 1);
							pinballCatcher.setLocation(19, cy == 0 ? 0: cy - 1);
							break;
						case "Bottom":
							if(isPinballCaught(px + 1, py)) pinball.setLocation(18, cy == 6 ? py: py + 1);
							pinballCatcher.setLocation(19, cy == 6 ? 6: cy + 1);
							break;
					}
				}

				// KEY FUNCTIONS
				this.keydownfunctions = {
					onLeft: function() { },
					onRight: function() { },
					onTop: function() { moveCatcher("Top"); },
					onBottom: function() { moveCatcher("Bottom"); },
					onSpace: {
						action: function() {
							if (!isPinballThrown) { isPinballThrown = true; pinballThrowAnim.start(); }
							pinballThrowAnim.setTimerInterval(20);
						},
						allowRepeat: false
					}
				}
				this.keyupfunctions = { 
					onLeft: function() {  },
					onRight: function() {  },
					onTop: function() {  },
					onBottom: function() {  },
					onSpace: function() { pinballThrowAnim.setTimerInterval(speedInMillis); }, 
				}

				initialize();
			}
		}
	];

	// WINDOW INITIALIZATION
	_window_.onload = function() {
		loadTiles(); loadLifeTiles(); GameSound.opening();
		new Marquee({ word: "BRICK GAME", onUnload: function() { GameProperties() } });
	}
	_window_.onkeydown = function() { GameKeys.onkeydown(event); }
	_window_.onkeyup = function() { GameKeys.onkeyup(event); }
})(window);

Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {s = "0" + s;}
	return s;
}

Array.prototype.insert = function(index, value) { this.splice(index, 0, value); return this; }
Array.prototype.first = function() { return this[0]; }
Array.prototype.last = function() { return this[this.length - 1]; }