class GameController < ApplicationController
	def new
		@game = Game.new
	end
end
