# [Who Said It? <-- Link](https://whosaidit.co)

Who Said It is a quote-picking game built in Ruby and Javascript. After selecting two characters, 10 quotes will be generated from all available quotes of the selected characters. A single quote will be displayed at a time and the user has to guess 'Who Said It'. Game score is provided upon completing the game.

**Getting Started**

1. Install Ruby Dependencies

`bundle install`

2. The database must first be seeded with the characters in order for the game to work as intended:

`rails db:migrate db:seed`

3. Install NPM packages

`npm install`

4. Test the Game on Local Server

Type `rails s` in Terminal to run Rails server and visit locahost:3000 in browser

**To Do**

1. Easy/Medium/Hard modes (2/3/4 characters respectively)
2. Implement Navigation Menu
3. Statistics (Easiest/Hardest Matchups)

**Contributing**

Contributions to the game are welcome!
 
