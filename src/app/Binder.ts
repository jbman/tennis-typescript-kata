/// <reference path='../../references.ts' />

class Binder {

    public static bind() {
        var scoreElement = <HTMLElement> document.getElementsByClassName("js-bind-score")[0];
        var buttonA = <HTMLElement> document.getElementsByClassName("js-action-point-a")[0];
        var buttonB = <HTMLElement> document.getElementsByClassName("js-action-point-b")[0];
        var restartElement = <HTMLElement> document.getElementsByClassName("js-action-restart")[0];

        var updateScoreFunction = (score: string) => {
            scoreElement.innerHTML = score;
        };
        var viewModel = new ViewModel(updateScoreFunction);

        restartElement.onclick = () => {
            viewModel.startNewGame();
        };

        buttonA.onclick = () => {
            viewModel.wonPoint(Player.A);
        };

        buttonB.onclick = () => {
            viewModel.wonPoint(Player.B);
        };
    }
}




