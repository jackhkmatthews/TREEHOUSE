const expect = require('chai').expect;


describe('checkForShip', function() {
  const checkForShip = require('../game_logic/ship_methods').checkForShip;

  var player;

  before(function() {
    player = {
      ships: [
        {
          locations: [
            [0, 0], [0, 1]
          ]
        },
        {
          locations: [
            [1, 0], [1, 1]
          ]
        },
        {
          locations: [
            [2, 0], [2, 1], [2, 2], [2, 3]
          ]
        }
      ]
    }
  })

  it('should correctly report no ship at given players coordinate', function() {
    expect(checkForShip(player, [9, 9])).to.be.false;
  })

  it('it should correctly report a ship at given players coordinate', function() {
    expect(!!checkForShip(player, [0, 0])).to.be.true;
  })

  it('should handle ships located at more than one coordinate', function() {
    expect(!!checkForShip(player, [0, 0])).to.be.true;
    expect(!!checkForShip(player, [0, 1])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  })

  it('should handle checking multiple ships', function() {
    expect(!!checkForShip(player, [0, 0])).to.be.true;
    expect(!!checkForShip(player, [0, 1])).to.be.true;
    expect(!!checkForShip(player, [1, 0])).to.be.true;
    expect(!!checkForShip(player, [1, 1])).to.be.true;
    expect(!!checkForShip(player, [2, 3])).to.be.true;
    expect(checkForShip(player, [9, 9])).to.be.false;
  })
})


describe('damageShip', function(){
  const damageShip = require('../game_logic/ship_methods').damageShip;

  it('should register damage on a given ship at a given location', function () {

    const ship = {
      locations: [[0, 0]],
      damage: []
    }

    damageShip(ship, [0, 0])
    expect(ship.damage).to.not.be.empty;
    expect(ship.damage[0]).to.deep.equal([0,0]);
  })
})

describe('fireOnOponent', function(){
  const fireOnOponent = require('../game_logic/ship_methods').fireOnOponent;
  var player;

  beforeEach(function(){
    player = {
      ships: [
        {
          locations: [
            [0, 0], [0, 1]
          ],
          damage: []
        },
        {
          locations: [
            [1, 0], [1, 1]
          ],
          damage: []
        },
        {
          locations: [
            [2, 0], [2, 1], [2, 2], [2, 3]
          ],
          damage: []
        }
      ]
    }

  })

  it('should check for hit on player and register damage on the first ship', function() {
    fireOnOponent(player, [0, 0])
    expect(player.ships[0].damage).to.not.be.empty;
    expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
  })

  it('should check for hit on player and register damage on the correct ship', function() {
    fireOnOponent(player, [1, 1])
    expect(player.ships[0].damage).to.be.empty;
    expect(player.ships[1].damage).to.not.be.empty;
    expect(player.ships[1].damage[0]).to.deep.equal([1, 1]);
  })

})
























