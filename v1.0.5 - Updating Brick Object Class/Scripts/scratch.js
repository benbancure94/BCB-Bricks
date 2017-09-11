// if collidedObjects counts more than zero
// 	hitObject = maybe other ammoTile or tankTile or enemyTankTile
// 	if the ammoTile is from tankTile
// 		if enemyTankTile is hit
// 			disappear enemyTankTile
// 			score
// 		else if other ammoTile is hit
// 			disappear other ammoTile
// 		else if tankTile itself is hit
// 			blink tankTile
// 			gameOver
// 		end
// 	else
// 		if enemyTankTile is hit
// 			nothing happens
// 		else if other ammoTile is hit
// 			disappear other ammoTile
// 		else if tankTile is hit
// 			blink tankTile
// 			gameOver
// 	end
// end
// disappear ammoTile

if (collidedObjects.length > 0) {
	var hitObject = collidedObjects.first();
	var hitObjectName = hitObject.getName();

	if (!isEnemyTank) {
		if (hitObjectName == "enemyTankTile") {
			enemyTankTiles.splice(enemyTankTiles.indexOf(hitObject), 1);
			Game.score();
			Game.disappear(hitObject);
		}
		else if (hitObjectName == "ammoTile") {
			Game.disappear(hitObject);
		}
		else if (hitObjectName == "tankTile") {
			Game.blinkBrickObjects([hitObject], 400, 3, Game.gameOver);
		}
	}
	else {
		if (hitObjectName == "enemyTankTile") {
			
		}
		else if (hitObjectName == "ammoTile") {
			Game.disappear(hitObject);
		}
		else if (hitObjectName == "tankTile") {
			Game.blinkBrickObjects([hitObject], 400, 3, Game.gameOver);
		}
	}
}
Game.disappear(ammoTile);


if (collidedObjects.length > 0) {
	var hitObject = collidedObjects.first();
	var hitObjectName = hitObject.getName();

	if (!isEnemyTank && hitObjectName == "enemyTankTile") {
		enemyTankTiles.splice(enemyTankTiles.indexOf(hitObject), 1);
		Game.score();
		Game.disappear(hitObject);
	}

	if (hitObjectName == "ammoTile") {
		Game.disappear(hitObject);
	}
	else if (hitObjectName == "tankTile") {
		Game.blinkBrickObjects([hitObject], 400, 3, Game.gameOver);
	}
}
Game.disappear(ammoTile);


if (collidedObjects.length > 0) {
	var hitObject = collidedObjects.first();
	var hitObjectName = hitObject.getName();	
	
	if (hitObjectName == "tankTile") {
		Game.blinkBrickObjects([hitObject], 400, 3, Game.gameOver);
	}
	else {
		Game.disappear(hitObject);

		if (!isEnemyTank && hitObjectName == "enemyTankTile") {
			enemyTankTiles.splice(enemyTankTiles.indexOf(hitObject), 1);
			Game.score();
		}
	}
}
Game.disappear(ammoTile);