class GameSerializer < ActiveModel::Serializer
  attributes :id, :state, :completed, :game_quotes
  has_many :characters
  has_many :quotes
end
