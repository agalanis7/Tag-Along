Rails.application.routes.draw do
  root 'welcome#show'
  resources :welcome
  devise_for :users
  resources :events, except: [:show ]
  resources :profiles
  resources :activities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
