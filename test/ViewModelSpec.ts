/// <reference path='../typings/jasmine/jasmine.d.ts' />
/// <reference path='../references.ts' />

describe('Integration Test: For tennis game ViewModel', function() {

    var viewModel: ViewModel;
    var lastScore: String;

    beforeEach(function() {
        var listener = (score: String) => {
            lastScore = score;
        };
        this.viewModel = new ViewModel(listener);
    });

    it('at the beginning listener is called with score "love-all"', function() {
        expect(lastScore).toBe('love-all');
    });

    it('when point is won by Player A, listener is called with score "15-love"', function() {
        this.viewModel.wonPoint(Player.A);
        expect(lastScore).toBe('15-love');
    });

    it('when point is won by Player B, listener is called with score "love-15"', function() {
        this.viewModel.wonPoint(Player.B);
        expect(lastScore).toBe('love-15');
    });

    it('when game is restarted, listener is called with score "love-all"', function() {
        this.viewModel.wonPoint(Player.A);
        this.viewModel.startNewGame();
        expect(lastScore).toBe('love-all');
    });

    it('when game is won by Player A, further points are ignored"', function() {
        for(var i = 0; i<= 4; i++) {
            this.viewModel.wonPoint(Player.A);
        }
        expect(lastScore).toBe('Game A');
        for(var i = 0; i<= 6; i++) {
            this.viewModel.wonPoint(Player.B);
        }
        expect(lastScore).toBe('Game A');
    });


});
