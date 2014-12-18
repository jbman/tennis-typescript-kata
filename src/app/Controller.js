var Controller = (function () {
    function Controller() {
        this.game = new TennisGameImpl();
        this.bind();
    }
    Controller.create = function () {
        new Controller();
    };
    Controller.prototype.bind = function () {
        var _this = this;
        this.scoreElement = document.getElementsByClassName("js-bind-score")[0];
        this.buttonA = document.getElementsByClassName("js-action-point-a")[0];
        this.buttonB = document.getElementsByClassName("js-action-point-b")[0];
        this.restartElement = document.getElementsByClassName("js-action-restart")[0];
        this.updateScore();
        this.restartElement.onclick = function () {
            _this.game = new TennisGameImpl();
            _this.updateScore();
        };
        this.buttonA.onclick = function () {
            _this.game.wonPoint(0 /* A */);
            _this.updateScore();
        };
        this.buttonB.onclick = function () {
            _this.game.wonPoint(1 /* B */);
            _this.updateScore();
        };
    };
    Controller.prototype.updateScore = function () {
        this.scoreElement.innerHTML = this.game.getScore();
    };
    return Controller;
})();
//# sourceMappingURL=Controller.js.map