Rails.application.routes.draw do
	root "static#index"
	resources :game, only: [:new, :create]

end
