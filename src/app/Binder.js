var Binder = (function () {
    function Binder() {
    }
    Binder.bind = function () {
        var scoreElement = document.getElementsByClassName("js-bind-score")[0];
        var buttonA = document.getElementsByClassName("js-action-point-a")[0];
        var buttonB = document.getElementsByClassName("js-action-point-b")[0];
        var restartElement = document.getElementsByClassName("js-action-restart")[0];
        var updateScoreFunction = function (score) {
            scoreElement.innerHTML = score;
        };
        var viewModel = new ViewModel(updateScoreFunction);
        restartElement.onclick = function () {
            viewModel.startNewGame();
        };
        buttonA.onclick = function () {
            viewModel.wonPoint(0 /* A */);
        };
        buttonB.onclick = function () {
            viewModel.wonPoint(1 /* B */);
        };
    };
    return Binder;
})();
//# sourceMappingURL=Binder.js.map