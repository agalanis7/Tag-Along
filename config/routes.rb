Rails.application.routes.draw do
  root 'welcome#show'
  resources :welcome
  devise_for :users
<<<<<<< HEAD
  resources :events, except: [:show ]
=======
  resources :events do
    resources :user_events, only: [:create, :destroy]
  end
>>>>>>> 18044384bcdf6498855a940ae260b435965a000f
  resources :profiles
  resources :activities
  resources :locations, only: [:index]
  get 'location/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
