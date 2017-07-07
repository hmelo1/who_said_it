class Character < ApplicationRecord
	has_many :games
	has_many :quotes
	validates :name, :title_1, :title_2, :img, presence: true

end
