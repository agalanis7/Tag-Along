Rails.application.routes.draw do
  devise_for :users
  root 'events#index'
  resources :events, only: [:index, :create, :destroy, :update, :new, :edit]
  resources :profiles, only: [:show, :create, :destroy, :update, :new, :edit]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
