# Tennis Kata: Typescript, Jasmine and BDD

This Kata provides a starting point for practicing *Behavior Driven Development* (BDD) with *Typescript* as programming language and
*Jasmine* to specify your tests.

If you don't know the term BDD yet, read [this blog post](http://dannorth.net/introducing-bdd/) from the inventor of the term or the [behaviour-driven.org wiki](http://behaviour-driven.org). In summary BDD it is about writing tests first and additionally documenting the behavioural intent of the system with these tests.

## Preparation

Befor you can start you need to install [Node.js](http://nodejs.org/). This is the javascript runtime environment, 
which is used build and run this project.
After exectuing the following steps, you will have development environment for this Kata.

##  Build the project
1. Fork or clone this repository

2. Open a console at the root of your local repository (where this README is placed)

3. Run ```npm install```.
    This downloads all node modules specified in package.json into folder node_modules.
    The modules are needed for building this project and executing the tests.

4. Run ```grunt init```
    This downloads Typescript declaration files (d.ts) specified in tsd.json.
    [Grunt](http://gruntjs.com/) is a javscript task runner. 
    The tasks are defined in GruntFile.js.

5. Run ```grunt``` 
    This watches for changes in the source file. On a change the file is compiled and the tests are executed.

6. Open your favorite text editor with the following files:

  - TennisGame.ts - The Interface whioch is given and should not be modified
  - TennisGameImpl.ts - Your implementation of TennisGame goes here
  - TennisGameSpec.ts - Your test code goes here
  
7. Edit "TennisGameImpl.ts" by modifying the return value. 
   Look at your console: The file is compiled and the tests are run.
   You should see that one test fails.

Congratulations you can now start the Typescript Tennis Kata. As a first step, try to fix the failing test by providing the expected return value. Then go on and read the complete task description below.

## The task
Tennis has a rather quirky scoring system, and to newcomers it can be a little difficult to keep track of. The tennis society has contracted you to build a scoreboard to display the current score during tennis games. 

Your task is to write a “TennisGame” class containing the logic which outputs the correct score as a string for display on the scoreboard. When a player scores a point, it triggers a method to be called on your class letting you know who scored the point. Later, you will get a call “score()” from the scoreboard asking what it should display. This method should return a string with the current score.

You can read more about Tennis scores [at wikipedia](http://en.wikipedia.org/wiki/Tennis_scoring_system#Game_score) which is summarized below:

1. A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
2. The running score of each game is described in a manner peculiar to tennis: scores from zero to four points are described as "love", "15", "30", "40" and "Game" respectively. 
3. If both players have won the same number of points but less than three points, the score is described as "love-all", "15-all" and "30-all". If at least three points have been scored by each player, and the scores are equal, the score is "deuce".
4. If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game is "Advantage" for the player in the lead.

You need only report the score for the current game. Sets and Matches are out of scope.

### Examples
- If the game has just began, the score is "love-all".
- If the first player has one point and second none, the score is "15-love".
- If the first player is named "A" and has four points and the second player has three points, the score is "Advantage A".
- If the first player is named "A" and has five points and the second player has three points, player "A" has won the game. 
The score is "Game A". 


## Acknowledgements

This Kata for TDD is based on the Tennis Kata for refactoring of Emily Bache. 
She provides this Kata for several programming languages. 
Here is her [blog post](http://emilybache.blogspot.co.at/2011/08/refactoring-kata-fun.html)
and [the code is on github](https://github.com/emilybache/Tennis-Refactoring-Kata).

