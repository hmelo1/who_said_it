class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_many :quotes
  has_many :games
end
