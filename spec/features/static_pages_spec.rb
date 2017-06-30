require "rails_helper"

RSpec.feature "Splash Page", :type => :feature do
  scenario "Visiting the home page" do
    visit "/"
    expect(page).to have_content "Who Said It?"
  end
end