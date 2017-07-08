class GamesController < ApplicationController
	def new
		@game = Game.new
	end

	def save
		# After game is finished it is saved
	end

end
