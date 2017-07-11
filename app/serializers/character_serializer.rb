class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :title_1, :title_2
  has_many :quotes
  has_many :games
end
