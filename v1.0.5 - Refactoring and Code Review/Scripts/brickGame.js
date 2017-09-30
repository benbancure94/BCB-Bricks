(function(_window_) {

	var canvas = "white";

	/**** GLOBAL VARIABLES ****/
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
				{ x: 0, y: 1 },
				{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, 
				{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, 
			]
		},
		{
			name: "enemyTankTile",
			tiles: [
				{ x: 0, y: 1 },
				{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, 
				{ x: 2, y: 0 }, { x: 2, y: 2 }, 
			]
		},
		{ name: "singleTile", tiles: [ { x: 0, y: 0 } ] },
		{ name: "doubleTile", tiles: [ { x: 0, y: 0 }, { x: 0, y: 1 } ]},
		{ name: "tripleTiles", tiles: [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 } ] },
		{ name: "squareTile1", tiles: [ { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 } ] },
		{ name: "rightTile1", tiles: [{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 1}] },
		{ name: "quadrupleTiles", tiles: [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 } ] },
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
		{ name: "threeByTwo", tiles: [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }], },
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
		}
	];

	var GameSound = new function() {
		var soundOn = true;

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
			new Audio("Sounds/fire2.wav")
		];

		// LOAD SOUNDS
		this.opening = function() { play(0) };
		this.startGame = function() { play(1); };
		this.move = function() { play(2); };
		this.gameOver = function() { play(3); };
		this.explosion = function() { play(4); };
		this.move2 = function() { play(5); };
		this.fire = function() { play(6); };
		this.levelUp = function() { play(7); };
		this.score = function() { play(8); };
		this.carSound1 = function(loop) { play(9, loop) };
		this.fire2 = function() { play(10); };
		this.pause = function() { if (audio == undefined) throw new Error("Error: undefined"); };
		this.stop = function() { if (audio == undefined) throw new Error("Error: undefined"); };

		function play(index, loop) {
			if(soundOn) {
				if(selectedAudio != undefined && selectedAudio.currentTime > 0 && !selectedAudio.paused && !selectedAudio.ended && selectedAudio.readyState > 2) {
					selectedAudio.pause(); selectedAudio.currentTime = 0;
				}
				selectedAudio = audios[index];
				if (loop != undefined) selectedAudio.loop = loop;
				selectedAudio.play();
			}
		}
	};

	var brickGameModel = new function() {
		var level = 1, speed = 1, mode = 1, score = 0, gameNumber = 0, lives = 0, speedInMillis = 1000;
		var brickTiles = [], selectedGame = {};

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
	}

	/**** PRIVATE FUNCTIONS ****/
	function setCanvasColor(color){
		canvas = color;
		for (var i = 0; i < 20; i++) for (var j = 0; j < 10; j++) changeTileColor(i, j, color);
	}
	function changeTileColor(x, y, color) {
		var xCharacter = brickObjectTiles[x].name, yCharacter = brickObjectTiles[y].name;
		var tile = document.getElementById("tileCell" + xCharacter + yCharacter);
		tile.className = "outerTileCells outer" + color + "Color";
		tile.children[0].className = "tileCells " + color + "Color";
	}

	// LOAD TILES IN A SCREEN
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
			}
			mainContainer.appendChild(tileRow);
		};
	}
	function Marquee(params) {
		var word = params.word == undefined || params.word == null ? "": params.word;
		var speedInMillis = params.speedInMillis == undefined ? 300: params.speedInMillis;
		var onUnload = params.onUnload == undefined ? function() {}: params.onUnload;
		var chars = word.split("");
		var brickCharacters = [];
		var backColor = params.backColor == undefined ? "black": params.backColor;
		var foreColor = params.foreColor == undefined ? "white": params.foreColor;
		var t = 20;

		setCanvasColor(backColor);
		for (var i = 0; i < chars.length; i++) {
			var char = chars[i];
			var brickObjectTile = brickObjectTiles.filter(function(bt) { return bt.name == char }).first();
			var brickTiles = brickObjectTile.tiles;
			if(brickObjectTile.name != " ") {
				var lt = new BrickObject({ tiles: brickTiles, color: foreColor });
				lt.setLocation(20 + (i * 6), 2);
				brickCharacters.push(lt);
			}
		}
		var marquee = new Timer({ 
			func: function() {
				for(var i = 0; i < brickCharacters.length; i++) {
					var loc = brickCharacters[i].getLocation();
					loc.x--;
					if(loc.x < -(word.length * 6)) loc.x = 20;
					brickCharacters[i].setLocation(loc.x, loc.y);
				}
			}, 
			interval: speedInMillis
		});
		marquee.start();
		_window_.onkeydown = function() { marquee.stop(); setCanvasColor("white"); onUnload(); }
		_window_.onkeypress = function() { }
	}
	
	// START PAGE
	_window_.onload = function() {
		loadTiles();
		GameSound.opening();
		var brickGameMarquee = new Marquee({ word: "BRICK GAME", onUnload: function() { GameProperties() } });
	}

	var GameProperties = function() {
		var selectedGame;
		var selectedCharacterObject;
		var modeDigitObjects = [undefined, undefined];
		var setLevel = function(increment) { 
			var level;
			increment = increment == undefined ? true: increment; 
			if(increment == true) { level = brickGameModel.getLevel() + 1; brickGameModel.setLevel(level > 10 ? 1: level); }
			else { level = brickGameModel.getLevel() - 1; brickGameModel.setLevel(level < 1 ? 10: level); }
		};
		var setSpeed = function(increment) {
			var speed; 
			increment = increment == undefined ? true: increment; 
			if(increment == true) { speed = brickGameModel.getSpeed() + 1; brickGameModel.setSpeed(speed > 10 ? 1: speed); }
			else { speed = brickGameModel.getSpeed() - 1; brickGameModel.setSpeed(speed < 1 ? 10: speed); }
		};
		var selectGame = function(number) { 
			brickGameModel.setGameNumber(number == _games.length ? 0: number);
			selectedGame = _games[brickGameModel.getGameNumber()];
			brickGameModel.setScore(selectedGame.score);
			brickGameModel.setSelectedGame(selectedGame);
			var modeString = (selectedGame.mode == undefined ? 0: selectedGame.mode).pad(2);
			if (selectedCharacterObject != undefined) selectedCharacterObject.remove();
			if (modeDigitObjects[0] != undefined) modeDigitObjects[0].remove();
			if (modeDigitObjects[1] != undefined) modeDigitObjects[1].remove();
			selectedCharacterObject = showCharacters(selectedGame.character, 1, 2);
			modeDigitObjects[0] = showCharacters(modeString.substring(0, 1), 8, 2);
			modeDigitObjects[1] = showCharacters(modeString.substring(1, 2), 14, 2);
		}
		function showCharacters(character, x, y) {
			var characterTiles = brickObjectTiles.filter(function(l) { return l.name == character }).first().tiles;
			return new BrickObject({ tiles: characterTiles, color: "black", brickLocation: { x: x, y: y } });
		}

		// KEY FUNCTIONS
		_window_.onkeydown = function() {
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
					GameSound.startGame(); Game.load();
					break;
			}
		};
		_window_.onkeypress = function() {};
		_window_.onkeyup = function() {};
		selectGame(brickGameModel.getGameNumber());
	};

	var Game = new function() {

		var $game;

		var selectedGame = {};
		var timers = [];
		
		function _newBrickObject(params) {
			return new BrickObject(params);
		}
		function _disappear(brickObject) {
			console.log(selectedGame.brickObjects.indexOf(brickObject));
			selectedGame.brickObjects.splice(selectedGame.brickObjects.indexOf(brickObject), 1);
			brickObject.remove();
		}

		this.newBrickObject = function(params) {
			params = params == undefined ? {}: params;
			var brickTiles = brickObjectTiles.filter(function(t) { return t.name == params.name }).first();
			params.tiles = params.tiles == undefined ? (brickTiles == undefined ? []: brickTiles.tiles): params.tiles;
			var newBrickObject = new BrickObject(params);
			selectedGame.brickObjects.push(newBrickObject);
			newBrickObject.willPassThroughSide = params.willPassThroughSide ? true: params.willPassThroughSide;
			return newBrickObject;
		};
		this.newTimer = function(params) {
			var newTimer = new Timer(params);
			selectedGame.timers.push(newTimer);
			return newTimer;
		}
		this.areEqual = function(bo1, bo2) {
			return selectedGame.brickObjects.indexOf(bo1) == selectedGame.brickObjects.indexOf(bo2);
		}
		// this.getBrickObjects = function(name) {
		// 	name = name == undefined ? "": name;
		// 	var objs = selectedGame.brickObjects;
		// 	if(name != "") {
		// 		objs = objs.filter(function(obj) { return obj.getName() == name });
		// 	}
		// 	return objs;
		// }
		this.disappear = function(brickObject) {
			_disappear(brickObject);
		}
		this.willCollide = function(brickObject, direction, ...objectsBeCollided) {
			var xIncrement = 0, yIncrement = 0;
			var oppositeDirection = "Left";
			switch(direction) {
				case "Left":
					oppositeDirection = "Right";
					xIncrement = 1; yIncrement = 0;
					break;
				case "Right":
					oppositeDirection = "Left";
					xIncrement = -1; yIncrement = 0;
					break;
				case "Up":
					oppositeDirection = "Down";
					xIncrement = 0; yIncrement = 1;
					break;
				case "Down":
					oppositeDirection = "Up";
					xIncrement = 0; yIncrement = -1;
					break;
			}
			var brickObjectEdgeTiles = brickObject.getEdgeTiles(direction);
			var collidedObjects = objectsBeCollided.filter(function(co) {
				var willCollide = false;
				var tileCounter = 0;
				var edgeTiles = co.getEdgeTiles(oppositeDirection);
				while (tileCounter < brickObjectEdgeTiles.length && !willCollide) {
					willCollide = edgeTiles.filter(function(et) {
						return brickObjectEdgeTiles[tileCounter].screenX == et.screenX + xIncrement && brickObjectEdgeTiles[tileCounter].screenY == et.screenY + yIncrement;
					}).length > 0;
					tileCounter++;
				}
				return willCollide;
			});
			return collidedObjects.length > 0;
		}
		this.willBeCollidedBy = function(brickObject, direction) {
			var xIncrement = 0, yIncrement = 0;
			var oppositeDirection = "Left";
			switch(direction) {
				case "Left":
					oppositeDirection = "Right";
					xIncrement = 1; yIncrement = 0;
					break;
				case "Right":
					oppositeDirection = "Left";
					xIncrement = -1; yIncrement = 0;
					break;
				case "Up":
					oppositeDirection = "Down";
					xIncrement = 0; yIncrement = 1;
					break;
				case "Down":
					oppositeDirection = "Up";
					xIncrement = 0; yIncrement = -1;
					break;
			}
			var brickObjectEdgeTiles = brickObject.getEdgeTiles(direction);
			var collidedObjects = selectedGame.brickObjects.filter(function(bo) {
				return selectedGame.brickObjects.indexOf(brickObject) != selectedGame.brickObjects.indexOf(bo);
			}).filter(function(bo) {
				var edgeTiles = bo.getEdgeTiles(oppositeDirection);
				var willCollide = false;
				var tileCounter = 0;
				while (tileCounter < brickObjectEdgeTiles.length && !willCollide) {
					willCollide = edgeTiles.filter(function(et) {
						return brickObjectEdgeTiles[tileCounter].screenX == et.screenX + xIncrement && 
							brickObjectEdgeTiles[tileCounter].screenY == et.screenY + yIncrement;
					}).length > 0;
					tileCounter++;
				}
				return willCollide;
			});

			return collidedObjects;
		}
		this.willBeOverlappedBy = function(brickObject) {
			var brickTiles = brickObject.getTiles();
			var overLappedObjects = selectedGame.brickObjects.filter(function(bo){ 
				return selectedGame.brickObjects.indexOf(brickObject) != selectedGame.brickObjects.indexOf(bo);
			})/* selects brick objects except current brick object */.filter(function(bo) {

				var isOverlapped = false;
				var boTiles = bo.getTiles();
				var tileCounter = 0;

				while(tileCounter < boTiles.length && !isOverlapped) {
					isOverlapped = brickTiles.filter(function(bt) { 
						return bt.screenX == boTiles[tileCounter].screenX && bt.screenY == boTiles[tileCounter].screenY 
					}).length > 0;
					tileCounter++;
				}

				return isOverlapped;
			});
			return overLappedObjects;
		}
		this.load = function() {
			$game = this;
		    selectedGame = brickGameModel.getSelectedGame();
		    selectedGame.brickObjects = [];
		    selectedGame.timers = [];
			setCanvasColor("white");
			brickGameModel.setScore(0);
			brickGameModel.setSpeedInMillis(selectedGame.speedTimeout[brickGameModel.getSpeed() - 1]);

			console.log($game);

			var game = new selectedGame.load($game);

			gamekeydownfunctions = function() {

				var keydownfunctions = game.keydownfunctions;

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

				switch(event.key) {
					case "ArrowUp":
						//game.keydownfunctions.onTop();
						var onTop = keydownfunctions.onTop;
						if(onTop.allowRepeat || !event.repeat) onTop.action();
						break;
					case "ArrowDown":
						//game.keydownfunctions.onBottom();
						var onBottom = keydownfunctions.onBottom;
						if(onBottom.allowRepeat || !event.repeat) onBottom.action();
						break;
					case "ArrowLeft":
						//game.keydownfunctions.onLeft();
						var onLeft = keydownfunctions.onLeft;
						if(onLeft.allowRepeat || !event.repeat) onLeft.action();
						break;
					case "ArrowRight":
						//game.keydownfunctions.onRight();
						var onRight = keydownfunctions.onRight;
						if(onRight.allowRepeat || !event.repeat) onRight.action();
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
					case "ArrowUp":
						game.keyupfunctions.onTop();
						break;
					case "ArrowDown":
						game.keyupfunctions.onBottom();
						break;
					case "ArrowLeft":
						game.keyupfunctions.onLeft();
						break;
					case "ArrowRight":
						game.keyupfunctions.onRight();
						break;
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
		this.stop = function() {
			selectedGame.timers.forEach(function(t) { t.stop(); });
		}
		this.gameOver = function() {
			console.log("game over");
			GameSound.gameOver();
			var brickGameMarquee = new Marquee({
				word: "GAME OVER",
				onUnload: function() { GameProperties() }
			});
		};
		this.levelUp = function() {
			var level = brickGameModel.getLevel() + 1;
			brickGameModel.setLevel(level > 10 ? 1: level);
			GameSound.levelUp();
			var brickGameMarquee = new Marquee({
				word: "LEVEL UP",
				onUnload: function() { this.load() }
			});
		};
		this.blinkBrickObjects = function(params) {
			var brickObjects = params.brickObjects
			var interval = params.interval == undefined ? 1000: params.interval;
			var count = params.count; 
			var endFunction = params.endFunction == undefined ? function() { console.log("no function") }: params.endFunction;
			var isKeyLocked = params.isKeyLocked == undefined ? true: params.isKeyLocked;

			count = count * 2;
			var c = 0;
			if(isKeyLocked == true) _window_.onkeydown = function() {};
			var blinkTimeout = setInterval(function(){
				for(var a = 0; a < brickObjects.length; a++) brickObjects[a].toggleAppear();
				c++;
				if(count == c && count != undefined) { 
					clearTimeout(blinkTimeout);
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
		};
		this.lockKey = function(isKeyLocked) {
			if (isKeyLocked) {
				_window_.onkeydown = function() {};
			}
			else {
				_window_.onkeydown = gamekeydownfunctions;
			}
		};
		this.move = function(brickObject, direction) {
			var oppositeDirection = "Right";
			var brickObjectEdgeTiles = brickObject.getEdgeTiles(direction);
			var brickLocation = brickObject.getLocation();
			var brickSize = brickObject.getSize();
			var xIncrement = 0, yIncrement = 0;

			switch(direction) {
				case "Left":
					oppositeDirection = "Right";
					if(brickLocation.x > 0 || brickObject.willPassThroughSide) brickLocation.x--;
					xIncrement = 1; yIncrement = 0;
					break;
				case "Right":
					oppositeDirection = "Left";
					if(brickLocation.x < 20 - brickSize.width || brickObject.willPassThroughSide) brickLocation.x++;
					xIncrement = -1; yIncrement = 0;
					break;
				case "Up":
					oppositeDirection = "Down";
					if(brickLocation.y > 0 || brickObject.willPassThroughSide) brickLocation.y--;
					xIncrement = 0; yIncrement = 1;
					break;
				case "Down":
					oppositeDirection = "Up";
					if(brickLocation.y < 10 - brickSize.height || brickObject.willPassThroughSide) brickLocation.y++;
					xIncrement = 0; yIncrement = -1;
					break;
			}

			var willCollide = selectedGame.brickObjects.filter(function(bo) {
				return selectedGame.brickObjects.indexOf(brickObject) != selectedGame.brickObjects.indexOf(bo);
			}).filter(function(bo) { 

				var boEdgeTiles = bo.getEdgeTiles(oppositeDirection);
				var tileCounter = 0;
				var willCollide = false;

				while (tileCounter < boEdgeTiles.length && !willCollide) {
					var bt = boEdgeTiles[tileCounter];
					willCollide = brickObjectEdgeTiles.filter(function(bet) { 
						return bet.screenX == bt.screenX + xIncrement && bet.screenY == bt.screenY + yIncrement;
					}).length > 0;
					tileCounter++;
				}

				// return brickObjectEdgeTiles.filter(function(bet) {
					// 	return bet.screenX == bt.screenX + xIncrement && bet.screenY == bt.screenY + yIncrement;
					// }).length > 0
			}).length > 0;

			if(!willCollide) {
				brickObject.setLocation(brickLocation.x, brickLocation.y);
			}
		}

		function _tryOverlap(brickObject, x, y) {
			brickObject.tryLocation(x, y);
			var brickObjectTiles = brickObject.getTiles();

			var overlappedObjects = selectedGame.brickObjects.filter(function(bo){ 
				return selectedGame.brickObjects.indexOf(brickObject) != selectedGame.brickObjects.indexOf(bo);
			}).filter(function(bo) {

				var isOverlapped = false;
				var boTiles = bo.getTiles();
				var tileCounter = 0;

				while(tileCounter < boTiles.length && !isOverlapped) {
					isOverlapped = brickObjectTiles.filter(function(bt) { 
						return bt.testScreenX == boTiles[tileCounter].screenX && bt.testScreenY == boTiles[tileCounter].screenY 
					}).length > 0;
					tileCounter++;
				}

				return isOverlapped;
			});
			return overlappedObjects;
		}

		// this.tryRotate = function(brickObject, direction) {
		// 	brickObject.tryRotate(direction);

		// 	var overLappedObjects = _tryOverlap(brickObject);
		// 	if (overLappedObjects.length == 0 && !brickObject.isGettingOutOfScreen()) {
		// 		brickObject.rotate(direction);
		// 	}
		// 	else {
		// 		var brickLocation = brickObject.getLocation();
		// 		switch (direction) {
		// 			case "Left":
		// 				brickLocation.x--;
		// 				break;
		// 			case "Right":
		// 				brickLocation.x++;
		// 				break;
		// 			case "Up":
		// 				brickLocation.y--;
		// 				break;
		// 			case "Down":
		// 				brickLocation.y++;
		// 				break;
		// 			default:
		// 				break;
		// 		}
		// 		brickObject.tryLocation(brickLocation.x, brickLocation.y);

		// 		overLappedObjects = _tryOverlap(brickObject);
		// 		if (overLappedObjects.length == 0 && !brickObject.isGettingOutOfScreen()) {
		// 			brickObject.setLocation(brickLocation.x, brickLocation.y)
		// 			brickObject.rotate(direction);
		// 		}
		// 	}
		// }

		this.tryOverlap = function(brickObject, x, y) {
			return _tryOverlap(brickObject, x, y);
		}
	}

	// GAMES
	var _games = [
	{
		character: 'A',
		gameType: "tank",
		mode: 1,
		score: 0,
		speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
		load: function() {
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();

			var tankTile = Game.newBrickObject({ 
				name: "tankTile", 
				origin: { x: 1, y: 1 }, 
				brickLocation: { x: 10, y: 3 }, 
				brickDirection: "Left",
				willPassThroughSide: false
			});

			var enemyTankTiles = [];

			var spawnTankAnim = new Timer(loadEnemyTanks, 200);

			function moveTank(_tankTile, direction) {
				var tankDirection = _tankTile.getDirection();
				var tankLocation = _tankTile.getLocation();

				if (tankDirection == direction) {
					Game.move(_tankTile, direction);
				}
				else {
					Game.tryRotate(_tankTile, direction);
				}
			}

			function loadEnemyTanks() {

				var spawn = Math.round(Math.random() * 100) % 5 == 0;

				if(spawn && enemyTankTiles.length < 6) {

					var posX = Math.round(Math.random() * 100) % 3;
					var posY = Math.round(Math.random() * 100) % 2;
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

					

					var enemyTankTile = Game.newBrickObject({
						name: "enemyTankTile",
						brickDirection: "Left",
						origin: { x: 1, y: 1 },
						willPassThroughSide: false,
					});

					if(Game.tryOverlap(enemyTankTile, posX, posY).length == 0) {
						enemyTankTile.setLocation(posX, posY);
						enemyTankTile.rotate(direction);
						enemyTankTiles.push(enemyTankTile);
						var index = enemyTankTiles.indexOf(enemyTankTile);
						var moveEnemyTankAnim = new Timer(function() { 
							var direction = enemyTankTile.getDirection();

							var moveOrRotate = Math.floor(Math.random() * 100) % 3 == 0;

							if (moveOrRotate) {
								direction = ["Left", "Right", "Up", "Down"][Math.floor(Math.random() * 100) % 4];
							}

							moveTank(enemyTankTile, direction);
							
							if(Math.floor(Math.random() * 100) % 2 == 0 /*&& index < 1*/) {
								console.log("enemy tiles count: " + Game.getBrickObjects("enemyTankTile").length)
								fireTank(enemyTankTile, true);
							}
						}, 1000);
						enemyTankTile.onRemove(function() { moveEnemyTankAnim.stop() });
						moveEnemyTankAnim.start();
					}
					else {
						Game.disappear(enemyTankTile);
					}
				}
			}

			function fireTank(_tankTile, _isEnemyTank) {
				
				var isEnemyTank = _isEnemyTank == undefined ? false: _isEnemyTank;
				var ammoX = 0, ammoY = 0;
				var tankDirection = _tankTile.getDirection();
				var tankLocation = _tankTile.getLocation();

				switch(tankDirection) {
					case "Right":
						ammoX = tankLocation.x + 3;
						ammoY = tankLocation.y + 1;
						break;
					case "Left":
						ammoX = tankLocation.x - 1;
						ammoY = tankLocation.y + 1;
						break;
					case "Up":
						ammoX = tankLocation.x + 1;
						ammoY = tankLocation.y - 1;
						break;
					case "Down":
						ammoX = tankLocation.x + 1;
						ammoY = tankLocation.y + 3;
						break;
					default:
						break;
				}

				var ammoTile = Game.newBrickObject({ 
					name: "singleTile", 
					color: isEnemyTank ? "red": "yellow",
					dontShowIfOverlapped: true,
					brickDirection: tankDirection,
					willPassThroughSide: true
				});

				var collidedObjects = Game.tryOverlap(ammoTile, ammoX, ammoY).filter(function(t) { return t.getName() != "singleTile" });

				if(collidedObjects.length == 0) {

					ammoTile.setLocation(ammoX, ammoY);

					var _ammoX = ammoX, _ammoY = ammoY;

					var fireTankAnim = new Timer(function() {

						var collidedObjects = Game.willBeCollidedBy(ammoTile, tankDirection);
						
						if (collidedObjects.length == 0 && (_ammoX > 0 && _ammoX < 19) && (_ammoY > 0 && _ammoY < 9)) {
							Game.move(ammoTile, tankDirection, true);

							var ammoLocation = ammoTile.getLocation();
							_ammoX = ammoLocation.x;
							_ammoY = ammoLocation.y;
						}
						else {
							if (collidedObjects.length > 0) {
								var hitObject = collidedObjects.first();
								var hitObjectName = hitObject.getName();

								if (!isEnemyTank && hitObjectName == "enemyTankTile") {
									enemyTankTiles.splice(enemyTankTiles.indexOf(hitObject), 1);
									Game.score();
									Game.disappear(hitObject);
								}

								if (hitObjectName == "singleTile") {
									Game.disappear(hitObject);
								}
								else if (hitObjectName == "tankTile") {
									//Game.blinkBrickObjects([hitObject], 400, 3, Game.gameOver);
								}
							}
							Game.disappear(ammoTile);
						}

						
					}, 100); 

					ammoTile.onRemove(function() { fireTankAnim.stop() });
					fireTankAnim.start();
				}

				else {
					if(!isEnemyTank) {
						var hitObject = collidedObjects.first();
						Game.disappear(hitObject);
						enemyTankTiles.splice(enemyTankTiles.indexOf(hitObject), 1);
						Game.score();
					} 
				}
			}

			spawnTankAnim.start();
			//loadEnemyTanks();

			this.keydownfunctions = {
				onLeft: function() { 
					moveTank(tankTile, "Left");
				},
				onRight: function() { 
					moveTank(tankTile, "Right");
				},
				onTop: function() { 
					moveTank(tankTile, "Up");
				},
				onBottom: function() { 
					moveTank(tankTile, "Down");
				},
				onSpace: function(){
					fireTank(tankTile);
				}
				
			}

			this.keyupfunctions = {
				onSpace: function() {
					
				},
			}
		}
	},
	{
	 	character: 'B', gameType: "race1", mode: 3, score: 0, speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var _road1 = [], _road2 = [], cars = [];
			var myCar = newCar(16, 5);
			var moveRoadAnim = $game.newTimer({ func: moveRoad, interval: speedInMillis });

			GameSound.carSound1(true);

			// FUNCTIONS
			function newCar(x, y) { return $game.newBrickObject({ name: "carTile", brickLocation: { x: x, y: y }, }); }
			function addCar() { return newCar(-4, ((Math.floor(Math.random() * 100) % 2) * 3) + 2); }
			function loadRoadAndCars() {
				for (var i = 0; i < 5; i++) {
					_road1.push($game.newBrickObject({ name: "tripleTiles", color: "red", brickLocation: { x: i * 4, y: 0 } }));
					_road2.push($game.newBrickObject({ name: "tripleTiles", color: "red", brickLocation: { x: i * 4, y: 9 } }));
				}
				cars.push(addCar());
			}
			function moveRoad() {
				var lastCar = cars.last();
				var willCollide = $game.willBeCollidedBy(myCar, "Left").filter(function(c) { return c.getName() == "carTile" }).length > 0;
				var willOverlap = $game.willBeOverlappedBy(myCar).filter(function(c) { return c.getName() == "carTile" }).length > 0;
				if (willCollide || willOverlap) {
					GameSound.explosion(); $game.stop();
					$game.blinkBrickObjects({ brickObjects: [cars.last(), myCar], interval: 400, count: 3, endFunction: $game.gameOver });
				}
				else {
					var _firstRoad1 = _road1.first(), _lastRoad1 = _road1.last(), _lastRoad2 = _road2.last();
					for (var i = 0; i < _road1.length; i++) {
						var x = _road1[i].getLocation().x;
						_road1[i].setLocation(x + 1, 0); _road2[i].setLocation(x + 1, 9);
					}
					if (_firstRoad1.getLocation().x == 2) {
						var _r1 = $game.newBrickObject({ name: "tripleTiles", color: "red", brickLocation: { x: -2, y: 0 } });
						var _r2 = $game.newBrickObject({ name: "tripleTiles", color: "red", brickLocation: { x: -2, y: 9 } });
						_road1.unshift(_r1); _road2.unshift(_r2);
					}
					if (_lastRoad1.isGottenOutOfScreen()) {
						$game.disappear(_lastRoad1); $game.disappear(_lastRoad2); _road1.pop(); _road2.pop();
					}
					for (var i = 0; i < cars.length; i++) {
						var location = cars[i].getLocation();
						cars[i].setLocation(location.x + 1, location.y);
					}
					if(cars.first().getLocation().x == 6) cars.unshift(addCar());
					if(lastCar.isGottenOutOfScreen()) { $game.disappear(lastCar); cars.pop(); $game.score(); }
				}
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
			loadRoadAndCars(); moveRoad();
			moveRoadAnim.start();
		}
	},
	{
		character: 'C', gameType: "war1", mode: 2, score: 0, speedTimeout: [1000, 950, 900, 850, 800, 750, 700, 650, 600, 500],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var soldierObject = $game.newBrickObject({ name: "soldierTile", brickLocation: { x: 18, y: 4 }, willPassThroughSide: true });
			var enemyRows = loadEnemyTileLevel();
			var enemyInvasionAnim = $game.newTimer({ func: invadeEnemies, interval: speedInMillis });

			// FUNCTIONS
			function newEnemyRow(i) {
				var enemies = [];
				for (var j = 0; j < 10; j++) if(Math.floor(Math.random() * 10) % 2 == 0) enemies.push({ x: 0, y: j });
				return $game.newBrickObject({ tiles: enemies, brickLocation: { x: i, y: 0 } });
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
					$game.stop(); GameSound.explosion();
					$game.blinkBrickObjects({ brickObjects: [soldierObject], interval: 400, count: 3, endFunction: $game.gameOver });
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
						$game.score();
						while(enemyRows.length > 0 && enemyRows.last().tileCount() == 0) {
							$game.disappear(enemyRows.last()); enemyRows.pop();
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
			enemyInvasionAnim.start();
		},
	},
	{
		character: 'D', gameType: "pinball1", mode: 3, score: 0, speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var pinballCatcher = $game.newBrickObject({ name: "quadrupleTiles", brickLocation: { x: 19, y: 3 } });
			var pinball = $game.newBrickObject({ name: "singleTile", color: "Green",brickLocation: { x: 18, y: 5 } });
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
			else params = { name: "pinballTileLevel" + level.toString() }
			params.brickLocation = { x: 0, y: 0 };

			var pinballTile = $game.newBrickObject(params);
			var pinballThrowAnim = $game.newTimer({ func: throwPinball, interval: speedInMillis });

			// FUNCTIONS
			function hasPinballTile(x, y) {
				var hasTile = pinballTile.hasTile(x, y);
				if (hasTile) {
					pinballTile.removeTile(x, y); GameSound.fire(); $game.score();
					if (pinballTile.tileCount() == 0) { $game.stop(); $game.levelUp(); }
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
					$game.stop(); GameSound.explosion();
					$game.blinkBrickObjects({ 
						brickObjects: [pinballCatcher, pinball], interval: 400,
						count: 3, endFunction: $game.gameOver
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
		}
	},
	{
		character: 'E', gameType: "war2", mode: 4, score: 0, speedTimeout:  [10000, 9000, 8000, 7000, 6500, 6000, 5500, 5000, 4500, 4000],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var soldierObject = $game.newBrickObject({ name: "soldierTile", brickLocation: { x: 18, y: 4 }, willPassThroughSide: true });
			var enemyRows = loadEnemyTileLevel();
			var enemyInvasionAnim = $game.newTimer({ func: invadeEnemies, interval: speedInMillis });
			var rowRemoveAnim = $game.newTimer({ interval: 50 });

			// FUNCTIONS
			function isSpace(x, y) { return !enemyRows[x].hasTile(x, y); }
			function newEnemyRow(i) {
				var enemies = [];
				for (var j = 0; j < 10; j++) if(Math.floor(Math.random() * 10) % 2 == 0) enemies.push({ x: 0, y: j });
				return $game.newBrickObject({ tiles: enemies, brickLocation: { x: i, y: 0 } });
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
					$game.stop(); GameSound.explosion();
					$game.blinkBrickObjects({ brickObjects: [soldierObject], interval: 400, count: 3, endFunction: $game.gameOver });
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
						enemyRows.push($game.newBrickObject({ tiles: [{ x: 0, y: soldierPosition }], brickLocation: { x: e, y: 0 } }));
					}
					else {
						enemyRows[e].addTile(e, soldierPosition);
						if(enemyRows[e].tileCount() == 10) {
							var r = 4;
							enemyInvasionAnim.pause();
							$game.lockKey(true);
							rowRemoveAnim.setFunction(function() {
								enemyRows[e].removeTile(e, r); enemyRows[e].removeTile(e, 9 - r);
								if(r == 0) {
									rowRemoveAnim.stop();
									GameSound.score();
									$game.score();
									$game.disappear(enemyRows[e]);
									enemyRows.splice(e, 1);
									while(e < enemyRows.length) { enemyRows[e].setLocation(e, 0); e++; }
									$game.lockKey(false);
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
			enemyInvasionAnim.start();
		},
	},
	{
		character: 'F', gameType: "doublepinball", mode: 5, score: 0, speedTimeout: [250, 235, 220, 205, 190, 175, 160, 145, 130, 115],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var pinballCatcher1 = $game.newBrickObject({ name: "quadrupleTiles", brickLocation: { x: 0, y: 3 } });
			var pinballCatcher2 = $game.newBrickObject({ name: "quadrupleTiles", brickLocation: { x: 19, y: 3 } }); 
			var pinball = $game.newBrickObject({ name: "singleTile", color: "Green", brickLocation: { x: 18, y: 5 }});
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
			else params = { name: "pinballTileLevel" + level.toString() }
			params.brickLocation = { x: 7, y: 0 };

			var pinballTile = $game.newBrickObject(params);
			var pinballThrowAnim = $game.newTimer({ func: throwPinball, interval: speedInMillis });

			// FUNCTIONS
			function hasPinballTile(x, y) {
				var hasTile = pinballTile.hasTile(x, y);
				if (hasTile) {
					pinballTile.removeTile(x, y); GameSound.fire(); $game.score();
					if (pinballTile.tileCount() == 0) { pinballTile.remove(); $game.stop(); $game.levelUp(); }
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
					$game.stop(); GameSound.explosion();
					$game.blinkBrickObjects({ 
						brickObjects: [pinballX == 0 ? pinballCatcher1: pinballCatcher2, pinball],
						interval: 400, count: 3, endFunction: $game.gameOver
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
		}
	},
	{
		character: 'G', gameType: "cross", mode: 6, score: 0, speedTimeout: [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var crossers = [], crosser;
			
			// FUNCTIONS
			function addCrosser() { crosser = $game.newBrickObject({ name: "singleTile", color: "Green" , brickLocation: { x: 19, y: 5 }}); }
			function loadWalls() {
				for (var i = 2; i < 19; i += 2) $game.newBrickObject({ name: "verticalLine", brickLocation: { x: i, y: 0 } });
			}
			function moveCrosser(direction) {
				var location = crosser.getLocation();
				GameSound.move();
				switch(direction) {
					case "Left":
						location.x = location.x == 1 ? 0: location.x - 2;
						crosser.setLocation(location.x, location.y);
						if (location.x == 0) {
							var bumpedCrosser = $game.willBeOverlappedBy(crosser).first();
							if(bumpedCrosser == null || bumpedCrosser == undefined) {
								crossers.push(crosser);
								GameSound.score(); $game.score();
								if(crossers.length == 10) Game.levelUp();
								else addCrosser();
							}
							else {
								GameSound.explosion();
								$game.blinkBrickObjects({ brickObjects: [bumpedCrosser, crosser], interval: 400, count: 3, endFunction: $game.gameOver });
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
					default:
						break;
				}
			}

			// KEY FUNCTIONS
			this.keydownfunctions = {
				onLeft: function() { moveCrosser("Left"); },
				onRight: function() { moveCrosser("Right"); },
				onTop: function() { moveCrosser("Top"); },
				onBottom: function() { moveCrosser("Bottom"); },
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
			loadWalls(); addCrosser();
		}
	},
	{
		character: 'H', gameType: "unnamed1", mode: 7, score: 0, speedTimeout: [2000, 1900, 1800, 1700, 1600, 1500, 1400, 1300, 1200, 1100],
		load: function($game) {
			// DECLARATIONS
			var position = 4;
			var soldierObject = $game.newBrickObject({ name: "soldierTile", brickLocation: { x: 18, y: 4 } });
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
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
			else params = { name: "pinballTileLevel" + level.toString() }
			params.brickLocation = { x: 0, y: 0 };

			var pinballTile = $game.newBrickObject(params);
			var movePinballTileAnim = $game.newTimer({ func: movePinballTile, interval: speedInMillis });

			// FUNCTIONS
			function levelUp() { pinballTile.remove(); $game.stop(); $game.levelUp(); }
			function gameOver(fallenTile) {
				$game.stop();
				if(fallenTile != undefined) $game.disappear(fallenTile);
				GameSound.explosion();
				$game.blinkBrickObjects({ brickObjects: [soldierObject], interval: 400, count: 3, endFunction: $game.gameOver });
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
					var fallTileAnim = $game.newTimer({ func: function() { fallTile(fallenTile) }, interval: 100 });
					var fallenTile = pinballTile.getSideTiles("Right").first();
					pinballTile.removeTile(fallenTile.screenX, fallenTile.screenY);
					if (pinballTile.tileCount() == 0) $game.disappear(pinballTile);
					fallenTile = $game.newBrickObject({
						name: "singleTile", brickLocation: { x: fallenTile.screenX, y: fallenTile.screenY },
						color: "red", onRemove: fallTileAnim.stop
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
								$game.disappear(fallenTile);
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
					$game.disappear(fallenTile);
					fallenTiles.splice(fallenTiles.indexOf(fallenTile), 1);
					$game.score();
				}
				else if (pinballTile.removeSideTile("Right", position + 1)) $game.score();
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
			movePinballTileAnim.start();
		}
	},
	{
		character: 'I',
		gameType: "snake",
		mode: 8,
		score: 0,
		speedTimeout: [550, 500, 450, 400, 350, 300, 250, 200, 150, 100],
		load: function($game) {
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
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var direction = gameLevelTiles[level - 1].snake.direction;
			var currentDirection = direction;
			var snakeLocation = gameLevelTiles[level - 1].snake.location;
			var foodObject = $game.newBrickObject({ tiles: [{ x: 0, y: 0 }], color: "Red" });
			var snakeCrawlAnim = $game.newTimer({ func: crawlSnake, interval: speedInMillis });
			
			// FUNCTIONS
			function loadSnake() {
				var t = 1;
			    snakeObject = [$game.newBrickObject({ tiles: [{ x: 0, y: 0 }], color: "Green" })];
			    snakeObject[0].setLocation(snakeLocation.x, snakeLocation.y);
			    while(t < 5) {
			    	var x;
			    	if(direction == "Right") x = snakeLocation.x - t;
			    	else x = snakeLocation.x + t;
			    	snakeObject.push($game.newBrickObject({ tiles: [{ x: 0, y: 0 }], color: "Black" }));
			    	snakeObject[snakeObject.length - 1].setLocation(x, snakeLocation.y);
			    	t++;
			    }
			}
			function loadObstacles() {
				gameLevelTiles[brickGameModel.getLevel() - 1].obstacles.forEach(function(gt) {
					obstacles.push($game.newBrickObject({ name: gt.name, brickLocation: gt.location, rotateDirection: gt.rotateDirection }));
				});
			}
			function loadFood() {
				var foodX = 0, foodY = 0;
				do { foodX = Math.round(Math.random() * 100) % 20; foodY = Math.round(Math.random() * 100) % 10; }
				while($game.tryOverlap(foodObject, foodX, foodY).length > 0)
				foodObject.setLocation(foodX, foodY);
			}
			function crawlSnake() {
				var location = snakeObject[0].getLocation(), foodLocation = foodObject.getLocation();
				var x = location.x, y = location.y;
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
				var collidedObject = $game.tryOverlap(snakeObject[0], x, y).first();
				var isCollided = collidedObject != undefined;
				var isFoodEaten = isCollided && $game.areEqual(collidedObject, foodObject);
				if (isCollided && !isFoodEaten) { 
					$game.stop();
					GameSound.explosion();
					$game.blinkBrickObjects({ brickObjects: snakeObject, interval: 400, count: 3, endFunction: Game.gameOver });
				}
				else {
					if(isFoodEaten) {
						var tailLocation = snakeObject[snakeObject.length - 1].getLocation(); loadFood();
						snakeObject.push($game.newBrickObject({ name: "singleTile", color: "Black" }));
						GameSound.score(); $game.score();
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
			loadSnake(); loadObstacles(); loadFood(); snakeCrawlAnim.start();
		},
	},
	{
		character: 'K',
		gameType: "match",
		mode: 9,
		score: 0,
		speedTimeout: [1000, 940, 880, 820, 760, 700, 640, 580, 520, 460],  
		load: function($game) {
			// DECLARATIONS
			var brickTiles = [
				[{ x: 0, y: 1 }],
				[{ x: 0, y: 1 }, { x: 0, y: 0 }],
				[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }],
				[{ x: 0, y: 1 }, { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 0 }]
			];
			var speedInMillis = brickGameModel.getSpeedInMillis();
			var brickMatches = [0, 0, 0], brickToMatch = [];
			var brickObjects = [], matchBrickObjects = [];
			var brickLocation = brickGameModel.getLevel();
			var brickInvasionAnim = $game.newTimer({
				func: function() {
					if (brickLocation >= 15 && ($game.willCollide(brickObjects[0], "Left", matchBrickObjects[0]) ||
						$game.willCollide(brickObjects[1], "Left", matchBrickObjects[1]) ||
						$game.willCollide(brickObjects[2], "Left", matchBrickObjects[2]))) {
						$game.stop();
						GameSound.explosion();
						$game.blinkBrickObjects({
							brickObjects: matchBrickObjects.concat(brickObjects), interval: 400, count: 3, endFunction: $game.gameOver
						})
					}
					else {
						brickLocation++;
						setBrickTileToMatchLocations(brickLocation);
					}
				},
				interval: speedInMillis
			});
			var matchBricksAnim = $game.newTimer({ 
				func: function() {
					var brickLocation = brickObjects[0].getLocation().x;
					var brickToMatchLocation = matchBrickObjects[0].getLocation().x;
					if($game.willCollide(brickObjects[0], "Left", matchBrickObjects[0]) ||
						$game.willCollide(brickObjects[1], "Left", matchBrickObjects[1]) ||
						$game.willCollide(brickObjects[2], "Left", matchBrickObjects[2])) {
						matchBricksAnim.stop();
						if(getMatch()) {
							$game.stop(); GameSound.move2(); $game.score();
							brickObjects.forEach(function(bo) { bo.hide(); });
							$game.blinkBrickObjects({ brickObjects: matchBrickObjects, interval: 400, count: 3, endFunction: startMatch });
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
			function loadMatches() { for (var i = 0; i < 3; i++) brickToMatch[i] = Math.round(Math.random() * 100) % 4; }
			function loadBrickTiles() {
				for (var i = 0; i < 3; i ++) {
					brickObjects.push($game.newBrickObject());
					matchBrickObjects.push($game.newBrickObject({ color: "Red" }));
				}
			}
			function setBrickTileLocations(x) { 
				for (var i = 0; i < 3; i ++) brickObjects[i].setLocation(x, 1 + (i * 3), brickTiles[brickMatches[i]]); 
			}
			function setBrickTileToMatchLocations(x) { 
				for (var i = 0; i < 3; i ++) matchBrickObjects[i].setLocation(x, 1 + (i * 3), brickTiles[brickToMatch[i]]); 
			}
			function startMatch() {
				brickLocation = brickGameModel.getLevel();
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
			loadBrickTiles(); startMatch();
		},
	},
	{
		character: 'L', gameType: "race2", mode: 10, score: 0, speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel(), speedInMillis = brickGameModel.getSpeedInMillis();
			var _road1 = [], cars = [];
			var myCar = newCar(16, 7);
			var moveRoadAnim = $game.newTimer({ func: moveRoad, interval: speedInMillis });

			// FUNCTIONS
			function newCar(x, y) { return $game.newBrickObject({ name: "carTile", brickLocation: { x: x, y: y } }); }
			function addCar() { return newCar(-4, ((Math.floor(Math.random() * 100) % 3) * 3) + 1); }
			function loadRoadAndCars() {
				for (var i = 0; i < 5; i++) _road1.push($game.newBrickObject({ name: "tripleTiles", color: "red" }));
				cars.push(addCar());
			}
			function moveRoad() {
				var lastCar = cars.last();
				var willCollide = $game.willBeCollidedBy(myCar, "Left").filter(function(c) { return c.getName() == "carTile" }).length > 0;
				var willOverlap = $game.willBeOverlappedBy(myCar).filter(function(c) { return c.getName() == "carTile" }).length > 0;
				if (willCollide || willOverlap) {
					GameSound.explosion(); $game.stop();
					$game.blinkBrickObjects({ brickObjects: [cars.last(), myCar], interval: 400, count: 3, endFunction: $game.gameOver });
				}
				else {
					var _firstRoad1 = _road1.first(), _lastRoad1 = _road1.last();
					for (var i = 0; i < _road1.length; i++) {
						var x = _road1[i].getLocation().x;
						_road1[i].setLocation(x == undefined ? i * 4: x + 1, 0);
					}
					if (_firstRoad1.getLocation().x == 2) {
						var _r1 = $game.newBrickObject({ name: "tripleTiles", color: "red", brickLocation: { x: -2, y: 0 } });
						_road1.unshift(_r1);
					}
					if (_lastRoad1.isGottenOutOfScreen()) { $game.disappear(_lastRoad1); _road1.pop(); }
					for (var i = 0; i < cars.length; i++) {
						var location = cars[i].getLocation();
						cars[i].setLocation(location.x + 1, location.y);
					}
					if(cars.first().getLocation().x == 6) cars.unshift(addCar());
					if(lastCar.isGottenOutOfScreen()) { $game.disappear(lastCar); cars.pop(); $game.score(); }
				}
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
			loadRoadAndCars();
			moveRoad();
			GameSound.carSound1(true);
			moveRoadAnim.start();
		}
	},
	];

	// BRICK GAME FUNCTIONS
	function BrickObject(params) {
		var tiles = params.tiles;
		var color = params.color;
		var brickDirection = params.brickDirection == undefined ? "Right": brickDirection;
		var rotateDirection = params.rotateDirection == undefined ? "Right": params.rotateDirection;
		var origin = params.origin == undefined ? 0: params.origin;
		var brickLocation = params.brickLocation;
		var brickTileName = params.name;
		var visible = params.visible == undefined ? true: params.visible;
		var originX = origin.x == undefined ? 0: origin.x, originY = origin.y == undefined ? 0: origin.y;
		var originalOrigin = { x: originX, y: originY };
		var X, Y, testX, testY;
		var _tileLocations = [];

		// EVENTS
		tiles = JSON.parse(JSON.stringify(ifUndefined(tiles, [])));
		if (tiles.length > 0) _rotate();

		var onRemove = params.onRemove == undefined ? function() {}: params.onRemove;

		if (brickLocation != undefined) _setLocation(brickLocation.x, brickLocation.y);

		this.bt = tiles;
		this.overlapIndex = 0;



		// refactored
		function getTileObject(x, y) { return document.getElementById("tileCell" + brickObjectTiles[x].name + brickObjectTiles[y].name); }
		function showHideTiles(_visible) {
			var tileX = 0, tileY = 0;
			if(_visible != undefined) visible = _visible;
			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = tiles[t].screenX; tileY = tiles[t].screenY;
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
		function _getSize() {
			var width = tiles.sort(function(t1, t2) { return t2.x - t1.x }).first().x + 1;
			var height = tiles.sort(function(t1, t2) { return t2.y - t1.y }).first().y + 1;
			return { width: width, height: height };
		}
		function _setLocation(x, y, _tiles) {
			var tileX, tileY;

			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = X + tiles[t].x; tileY = Y + tiles[t].y;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var colorClass = getTileObject(tileX, tileY).classList[1];
						if(visible) changeTileColor(tileX, tileY, tiles[t].backColor);
					}
					else tiles[t].backColor = undefined;
				}
			}
			if(_tiles != undefined) tiles = JSON.parse(JSON.stringify(_tiles));
			bt = tiles;
			for(var t = 0; t < tiles.length; t++) {
				tileX = x + tiles[t].x; tileY = y + tiles[t].y;
				if(color == undefined) color = tiles[t].foreColor;
				else tiles[t].foreColor = color;
				if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
					var colorClass = getTileObject(tileX, tileY).classList[1];
					tiles[t].backColor = canvas;
					if(visible) changeTileColor(tileX, tileY, color);
				}
				else tiles[t].backColor = undefined;
				tiles[t].screenX = tileX; tiles[t].screenY = tileY;
				tiles[t].testScreenX = tileX; tiles[t].testScreenY = tileY;
 			}
			X = x; Y = y;
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
			if(isTileRemoved) { changeTileColor(x, y, tileToBeRemoved.backColor); tiles.splice(tileIndex, 1); }
			return isTileRemoved;
		}

		this.toggleAppear = function() { visible = !visible; showHideTiles(visible); }
		this.show = function() { visible = true; showHideTiles(visible); }
		this.hide = function() { visible = false; showHideTiles(visible); }
		this.getName = function() { return brickTileName; }
		this.getTiles = function() { return tiles; }
		this.getSize = function() { return _getSize(); }
		this.tileCount = function() { return tiles.length; }
		this.setLocation = function(x, y, _tiles) { _setLocation(x, y, _tiles); }
		this.addTile = function(left, top) {
			var tile = { x: left - X, y: top - Y, screenX: left, screenY: top };
			if(left >= 0 && left < 20 && top >= 0 && top < 10) {
				var colorClass = getTileObject(left, top).classList[1];
				tile.backColor = canvas; //colorClass.substr(5, colorClass.length - 10);
				tile.foreColor = color;
				changeTileColor(left, top, color); tiles.push(tile);
			}
			else tile.backColor = undefined;
		}
		this.removeTile = function(left, top) { return _removeTile(left, top); }
		this.hasTile = function(x, y) {
			var tileX, tileY, hasTile = false;
			if(X != undefined && Y != undefined) hasTile = tiles.filter(function(t) { return t.screenX == x && t.screenY == y }).length > 0;
			return hasTile;
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
		this.isGottenOutOfScreen = function() {
			var brickSize = _getSize();
			return X >= 20 || Y >= 10 || X <= -brickSize.width || Y <= -brickSize.height;
		}
		this.remove = function() {
			var tileX, tileY;
			if(X != undefined && Y != undefined) {
				for(var t = 0; t < tiles.length; t++) {
					tileX = X + tiles[t].x; tileY = Y + tiles[t].y;
					if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
						var colorClass = getTileObject(tileX, tileY).classList[1];
						changeTileColor(tileX, tileY, tiles[t].backColor);
					}
					else tiles[t].backColor = undefined;
				}
			}
			onRemove();
		}

		// future functions
		this.getTrimLocation = function(direction) {
			switch(direction) {
				case "TopLeft":
					break;
			}
		}
		this.onRemove = function(_func) { onRemove = _func == undefined ? function() {}: _func; }
		this.getEdgePosition = function(side) {
			switch(side) {
				case "Right":
					break;
				default:
					break;
			}
		}

		// ------------------------------
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
		this.tryLocation = function(x, y, isTest) {
			_tryLocation(x, y, isTest);
		}
		
		

		

		

		this.removeSideTile = function(side, position) {
			var lastPosition = 0;
			if (side == "Right") {
				var tilesRow = tiles.filter(function(tile) { return tile.screenY == position });
				if (tilesRow != undefined && tilesRow.length > 0) 
					lastPosition = tilesRow.sort(function(t1, t2) {
						return t1.screenX - t2.screenX;
					}).last().screenX;
			}
			return _removeTile(lastPosition, position);
		}
		this.removeTileByDirection = function(side, start) {
			switch(side) {
				case "Left":
					switch(start) {
						case "Large":
							break;
					}
					break;
			}
		}
		this.getDirection = function() {
			return brickDirection;
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

		function _rotate() {
			var rotation = undefined;

			var tileX = 0, tileY = 0, _tw = 0, _th = 0, x = 0, y = 0;

			var brickSize = _getSize();

			if (
				(rotateDirection == "Right" && brickDirection == "Left") ||
				(rotateDirection == "Left" && brickDirection == "Right") ||
				(rotateDirection == "Up" && brickDirection == "Down") ||
				(rotateDirection == "Down" && brickDirection == "Up")
			) {
				rotation = "rotate180";
			}
			else if (
				(rotateDirection == "Right" && brickDirection == "Up") ||
				(rotateDirection == "Up" && brickDirection == "Left") ||
				(rotateDirection == "Left" && brickDirection == "Down") ||
				(rotateDirection == "Down" && brickDirection == "Right") 
			) {
				rotation = "clockwise";
			}
			else if (
				(rotateDirection == "Right" && brickDirection == "Down") ||
				(rotateDirection == "Down" && brickDirection == "Left") ||
				(rotateDirection == "Left" && brickDirection == "Up") ||
				(rotateDirection == "Up" && brickDirection == "Right")
			) {
				rotation = "counterclockwise";
			}



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

				for(var t = 0; t < tiles.length; t++) {

					if (rotation == "rotate180") {
						tiles[t].x = _tw - tiles[t].x;
						tiles[t].y = _th - tiles[t].y;	
					}
					else if (rotation == "clockwise") {
						_tw = brickSize.height - 1 - tiles[t].y;
						_th = tiles[t].x;
						tiles[t].x = _tw;
						tiles[t].y = _th;
					}
					else if (rotation == "counterclockwise") {
						_tw = tiles[t].y;
						_th = brickSize.width - 1 - tiles[t].x;
						tiles[t].x = _tw;
						tiles[t].y = _th;
					}
	 			}
	 		}
		}

		this.rotate = function(direction) {

			var rotation = undefined;

			var tileX = 0, tileY = 0, _tw = 0, _th = 0, x = 0, y = 0;

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

			console.log(tiles);

			if (rotation != undefined) {
				if (X != undefined && Y != undefined) {
					for(var t = 0; t < tiles.length; t++) {
						tileX = X + tiles[t].x;
						tileY = Y + tiles[t].y;
						if(tileX >= 0 && tileX < 20 && tileY >= 0 && tileY < 10) {
							var colorClass = getTileObject(tileX, tileY).classList[1];
							if(visible) changeTileColor(tileX, tileY, tiles[t].backColor);
						}
						else {
							tiles[t].backColor = undefined;
						}
					}
				}

				if (rotation == "rotate180") {
					x = (X + originX) - (brickSize.width - 1 - originX);
					y = (Y + originY) - (brickSize.height - 1 - originY);
					_tw = brickSize.width - 1;
					_th = brickSize.height - 1;
					originX = _tw - originX;
					originY = _tw - originY;
				}
				else if (rotation == "clockwise") {
					x = (X + originX) - (brickSize.height - 1 - originY);
					y = (Y + originY) - originX;
					_th = originX;
					_tw = brickSize.height - 1 - originY;
					originY = _th;
					originX = _tw;
				}
				else if (rotation == "counterclockwise") {
					x = (X + originX) - originY;
					y = (Y + originY) - (brickSize.width - 1 - originX);
					_th = brickSize.width - 1 - originX;
					_tw = originY;
					originY = _th;
					originX = _tw;
				}

				for(var t = 0; t < tiles.length; t++) {

					if (rotation == "rotate180") {
						tiles[t].x = _tw - tiles[t].x;
						tiles[t].y = _th - tiles[t].y;	
					}
					else if (rotation == "clockwise") {
						_tw = brickSize.height - 1 - tiles[t].y;
						_th = tiles[t].x;
						tiles[t].x = _tw;
						tiles[t].y = _th;
					}
					else if (rotation == "counterclockwise") {
						_tw = tiles[t].y;
						_th = brickSize.width - 1 - tiles[t].x;
						tiles[t].x = _tw;
						tiles[t].y = _th;
					}

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
						// tiles[t].backColor = colorClass.substr(5, colorClass.length - 10);
						tiles[t].backColor = canvas;
						if(visible) changeTileColor(tileX, tileY, color);
					}
					else {
						tiles[t].backColor = undefined;
					}

					tiles[t].screenX = tileX;
					tiles[t].screenY = tileY;
					tiles[t].testScreenX = tileX;
					tiles[t].testScreenY = tileY;
	 			}

				X = x; Y = y; 

				console.log(tiles);

				brickDirection = direction;
			}
		}

		this.tryRotate = function(direction) {

			var rotation = undefined;

			var tileX = 0, tileY = 0, _tw = 0, _th = 0, x = 0, y = 0;

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

			console.log(tiles);

			if (rotation != undefined) {
				

				if (rotation == "rotate180") {
					x = (X + originX) - (brickSize.width - 1 - originX);
					y = (Y + originY) - (brickSize.height - 1 - originY);
					_tw = brickSize.width - 1;
					_th = brickSize.height - 1;
					// originX = _tw - originX;
					// originY = _tw - originY;
				}
				else if (rotation == "clockwise") {
					x = (X + originX) - (brickSize.height - 1 - originY);
					y = (Y + originY) - originX;
					_th = originX;
					_tw = brickSize.height - 1 - originY;
					// originY = _th;
					// originX = _tw;
				}
				else if (rotation == "counterclockwise") {
					x = (X + originX) - originY;
					y = (Y + originY) - (brickSize.width - 1 - originX);
					_th = brickSize.width - 1 - originX;
					_tw = originY;
					// originY = _th;
					// originX = _tw;
				}

				for(var t = 0; t < tiles.length; t++) {

					var tlsX = 0, tlsY = 0;

					if (rotation == "rotate180") {
						tlsX = _tw - tiles[t].x;
						tlsY = _th - tiles[t].y;	
					}
					else if (rotation == "clockwise") {
						_tw = brickSize.height - 1 - tiles[t].y;
						_th = tiles[t].x;
						tlsX = _tw;
						tlsY = _th;
					}
					else if (rotation == "counterclockwise") {
						_tw = tiles[t].y;
						_th = brickSize.width - 1 - tiles[t].x;
						tlsX = _tw;
						tlsY = _th;
					}

					tileX = x + tlsX;
					tileY = y + tlsY;

					tiles[t].testScreenX = tileX;
					tiles[t].testScreenY = tileY;
	 			}

				console.log(tiles);

				testX = x; testY = y;
			}
		}

		this.getEdgeTiles = function(direction) {
			return _getEdgeTiles(direction);
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

		this.setOriginalOrigin = function() {
			originX = originalOrigin.x; originY = originalOrigin.y;
		}

		

		function _tryLocation(x, y, isTest) {
			var tileX, tileY;

			isTest = isTest == undefined ? false: isTest;
			for(var t = 0; t < tiles.length; t++) {
				tileX = x + tiles[t].x; tileY = y + tiles[t].y;
				tiles[t].testScreenX = tileX; tiles[t].testScreenY = tileY;
 			}
			testX = x; testY = y;
		}

		this.isGettingOutOfScreen = function() {
			var brickSize = _getSize();
			return testX < 0 || testY < 0 || testX + (brickSize.width - 1) > 19 || testY + (brickSize.height - 1) > 9;
		}
	}

	function Timer(params) {
		var _func = params.func == undefined ? function() {}: params.func;
		var _interval = params.interval == undefined ? 1000: params.interval;
		var timeoutState = { running: 0, paused: 1, stopped: 2 }
		var _timeoutFunction = function() {};
		var timer;
		var tickDate = new Date();
		var remainingMillis = _interval;
		var _timeoutState = timeoutState.stopped;

		this.start = function() {
			if(_timeoutState != timeoutState.running) {
				_timeoutState = timeoutState.running;
				_timeoutFunction = function() { tickDate = new Date(); _func(); }
				timer = setTimeout(function() { timer = setInterval(_timeoutFunction, _interval); _timeoutFunction(); }, remainingMillis);
				//timer = setInterval(_timeoutFunction, _interval); 
			}
		};
		this.stop = function() { clearInterval(timer); _timeoutState = timeoutState.stopped; };
		this.pause = function() {
			_timeoutState = timeoutState.paused;
			remainingMillis = _interval - (new Date() - tickDate);
			clearTimeout(timer);
		};
		this.setTimerInterval = function(interval) {
			clearInterval(timer);
			if(_timeoutState != timeoutState.stopped) {
				_interval = interval;
				timer = setInterval(_timeoutFunction, _interval); 
			}
		};
		this.isRunning = function() { return _timeoutState == timeoutState.running; }
		this.setFunction = function(func) { _func = func; }
	};
})(window);

Array.prototype.insert = function(index, value) { this.splice(index, 0, value); return this; }
Array.prototype.first = function() { return this[0]; }
Array.prototype.last = function() { return this[this.length - 1]; }
String.prototype.ifNullOrEmpty = function(replaceValue) {
	var isNullOrEmpty = this == null || this == undefined;
	return isNullOrEmpty ? replaceValue: this;
}
function ifUndefined(object, replaceValue) {
	return object == undefined ? replaceValue: object;
}
Number.prototype.pad = function(size) {
	var s = String(this);
	while (s.length < (size || 2)) {s = "0" + s;}
	return s;
}