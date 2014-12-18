/// <reference path='../../references.ts' />

interface ScoreListener {
    (score: string): void;
}

/**
 * View model for the the Tennis Game score app.
 * The view model has methods which correspond to actions in the UI (e.g. button clicks) and accepts listeners which are
 * notified about updates in the data to be displayed by the UI.
 */
class ViewModel {

    private game: TennisGame;

    constructor(private scoreListener: ScoreListener) {
        this.startNewGame();
    }

    public startNewGame() {
        this.game = new TennisGameImpl();
        this.scoreListener(this.game.getScore());
    }

    public wonPoint(p: Player) {
        // Ignore further points if game is won
        // Maybe this should better be moved into GameImpl class
        if (this.game.getScore().substr(0, 4) === "Game") {
            return;
        }

        this.game.wonPoint(p);
        this.scoreListener(this.game.getScore());
    }
}




