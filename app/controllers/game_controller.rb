class GameController < ApplicationController
	def new
		@game = Game.new
		@trump = Character.find_by(name: "Donald Trump")
		@bush = Character.find_by(name: "George W. Bush")
		@hitler = Character.find_by(name: "Adolf Hitler")
	end

	def create

	end

end
