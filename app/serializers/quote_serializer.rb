class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :source, :tag, :character_id, :character_name
  belongs_to :character
end
