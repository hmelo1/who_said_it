Rails.application.routes.draw do
	root "home#index"
	resources :game, only: [:new, :create]

end
