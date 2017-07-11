require 'rails_helper'

RSpec.describe Quote, :type => :model do

  before do
    @character1 = Character.create(name: "Skeletor", title_1: "Master Villain", title_2: "Master Villain", img: "skeletor.jpg")
    @character2 = Character.create(name: "George Carlin", title_1: "Master Villain", title_2: "Master Villain", img: "george_carlin.jpg")
    @quote1 = Quote.create(content: "I help no one but myself.", source: "www.source.com", tag: "ego", character_id: @character1.id)
    @quote2 = Quote.create(content: "I'm so powerful, I even impress myself.", source: "www.source.com", tag: "ego", character_id: @character2.id)
    @quote3 = Quote.create(content: "Listen, I am not nice, I am not kind, and I am not wonderful.", source: "www.source.com", tag: "ego", character_id: @character1.id)
    @game = Game.create
    @game.characters = [@character1, @character2]
  end

  describe "Quote Associations" do
    it 'belongs to a character' do
      expect(@quote1.character).to eq(@character1)
    end
  end

  describe "Quote Attributes" do

    it 'has content' do
    	expect(@quote1.content).to eq("I help no one but myself.")
    end

    it 'has a source' do
    	expect(@quote1.source).to eq("www.source.com")
    end

    it 'has an tag' do
    	expect(@quote1.tag).to eq("ego")
    end
  end

  describe 'Quote Validations' do   
    it "doesn't save without content" do
      invalid_quote = Quote.new(tag: "general", source: "www.quotes.com", character_id: @character1.id)
      expect(invalid_quote.save).to eq(false)
    end

    it "doesn't save without a source" do
      invalid_quote = Quote.new(content: "this is a quote", tag: "general", character_id: @character1.id)
      expect(invalid_quote.save).to eq(false)
    end

    it "doesn't save without a tag" do
      invalid_quote = Quote.new(content: "this is some content", source: "www.quotes.com", character_id: @character1.id)
      expect(invalid_quote.save).to eq(false)
    end    
  end
  
end
