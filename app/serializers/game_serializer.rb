class GameSerializer < ActiveModel::Serializer
  attributes :id, :state, :completed, :generate_quotes
  has_many :characters
  has_many :quotes
end
