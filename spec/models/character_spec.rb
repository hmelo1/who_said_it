require 'rails_helper'

RSpec.describe Character, :type => :model do

  before do
    @character = Character.create(name: "Skeletor", title: "Master Villain", img: "skeletor.png")
    @quote1 = Quote.create(content: "I help no one but myself.", source: "www.source.com", tag: "ego", character_id: @character.id)
    @quote2 = Quote.create(content: "I'm so powerful, I even impress myself.", source: "www.source.com", tag: "ego", character_id: @character.id)
    @quote3 = Quote.create(content: "Listen, I am not nice, I am not kind, and I am not wonderful.", source: "www.source.com", tag: "ego", character_id: @character.id)
  end

  describe 'Character Associations' do
    it 'has many quotes' do
      expect(@character.quotes.count).to eq(3)
    end
  end

  describe "Character Attributes" do
    it 'has a name' do
    	expect(@character.name).to eq("Skeletor")
    end

    it 'has a title' do
    	expect(@character.title).to eq("Master Villain")
    end

    it 'has an image url' do
    	expect(@character.img).to eq("skeletor.png")
    end
  end

  describe 'Character Validations' do   
    it "doesn't save without a name" do
      invalid_character = Character.new(title: "President", img: "president.png")
      expect(invalid_character.save).to eq(false)
    end

    it "doesn't save without a title" do
      invalid_character = Character.new(name: "Mr. Jackson", img: "president.png")
      expect(invalid_character.save).to eq(false)
    end

    it "doesn't save without an image" do
      invalid_character = Character.new(name: "Mr. Jackson", title: "singer")
      expect(invalid_character.save).to eq(false)
    end
  end
  
end
