class GamesController < ApplicationController
	def create
		@game = Game.create(difficulty_params)
		character_params.each do |character|
			@game.characters << Character.find_by(character_params[character])
		end
    render json: @game, status: 201
	end

	def save
		@game = Game.find(postgame_params[:id])
		@game.update(state: postgame_params[:state], completed: true)
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

	def difficulty_params
		params.permit(:difficulty)
	end

	def postgame_params
		params.permit(:id, :state => [])
	end

end
