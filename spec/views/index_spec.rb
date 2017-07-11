require "rails_helper"

RSpec.feature "Index", :type => :feature do
  scenario "Visiting the home page" do
  	binding.pry
    visit "/"
    expect(page).to have_content "Who Said It?"
    expect(page).to have_content "The Game of Deciding Who Said What"
  end
end