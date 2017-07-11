class Quote < ApplicationRecord
	belongs_to :character
	validates :content, :tag, :source, presence: true

	private

	def character_name
		self.character.name
	end
	
end
