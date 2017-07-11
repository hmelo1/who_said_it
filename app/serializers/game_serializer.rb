class GameSerializer < ActiveModel::Serializer
  attributes :id, :state, :completed
  has_many :characters
  has_many :quotes
end
