Quote Categories:
	1. War
	2. Propaganda
	3. Ego
	4. Greed
	5. Sexism
	6. Racism

 
 Step 1: Integrate Basic Theme into Asset Pipeline 

 Step 2: CRUD for a Game (READ ONLY) (NO CREATE, UPDATE, DELETE)
 				 Games will be predefined 

 	Model Associations:
	 
	1. Game(num_of_questions: integer, score_to_win(max 30):integer)
		-Has Many character(2 characters Per Game)
		-Has Many Quotes through characters

	2. Characters(name:string, title:string)
		-Has Many Quotes
		-Belongs to Game (i.e. A game has two characters)

	3. Quotes(content:string, source:string, tag:string)
		-Belongs to character
