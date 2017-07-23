class CreateQuotes < ActiveRecord::Migration[5.1]
  def change
    create_table :quotes do |t|
      t.string :content
      t.string :source
      t.string :tag
      t.belongs_to :character, index: true
      t.string :character_name

      t.timestamps
    end
  end
end
