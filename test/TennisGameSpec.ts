/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

interface State {
  /** Points of player A */
  a: number;
  /** Points of player B */
  b: number;
  /** Expected game score */
  s: string;
}

describe('For a TennisGame', function() {

  var g: TennisGame;

  beforeEach(function() {
    g = new TennisGameImpl();
  });

  it('when it has just started, the score should be "love-all"', function() {
    expect(g.getScore()).toBe('love-all');
  });

  var winPoints = function(player: Player, points: number) {
    for(var i=0; i < points; i++) {
      g.wonPoint(player);
    };
  }

  var createAndTestState = function(state: State) {
    it('when player "A" wins ' + state.a + ' point(s), ' +
        'and player "B" wins ' + state.b + ' point(s), ' +
        'the score should be "' + state.s + '"',
        function() {
          winPoints(Player.A, state.a);
          winPoints(Player.B, state.b);
          expect(g.getScore()).toBe(state.s);
        });
  };

  describe('Scores from zero to three points are described as ' +
  '"love", "15", "30", and "40" respectively.', function() {
    [
      {a:1, b:0, s:'15-love'},
      {a:2, b:0, s:'30-love'},
      {a:3, b:0, s:'40-love'},
      {a:0, b:1, s:'love-15'},
      {a:0, b:2, s:'love-30'},
      {a:0, b:3, s:'love-40'}
    ].forEach(createAndTestState);
  });

  describe('If both players have won the same number of points but less than three points, ' +
  'the score is described as "15-all" and "30-all".'+
  'If at least three points have been scored by each player, and the scores are equal, ' +
  'the score is "deuce"', function() {
    [
      {a:0, b:0, s:'love-all'},
      {a:1, b:1, s:'15-all'},
      {a:2, b:2, s:'30-all'},
      {a:3, b:3, s:'deuce'},
      {a:4, b:4, s:'deuce'},
      {a:5, b:5, s:'deuce'},
      {a:23, b:23, s:'deuce'}
    ].forEach(createAndTestState);
  });

  describe('If at least three points have been scored by each side ' +
  'and a player has one more point than his opponent, ' +
  'the score of the game is "advantage" for the player in the lead.', function() {
    [
      {a:4, b:3, s:'Advantage A'},
      {a:5, b:4, s:'Advantage A'},
      {a:23, b:22, s:'Advantage A'},
      {a:3, b:4, s:'Advantage B'},
      {a:4, b:5, s:'Advantage B'},
      {a:22, b:23, s:'Advantage B'},
      {a:3, b:1, s:'40-15'},
      {a:3, b:2, s:'40-30'},
      {a:1, b:3, s:'15-40'},
      {a:2, b:3, s:'30-40'},
    ].forEach(createAndTestState)
  });

  describe('A game is won by the first player to have won at least four points in total' +
  'and at least two points more than the opponent.', function() {
    [
      {a:4, b:2, s:'Game A'},
      {a:5, b:3, s:'Game A'},
      {a:6, b:4, s:'Game A'},
      {a:23, b:21, s:'Game A'},
      {a:2, b:4, s:'Game B'},
      {a:3, b:5, s:'Game B'},
      {a:4, b:6, s:'Game B'},
      {a:21, b:23, s:'Game B'}
    ].forEach(createAndTestState)
  });

});

