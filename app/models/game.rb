class Game < ApplicationRecord
	has_many :game_logs
  has_many :characters, through: :game_logs
	has_many :quotes, through: :characters
	serialize :ten_quote_ids, Array

	def game_quotes
    if ten_quote_ids.length == 10
      quotes.where(id: ten_quote_ids)
    else
      ten_quotes = quotes.order('RANDOM()').limit(10) 
      update ten_quote_ids: ten_quotes.map(&:id)
      ten_quotes
    end
  end
end
