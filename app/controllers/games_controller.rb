class GamesController < ApplicationController
	def create
		@character1 = Character.find_by(game_params["0"])
		@character2 = Character.find_by(game_params["1"])
		@game = Game.create
		@game.characters = [@character1, @character2]
    render json: @game, status: 201
	end

	def save
		# After game is finished it is saved
	end

	def index
		@games = Game.all
		render json: @games
	end

	def show 
		@game = Game.find(params[:id])
		render json: @game
	end

	private

	def game_params
	   params.require(:characters).permit!
	end

end
