/// <reference path="../references.ts" />

class TennisGameImpl implements TennisGame {

  private static TEXTS = ['love', '15', '30', '40'];

  private static OPPONENT = {A: 'B', B: 'A'};

  private points = {A: 0, B: 0};


  wonPoint(player: Player) {
    if (player == Player.A)
      this.points.A++;
    if (player == Player.B)
      this.points.B++;
  }

  private opponentPoints(player: string): number {
    return this.points[TennisGameImpl.OPPONENT[player]];
  }

  private bothPlayersHaveAtLeast3Points(): boolean {
    return this.points.A >= 3 && this.points.B >=3;
  }

  private has1MoreThanOther(player: string): boolean {
    return this.points[player] == this.opponentPoints(player) + 1;
  }

  private hastAtLeast4PointsAndAtLeast2MoreThanOther(player: string): boolean {
    return this.points[player] >= 4 && this.points[player] >= this.opponentPoints(player) + 2;
  }

  getScore(): string {
    if (this.points.A == this.points.B && this.points.A >= 3) {
      return 'deuce';
    }
    if (this.points.A == this.points.B) {
      return TennisGameImpl.TEXTS[this.points.A] + '-all';
    }
    if (this.bothPlayersHaveAtLeast3Points()) {
      if (this.has1MoreThanOther('A')) {
        return 'Advantage A';
      }
      if (this.has1MoreThanOther('B')) {
        return 'Advantage B';
      }
    }
    if (this.hastAtLeast4PointsAndAtLeast2MoreThanOther('A')) {
      return 'Game A';
    }
    if (this.hastAtLeast4PointsAndAtLeast2MoreThanOther('B')) {
      return 'Game B';
    }
    return TennisGameImpl.TEXTS[this.points.A] + '-' + TennisGameImpl.TEXTS[this.points.B];
  }
}
