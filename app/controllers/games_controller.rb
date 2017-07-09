class GamesController < ApplicationController
	def create
		@character1 = Character.find_by(game_params["0"])
		@character2 = Character.find_by(game_params["1"])
		@game = Game.new
		@game.characters << @character1
		@game.characters << @character2
		@character1.games << @game
		@character2.games << @game
		binding.pry
	end

	def save
		# After game is finished it is saved
	end

	private

	def game_params
	   params.require(:characters).permit!
	end

end
