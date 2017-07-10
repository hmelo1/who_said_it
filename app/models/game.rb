class Game < ApplicationRecord
	has_many :game_logs
  has_many :characters, through: :game_logs
	has_many :quotes, through: :characters
end
