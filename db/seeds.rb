def character_import(filename, name, title, img)
	character = Character.create(
		name: name,
		title: title,
		img: img
	)

	json = ActiveSupport::JSON.decode(File.read("db/seeds/quotes/#{filename}.json"))
	json.each do |key, value|
	  value.each do |quote|
	  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: character.id)
	  end
	end
end

# Donald Trump
character_import("donald_trump", "Donald Trump", "45th U.S. President, Active Misogynist", "donald_trump.jpg")

# Eugene Krabs
character_import("mr_krabs", "Eugene Krabs", "Owner of the Krusty Krab, Avid Capitalist", "mr_krabs.jpg")

# George W. Bush
character_import("george_w_bush", "George W. Bush", "43rd U.S. President, Dodger of Shoes", "george_w_bush.jpg")

# Hitler
character_import("hitler", "Adolf Hitler", "Leader of the Nazi Party, Mass-Murderer", "hitler.jpg")

# Montgomery Burns
character_import("mr_burns", "Montgomery Burns", "Evil Owner of the Springfield Nuclear Power Plant", "mr_burns.jpg")

# Skeletor
character_import("skeletor", "Skeletor", "Aspiring Master of the Universe", "skeletor.jpg")

# Stalin
character_import("joseph_stalin", "Joseph Stalin", "Soviet Leader, Red Terror Extraordinaire", "stalin.jpg")

# Stewie
character_import("stewie", "Stewie Griffin", "Baby, Deranged Matricidal Maniac", "stewie.jpg")

# The Brain
character_import("the_brain", "The Brain", "Lab Mouse Obsessed with World Domination", "the_brain.jpg")

# Ursula
character_import("ursula", "Ursula", "Villainous Sea Witch, Compulsive Eater", "ursula.jpg")