class GamesController < ApplicationController
	def create
		@character1 = Character.find_by(character_params["0"])
		@character2 = Character.find_by(character_params["1"])
		@game = Game.create
		@game.characters = [@character1, @character2]
    render json: @game, status: 201
	end

	def save
		@game = Game.find(params[:id])
		@game.update(state: params[:state], completed: true)
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

	def character_params
		params.require(:characters).permit!
	end

	def game_params
		params.permit(:id, :state => [])
	end

end
