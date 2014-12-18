var ViewModel = (function () {
    function ViewModel(scoreListener) {
        this.scoreListener = scoreListener;
        this.startNewGame();
    }
    ViewModel.prototype.startNewGame = function () {
        this.game = new TennisGameImpl();
        this.scoreListener(this.game.getScore());
    };
    ViewModel.prototype.wonPoint = function (p) {
        if (this.game.getScore().substr(0, 4) === "Game") {
            return;
        }
        this.game.wonPoint(p);
        this.scoreListener(this.game.getScore());
    };
    return ViewModel;
})();
//# sourceMappingURL=ViewModel.js.map