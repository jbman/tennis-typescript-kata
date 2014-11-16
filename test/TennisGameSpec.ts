/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('For a TennisGame', function() {
    
  var g: TennisGame;

  beforeEach(function() {
    g = new TennisGameImpl();
  });

  it('when it has just started, the score should be "love-all"', function() {
    expect(g.getScore()).toBe('love-all');
  });
  
});

