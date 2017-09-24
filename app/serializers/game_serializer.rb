class GameSerializer < ActiveModel::Serializer
  attributes :id, :difficulty, :completed, :game_quotes, :state
  has_many :characters
  has_many :quotes
end
