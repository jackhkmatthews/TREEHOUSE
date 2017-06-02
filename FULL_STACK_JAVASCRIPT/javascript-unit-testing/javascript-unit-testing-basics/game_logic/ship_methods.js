function checkForShip (player, coordinates) {
  let hitShip;

  player.ships.some(ship => {
    return ship.locations.some(actualCoordinates => {
      if ((actualCoordinates[0] === coordinates[0]) && (actualCoordinates[1] === coordinates[1])) {
        hitShip = ship;
        return true
      }
    });
  });

  return hitShip ? hitShip : false;
}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);

}

function fireOnOponent(player, coordinates) {
  hitShip = checkForShip(player, coordinates);
  if (hitShip) { damageShip(hitShip, coordinates) }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fireOnOponent = fireOnOponent;



