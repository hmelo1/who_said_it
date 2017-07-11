class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :title_1
      t.string :title_2
      t.string :img
      t.string :img_selected

      t.timestamps
    end
  end
end
