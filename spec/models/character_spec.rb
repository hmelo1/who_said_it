require 'rails_helper'

RSpec.describe Character, :type => :model do

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
    it 'has many characters' do
      expect(@character1.games.count).to eq(1)
    end
    it 'has many quotes' do
      expect(@character1.quotes.count).to eq(2)
    end
  end

  describe "Character Attributes" do
    it 'has a name' do
    	expect(@character1.name).to eq("Skeletor")
    end

    it 'has two titles' do
    	expect(@character1.title_1).to eq("Master Villain")
      expect(@character1.title_2).to eq("Master Villain")
    end

    it 'has an image url' do
    	expect(@character1.img).to eq("skeletor.jpg")
    end
  end

  describe 'Character Validations' do   
    it "doesn't save without a name" do
      invalid_character = Character.new(title_1: "President", title_2: "President", img: "president.jpg")
      expect(invalid_character.save).to eq(false)
    end

    it "doesn't save without titles" do
      invalid_character = Character.new(name: "Mr. Jackson", img: "president.jpg")
      expect(invalid_character.save).to eq(false)
    end

    it "doesn't save without an image" do
      invalid_character = Character.new(name: "Mr. Jackson", title_1: "singer", title_2: "President",)
      expect(invalid_character.save).to eq(false)
    end
  end
  
end
