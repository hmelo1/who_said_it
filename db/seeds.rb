def character_import(filename, name, title_1, title_2, img, img_selected)
	character = Character.create(
		name: name,
		title_1: title_1,
		title_2: title_2,
		img: img,
		img_selected: img_selected
	)

	json = ActiveSupport::JSON.decode(File.read("db/seeds/quotes/#{filename}.json"))
	json.each do |key, value|
	  value.each do |quote|
	  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: character.id)
	  end
	end
end


# Bill Hicks
character_import("bill_hicks", "Bill Hicks", "Chain Smoker", "Raging Misanthropist", "bill_hicks.jpg", "bill_hicks_selected.jpg")

# Donald Trump
character_import("donald_trump", "Donald Trump", "45th U.S. President", "Unrepentant Misogynist", "donald_trump.jpg", "donald_trump_selected.jpg")

# Mr. Krabs
character_import("mr_krabs", "Mr. Krabs", "Owner of the Krusty Krab", "Avid Capitalist", "mr_krabs.jpg", "mr_krabs_selected.jpg")

# George W. Bush
character_import("george_w_bush", "George W. Bush", "43rd U.S. President", "Dodger of Shoes", "george_w_bush.jpg", "george_w_bush_selected.jpg")

# George Carlin
character_import("george_carlin", "George Carlin", "Stand-up Comedian",  "Renowned Cynic", "george_carlin.jpg", "george_carlin_selected.jpg")

# God
character_import("god", "God", "Alpha and Omega",  "Expert Sculptor", "god.jpg", "god_selected.jpg")

# Hitler
character_import("hitler", "Adolf Hitler", "Leader of the Nazi Party", "Mass-Murderer", "hitler.jpg", "hitler_selected.jpg")

# King Joffrey
character_import("mr_burns", "Mr. Burns", "Nuclear Power Plant Owner", "Trap Door Activator", "mr_burns.jpg", "mr_burns_selected.jpg")

# Mr. Burns
character_import("king_joffrey", "King Joffrey", " Heir to King Baratheon", "Egomaniacal Snowflake", "king_joffrey.jpg", "king_joffrey_selected.jpg",)

# Skeletor
character_import("skeletor", "Skeletor", "Muscular Blue Humanoid", "Aspiring Master of the Universe", "skeletor.jpg", "skeletor_selected.jpg")

# Stalin
character_import("joseph_stalin", "Joseph Stalin", "Soviet Leader", "Red Terror Extraordinaire", "stalin.jpg", "stalin_selected.jpg")

# Stewie
character_import("stewie", "Stewie Griffin", "Baby", "Deranged Matricidal Maniac", "stewie.jpg", "stewie_selected.jpg")