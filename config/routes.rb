Rails.application.routes.draw do
  devise_for :users
  root 'events#index'
  resources :events, except: [:show ]
  resources :profiles
  resources :activities 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
