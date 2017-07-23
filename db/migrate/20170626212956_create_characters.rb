class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :description
      t.string :img
      t.string :img_selected

      t.timestamps
    end
  end
end
