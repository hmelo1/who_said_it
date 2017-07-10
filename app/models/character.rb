class Character < ApplicationRecord
	has_many :game_logs
  has_many :games, through: :game_logs
	has_many :quotes
	validates :name, :title_1, :title_2, :img, presence: true

end
