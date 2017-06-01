const expect = require('chai').expect;


describe('checkForShip', function() {
    const checkForShip = require('../game_logic/ship_methods').checkForShip;

    it('should correctly report no ship at given players coordinate', function() {

        const player = {
            ships: [
                {
                    locations: [
                        [0, 0]
                    ]
                }
            ]
        }

        expect(checkForShip(player, [9, 9])).to.be.false;
    })
})
