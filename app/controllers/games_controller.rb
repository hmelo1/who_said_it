class GamesController < ApplicationController
	def create
		@game = Game.create
		character_params.each do |character|
			@game.characters << Character.find_by(character_params[character])
		end
    render json: @game, status: 201
	end

	def save
		@game = Game.find(game_params[:id])
		@game.update(state: game_params[:state], completed: true)
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
