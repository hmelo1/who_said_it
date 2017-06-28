class Game < ApplicationRecord
	has_many :characters
	has_many :quotes, through: :characters

end
