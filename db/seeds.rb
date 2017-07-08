def character_import(filename, name, title_1, title_2, img)
	character = Character.create(
		name: name,
		title_1: title_1,
		title_2: title_2,
		img: img
	)

	json = ActiveSupport::JSON.decode(File.read("db/seeds/quotes/#{filename}.json"))
	json.each do |key, value|
	  value.each do |quote|
	  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: character.id)
	  end
	end
end


# Bill Hicks
character_import("bill_hicks", "Bill Hicks", "Chain Smoker", "Raging Misanthropist", "bill_hicks.jpg")

# Donald Trump
character_import("donald_trump", "Donald Trump", "45th U.S. President", "Unrepentant Misogynist", "donald_trump.jpg")

# Eugene Krabs
character_import("mr_krabs", "Eugene Krabs", "Owner of the Krusty Krab", "Avid Capitalist", "mr_krabs.jpg")

# George W. Bush
character_import("george_w_bush", "George W. Bush", "43rd U.S. President", "Dodger of Shoes", "george_w_bush.jpg")

# George Carlin
character_import("george_carlin", "George Carlin", "Stand-up Comedian",  "Renowned Cynic", "george_carlin.jpg")

# Hitler
character_import("hitler", "Adolf Hitler", "Leader of the Nazi Party", "Mass-Murderer", "hitler.jpg")

# Mr. Burns
character_import("mr_burns", "Mr. Burns", "Nuclear Power Plant Owner", "Trap Door Activator", "mr_burns.jpg")

# Skeletor
character_import("skeletor", "Skeletor", "Muscular Blue Humanoid", "Aspiring Master of the Universe", "skeletor.jpg")

# Stalin
character_import("joseph_stalin", "Joseph Stalin", "Soviet Leader", "Red Terror Extraordinaire", "stalin.jpg")

# Stewie
character_import("stewie", "Stewie Griffin", "Baby", "Deranged Matricidal Maniac", "stewie.jpg")