class GameController < ApplicationController
	def new
		@game = Game.new
		@donald_trump = Character.find_by(name: "Donald Trump")
		@george_w_bush = Character.find_by(name: "George W. Bush")
		@hitler = Character.find_by(name: "Adolf Hitler")
	end

	def create

	end

end
