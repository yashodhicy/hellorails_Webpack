Rails.application.routes.draw do
  root 'root#index'

  get '/random_greeting', to: 'greetings#index'
  resources :greetings, only: [:index]
end
