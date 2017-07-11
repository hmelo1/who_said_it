require 'rails_helper'

RSpec.describe Game, :type => :model do

  before do
    @character1 = Character.create(name: "Skeletor", title_1: "Master Villain", title_2: "Master Villain", img: "skeletor.jpg")
    @character2 = Character.create(name: "George Carlin", title_1: "Master Villain", title_2: "Master Villain", img: "george_carlin.jpg")
    @quote1 = Quote.create(content: "I help no one but myself.", source: "www.source.com", tag: "ego", character_id: @character1.id)
    @quote2 = Quote.create(content: "I'm so powerful, I even impress myself.", source: "www.source.com", tag: "ego", character_id: @character2.id)
    @quote3 = Quote.create(content: "Listen, I am not nice, I am not kind, and I am not wonderful.", source: "www.source.com", tag: "ego", character_id: @character1.id)
    @game = Game.create
    @game.characters = [@character1, @character2]
  end

  describe 'Character Associations' do
    it 'has many characters through a join table' do
      expect(@game.characters.count).to eq(2)
    end
    it 'has many quotes through characters' do
      expect(@game.quotes.count).to eq(3)
    end
  end

  describe "Character Attributes" do
    it 'has a state' do
    	expect(@game.state).to eq("[]")
    end

    it 'has boolean for complete/incomplete' do
    	expect(@game.completed).to eq(false)
    end
  end
  
end
