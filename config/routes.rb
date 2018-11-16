Rails.application.routes.draw do
  root 'welcome#show'
  resources :welcome
  devise_for :users
  resources :events do
    resources :user_events, only: [:create, :destroy]
    resources :messages, only: [:create]
  end
  resources :profiles
  resources :activities
  resources :locations, only: [:index]
  get 'location/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
