class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :source, :tag
  belongs_to :character, serializer: CharacterSerializer
end
