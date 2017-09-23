class GamesController < ApplicationController
	def create
		@game = Game.create
		@character1 = Character.find_by(character_params["0"])
		@character2 = Character.find_by(character_params["1"])
		@game.characters = [@character1, @character2]

		if character_params["2"]
			@character3 = Character.find_by(character_params["2"])
			@game.characters << @character3
		end

		if character_params["3"]
			@character4 = Character.find_by(character_params["3"])
			@game.characters << @character4
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
