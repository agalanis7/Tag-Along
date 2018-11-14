Rails.application.routes.draw do
<<<<<<< HEAD
  get 'welcome/home'
  devise_for :users
  root 'events#index'
=======
  root 'welcome#show'
  resources :welcome
  devise_for :users
>>>>>>> master
  resources :events, except: [:show ]
  resources :profiles
  resources :activities

  resources :locations, only: [:index]
  get 'location/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
