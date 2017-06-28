class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
    	t.integer :num_of_questions
    	t.integer :game_timer
      t.timestamps
    end
  end
end
