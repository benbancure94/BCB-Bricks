	var Marquee = function(exitFunction) {
		this.load = function(word, speedInMillis) {

			console.log("loaded " + word);

			var brickCharacters = [];

			for (var i = 0; i < word.length; i++) {
				var character = word.substring(i, i + 1);
				var j = 0;
				while(characterTiles[j].character != character) { j++; }
				var characterTile = characterTiles[j].tiles;

				if(characterTiles[j].character != " ") {
					var _B = new BrickObject({ tiles: characterTile, color: "white" });
					_B.setLocation(20 + (i * 6), 2);
					brickCharacters.push(_B);
				}
			}

			var t = 20;
			
			var marquee = new Timer(function() {
				for(var i = 0; i < brickCharacters.length; i++) {
					var loc = brickCharacters[i].getLocation();
					loc.x--;
					if(loc.x < -(word.length * 6)) loc.x = 20;
					brickCharacters[i].setLocation(loc.x, loc.y);
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

	function Marquee(params) {
		var word = params.word == undefined || params.word == null ? "": params.word;
		var speedInMillis = params.speedInMillis == undefined ? 0: params.speedInMillis;
		var onUnload = params.onUnload == undefined ? function() {}: params.onUnload;
		var chars = word.split("");
		var brickCharacters = [];

		for (var i = 0; i < chars.length; i++) {
			var char = chars[i];

			var brickObjectTile = brickObjectTiles.filter(function(bt) { return bt.name == char }).first();
			var brickTiles = brickObjectTile.tiles;

			if(brickObjectTile.name != " ") {
				var lt = new BrickObject({ tiles: brickTiles, color: "white" });
				lt.setLocation(20 + (i * 6), 2);
				brickCharacters.push(lt);
			}
		}

		var t = 20;
			
		var marquee = new Timer(function() {
			for(var i = 0; i < brickCharacters.length; i++) {
				var loc = brickCharacters[i].getLocation();
				loc.x--;
				if(loc.x < -(word.length * 6)) loc.x = 20;
				brickCharacters[i].setLocation(loc.x, loc.y);
			}
		}, speedInMillis == undefined ? 300: speedInMillis);
		marquee.start();
	}