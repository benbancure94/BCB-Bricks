{
	 	character: 'B',
		gameType: "race1",
		mode: 3,
		score: 0,
		speedTimeout: [300, 280, 260, 240, 220, 200, 180, 160, 140, 120],
		load: function($game) {
			// DECLARATIONS
			var level = brickGameModel.getLevel();
			var speedInMillis = brickGameModel.getSpeedInMillis();
			var _road1 = [], _road2 = [], cars = [];
			var myCar = newCar(16, 5);
			var moveRoadAnim = $game.newTimer({ func: moveRoad, interval: speedInMillis });

			// FUNCTIONS
			function newCar(x, y) {
				return $game.newBrickObject({
					name: "carTile",
					brickLocation: { x: x, y: y }, 
				});
			}
			function addCar() {
				return newCar(-4, ((Math.floor(Math.random() * 100) % 2) * 3) + 2);
			}
			function loadRoadAndCars() {
				for (var i = 0; i < 5; i++) {
					_road1.push($game.newBrickObject({ name: "tripleTiles", color: "red" }));
					_road2.push($game.newBrickObject({ name: "tripleTiles", color: "red" }));
				}
				cars.push(addCar());
			}
			function moveRoad() {
				var lastCar = cars.last();
				var willCollide = $game.willBeCollidedBy(myCar, "Left").filter(function(c) { return c.getName() == "carTile" }).length > 0;
				var willOverlap = $game.willBeOverlappedBy(myCar).filter(function(c) { return c.getName() == "carTile" }).length > 0;
				
				if (willCollide || willOverlap) {
					console.log("blinked over and over again");
					GameSound.explosion();
					$game.stop();
					$game.blinkBrickObjects({ 
						brickObjects: [cars.last(), myCar],
						interval: 400,
						count: 3,
						endFunction: $game.gameOver
					});
				}
				else {
					var _firstRoad1 = _road1.first();
					var _lastRoad1 = _road1.last();
					var _lastRoad2 = _road2.last();

					for (var i = 0; i < _road1.length; i++) {
						var x = _road1[i].getLocation().x;

						_road1[i].setLocation(x == undefined ? i * 4: x + 1, 0);
						_road2[i].setLocation(x == undefined ? i * 4: x + 1, 9);
					}
					if (_firstRoad1.getLocation().x == 2) {
						var _r1 = $game.newBrickObject({
							name: "tripleTiles", color: "red", brickLocation: { x: -2, y: 0 }
						});
						var _r2 = $game.newBrickObject({
							name: "tripleTiles", color: "red", brickLocation: { x: -2, y: 9 }
						});
						_road1.unshift(_r1); _road2.unshift(_r2);
					}
					if (_lastRoad1.isGottenOutOfScreen()) {
						$game.disappear(_lastRoad1); $game.disappear(_lastRoad2);
						_road1.pop(); _road2.pop();
					}
					for (var i = 0; i < cars.length; i++) {
						var location = cars[i].getLocation();
						cars[i].setLocation(location.x + 1, location.y);
					}
					if(cars.first().getLocation().x == 6) cars.unshift(addCar());
					if(lastCar.isGottenOutOfScreen()) {
						cars.pop(); $game.score();
					}
				}
			}

			// KEY FUNCTIONS
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

			// INITIALIZATION
			loadRoadAndCars();
			moveRoad();

			moveRoadAnim.start();
		}
	},