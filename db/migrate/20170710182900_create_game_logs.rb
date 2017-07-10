class CreateGameLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :game_logs do |t|
    	t.integer :game_id
      t.integer :character_id

      t.timestamps
    end
  end
end
