class Quote < ApplicationRecord
	belongs_to :character
	validates :content, :source, :character_id, presence: true
	after_save :save_character_name

	def save_character_name
    if character_name == nil
      name = character.name
			update character_name: name
    end
	end

end
