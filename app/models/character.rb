class Character < ApplicationRecord
	has_many :games
	has_many :quotes
	validates :name, :title, :img, presence: true

end
