class AddTenQuoteIdsToGames < ActiveRecord::Migration[5.1]
  def change
    add_column :games, :ten_quote_ids, :text
  end
end
