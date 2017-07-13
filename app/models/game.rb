class Game < ApplicationRecord
	has_many :game_logs
  has_many :characters, through: :game_logs
	has_many :quotes, through: :characters

	def generate_quotes
		quotes.shuffle.sample(10)
	end

end
