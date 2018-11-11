Rails.application.routes.draw do
  get 'welcome/home'
  devise_for :users
  namespace :users do
    root :to => "profiles#new"
  end
  root 'events#index'
  resources :events
  resources :profiles, except: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
