class Character < ApplicationRecord
	has_many :game_logs
  has_many :games, through: :game_logs
	has_many :quotes
	validates :name, :description, :img, presence: true

end
