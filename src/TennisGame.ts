enum Player {A, B};

interface TennisGame {

  /** 
   * Notfies this TennisGame instance that the player has won a point.
   */
  wonPoint(player: Player): void;
  
  /** 
   * Returns the verbal score of the game. 
   * Example: Returns "15-love" if player A has won one point and 
   * player B hos not yet won a point .
   */
  getScore(): string;
}


