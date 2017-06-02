function checkForShip (player, coordinates) {
  let hit = false;
  let hitIndex;

  hit = player.ships.some((ship, index) => {
    return ship.locations.some(actualCoordinates => {
      if ((actualCoordinates[0] === coordinates[0]) && (actualCoordinates[1] === coordinates[1])) {
        hitIndex = index;
        return true
      }
    });
  });

  console.log(hitIndex);

  return hitIndex;

}

function damageShip(ship, coordinates) {
  ship.damage.push(coordinates);

}

function fireOnOponent(player, coordinates) {
  hitIndex = checkForShip(player, coordinates);
  if(hitIndex > -1) {damageShip(player.ships[hitIndex], coordinates)}
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fireOnOponent = fireOnOponent;



