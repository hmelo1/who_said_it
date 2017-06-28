class Quote < ApplicationRecord
	belongs_to :character
	validates :content, :tag, :source, presence: true
	
end
