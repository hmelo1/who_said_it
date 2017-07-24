class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :img
  has_many :quotes
  has_many :games
end
