class QuoteSerializer < ActiveModel::Serializer
  attributes :id, :content, :source, :character_id, :character_name
  belongs_to :character
end
