# Donald Trump

donald_trump = Character.create(
	name: "Donald Trump", 
	title: "45th U.S. President, Vocal Misogynist", 
	img: "donald_trump.png"
)

donald_trump_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/donald_trump.json'))

donald_trump_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: donald_trump.id)
  end
end

# George W. Bush

george_w_bush = Character.create(
	name: "George W. Bush", 
	title: "43rd U.S. President, Dodger of Shoes", 
	img: "george_w_bush.png"
)

george_w_bush_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/george_w_bush.json'))

george_w_bush_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: george_w_bush.id)
  end
end

# Hitler

hitler = Character.create(
	name: "Adolf Hitler", 
	title: "Leader of the Nazi Party, Mass-Murderer", 
	img: "hitler.png"
)

hitler_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/hitler.json'))

hitler_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: hitler.id)
  end
end

# Mr. Krabs

mr_krabs = Character.create(
	name: "Eugene Krabs", 
	title: "Owner of the Krusty Krab, Avid Capitalist", 
	img: "mr_krabs.png"
)

mr_krabs_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/mr_krabs.json'))

mr_krabs_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: mr_krabs.id)
  end
end

# Skeletor

skeletor = Character.create(
	name: "skeletor", 
	title: "Owner of the Krusty Krab, Avid Capitalist", 
	img: "skeletor.png"
)

skeletor_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/skeletor.json'))

skeletor_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: skeletor.id)
  end
end

# Stalin

stalin = Character.create(
	name: "Joseph Stalin", 
	title: "Soviet Revolutionary, Red Terror Enthusiast", 
	img: "stalin.png"
)

stalin_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/stalin.json'))

stalin_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: stalin.id)
  end
end

# Stewie 

stewie = Character.create(
	name: "Stewie Griffin", 
	title: "Baby, Matricidal Enthusiast", 
	img: "stewie.png"
)

stewie_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/stewie.json'))

stewie_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: stewie.id)
  end
end

# The Brain

the_brain = Character.create(
	name: "Stewie Griffin", 
	title: "Baby, Matricidal Enthusiast", 
	img: "the_brain.png"
)

the_brain_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/the_brain.json'))

the_brain_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: the_brain.id)
  end
end

# Ursula

ursula = Character.create(
	name: "Ursula", 
	title: "Villainous Sea Witch", 
	img: "ursula.png"
)

ursula_json = ActiveSupport::JSON.decode(File.read('db/seeds/quotes/ursula.json'))

ursula_json.each do |key, value|
  value.each do |quote|
  	Quote.create(content: quote["content"], source: quote["source"], tag: quote["tag"], character_id: ursula.id)
  end
end
