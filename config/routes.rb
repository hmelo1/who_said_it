Rails.application.routes.draw do
	root "static#index"
	resources :games, only: [:new, :create]

end
