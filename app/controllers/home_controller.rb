class HomeController < ApplicationController
	def index
		@characters = Character.all
		@donald_trump = Character.find_by(name: "Donald Trump")
		@george_w_bush = Character.find_by(name: "George W. Bush")
		@hitler = Character.find_by(name: "Adolf Hitler")
		@mr_krabs = Character.find_by(name: "Eugene Krabs")
		@skeletor = Character.find_by(name: "Skeletor")
		@stewie = Character.find_by(name: "Stewie Griffin")
		@joseph_stalin = Character.find_by(name: "Joseph Stalin")
		@bill_hicks = Character.find_by(name: "Bill Hicks")
		@george_carlin = Character.find_by(name: "George Carlin")
	end
end
