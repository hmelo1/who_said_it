def character_import(filename, name, description, img, img_selected)
	character = Character.create(
		name: name,
		description: description,
		img: img,
		img_selected: img_selected
	)

	json = ActiveSupport::JSON.decode(File.read("db/seeds/quotes/#{filename}.json"))
	json.each do |key, value|
	  value.each do |quote|
	  	Quote.create(content: quote["content"], source: quote["source"], character_id: character.id)
	  end
	end
end

# Adolf Hitler
character_import("adolf_hitler", "Adolf Hitler", "Leader of the Nazi Party, mass-murderer and most famous white supremacist in world history.", "adolf_hitler.jpg", "adolf_hitler_selected.jpg")

# Bill Hicks
character_import("bill_hicks", "Bill Hicks", "Stand-up comedian, chain smoker and raging misanthropist.", "bill_hicks.jpg", "bill_hicks_selected.jpg")

# Donald Trump
character_import("donald_trump", "Donald Trump", "45th U.S. President. Eats pizza with a fork and knife. Potential harbinger of the apocalypse.", "donald_trump.jpg", "donald_trump_selected.jpg")

# Mr. Krabs
character_import("mr_krabs", "Mr. Krabs", "Avid capitalist and owner of the Krusty Krab. Specializes in labor exploitation.", "mr_krabs.jpg", "mr_krabs_selected.jpg")

# George W. Bush
character_import("george_bush", "George Bush", "43rd U.S. President, meme-friendly war criminal and professional shoe dodger.", "george_bush.jpg", "george_bush_selected.jpg")

# George Carlin
character_import("george_carlin", "George Carlin", "Stand-up Comedian, renowned cynic. Made the bald ponytail fashionable again.", "george_carlin.jpg", "george_carlin_selected.jpg")

# God
character_import("god", "God (Yahweh)", "Allegedly created the universe in 6 days. Known to get into fits of jealous rage.", "god.jpg", "god_selected.jpg")

# Henry Kissinger
character_import("henry_kissinger", "Henry Kissinger", "56th Secretary of State, Committed Genocide with a Swagger", "henry_kissinger.jpg", "henry_kissinger_selected.jpg",)

# Mr. Burns
character_import("mr_burns", "Mr. Burns", "Nuclear Power Plant Owner, trap door activator and ruthless businessman.", "mr_burns.jpg", "mr_burns_selected.jpg")

# Noam Chomsky
character_import("noam_chomsky", "Noam Chomsky", "Social-critic, World Renowned Intellectual", "noam_chomsky.jpg", "noam_chomsky_selected.jpg")

# Joseph Stalin
character_import("joseph_stalin", "Joseph Stalin", "Ex-Soviet Leader and prize-winning political repressor.", "stalin.jpg", "stalin_selected.jpg")

# Stewie Griffin
character_import("stewie_griffin", "Stewie Griffin", "Deranged matricidal infant with a cuddly side.", "stewie_griffin.jpg", "stewie_griffin_selected.jpg")
