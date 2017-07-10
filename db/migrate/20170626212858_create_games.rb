class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
    	t.text :state, default: "[]"
    	t.boolean :completed, default: false
      t.timestamps
    end
  end
end
