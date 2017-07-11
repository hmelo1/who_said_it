Rails.application.routes.draw do
	root "home#index"
	post '/games/create', to: 'games#create', as: 'create_game'
	post '/games/save', to: 'games#save', as: 'save_game'
	resources :characters, only: [:index, :show]
	resources :games, only: [:index, :show]
	resources :quotes, only: [:index, :show]
end
