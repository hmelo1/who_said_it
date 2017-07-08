class GamesController < ApplicationController
	def create
		binding.pry
		@game = Game.new
	end

	def save
		# After game is finished it is saved
	end

	private

	def game_params
		
	end

end
