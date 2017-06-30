def json_import(filename, name, title, img)
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
json_import("donald_trump", "Donald Trump", "45th U.S. President, Vocal Misogynist", "donald_trump.png")

# George W. Bush
json_import("george_w_bush", "George W. Bush", "43rd U.S. President, Dodger of Shoes", "george_w_bush.png")

# Hitler
json_import("hitler", "Adolf Hitler", "Leader of the Nazi Party, Mass-Murderer", "hitler.png")

# Mr. Krabs
json_import("mr_krabs", "Eugene Krabs", "Owner of the Krusty Krab, Avid Capitalist", "mr_krabs.png")

# Skeletor
json_import("skeletor", "Skeletor", "Aspiring Master of the Universe, Archenemy of He-Man", "skeletor.png")

# Stalin
json_import("joseph_stalin", "Joseph Stalin", "Soviet Revolutionary, Red Terror Extraordinaire", "stalin.png")

# Stewie
json_import("stewie", "Stewie Griffin", "Baby, Deranged Matricidal Maniac", "stewie.png")

# The Brain
json_import("the_brain", "The Brain", "Lab Mouse Obsessed with World Domination", "the_brain.png")

# Ursula
json_import("ursula", "Ursula", "Villainous Sea Witch", "ursula.png")
