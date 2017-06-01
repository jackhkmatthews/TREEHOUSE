function checkForShip (player, coordinates) {
    let shipPresent;

    player.ships.forEach((ship) => {
        shipPresent = ship.locations.filter((actualCoordinate) => {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
        })[0];
    });

    return !!shipPresent;

}

module.exports.checkForShip = checkForShip;
